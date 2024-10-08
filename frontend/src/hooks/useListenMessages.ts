import { useEffect } from "react";
import { useSocket } from "../context/SocketContext";
import useConversation from "../zustand/useConversation";
import message from "../assets/message.mp3";

const useListenMessages = () => {
    const { messages, setMessages, selectedConversation } = useConversation();
    const { socket } = useSocket();

    useEffect(() => {
        const handleMessage = (newMessage: any) => {
            if (newMessage.senderId === selectedConversation?.id) {
                newMessage.shake = true;
                const audio = new Audio(message);
                audio.play();
                setMessages([...messages, newMessage]);
            }
        };

        socket?.on("newMessage", handleMessage);

        return () => {
            socket?.off("newMessage");
        };
    }, [socket, messages, setMessages]);

    return messages;
};

export default useListenMessages;