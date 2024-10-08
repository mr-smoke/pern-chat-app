import { useEffect } from "react";
import { useSocket } from "../context/SocketContext";
import useConversation from "../zustand/useConversation";

const useListenMessages = () => {
    const { messages, setMessages, selectedConversation } = useConversation();
    const { socket } = useSocket();

    useEffect(() => {
        const handleMessage = (newMessage: any) => {
            if (newMessage.senderId === selectedConversation?.id) {
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