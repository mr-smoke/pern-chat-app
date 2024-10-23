import prisma from '../db/prisma.js';
import { getReceiverSocketId, io } from '../socket/socket.js';
export const sendMessage = async (req, res) => {
    try {
        const { id: receiverId } = req.params;
        const { id: senderId } = req.user;
        const { content } = req.body;
        let conversation = await prisma.conversation.findFirst({
            where: {
                usersIds: {
                    hasEvery: [senderId, receiverId],
                },
            },
        });
        if (!conversation) {
            conversation = await prisma.conversation.create({
                data: {
                    usersIds: {
                        set: [senderId, receiverId],
                    },
                },
            });
        }
        const newMessage = await prisma.message.create({
            data: {
                content,
                senderId,
                conversationId: conversation.id,
            },
        });
        if (newMessage) {
            conversation = await prisma.conversation.update({
                where: {
                    id: conversation.id,
                },
                data: {
                    messages: {
                        connect: {
                            id: newMessage.id,
                        },
                    },
                },
            });
        }
        const receiverSocketId = getReceiverSocketId(receiverId);
        if (receiverSocketId) {
            io.to(receiverSocketId).emit('newMessage', newMessage);
        }
        res.status(201).json(newMessage);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
};
export const getMessages = async (req, res) => {
    try {
        const { id: receiverId } = req.params;
        const { id: senderId } = req.user;
        const { limit = 10, offset = 0 } = req.query;
        let conversation = await prisma.conversation.findFirst({
            where: {
                usersIds: {
                    hasEvery: [senderId, receiverId],
                },
            },
            include: {
                messages: {
                    orderBy: {
                        createdAt: 'desc',
                    },
                    take: Number(limit),
                    skip: Number(offset),
                },
            },
        });
        if (!conversation) {
            return res.status(404).json({ error: 'No conversation found between these users' });
        }
        res.status(200).json(conversation.messages);
        return null;
    }
    catch (error) {
        res.status(500).send(error.message);
    }
};
export const getConversations = async (req, res) => {
    try {
        const { id: userId } = req.user;
        const conversations = await prisma.user.findMany({
            where: {
                id: {
                    not: userId,
                },
            },
            select: {
                id: true,
                name: true,
                profilePic: true,
            },
        });
        res.status(200).json(conversations);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
};
