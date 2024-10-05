import { useState } from "react";
import useConversation from "../zustand/useConversation";
import toast from "react-hot-toast";

const useSendMessage = () => {
    const [isSending, setIsSending] = useState(false);
    const { selectedConversation, setMessages, messages } = useConversation();

    const sendMessage = async (content: string) => {
        if (!selectedConversation) {
            return;
        }

        setIsSending(true);
        try {
            const response = await fetch(`/api/message/send/${selectedConversation.id}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ content }),
            });
            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error);
            }

            setMessages([...messages, data]);
        } catch (error: any) {
            console.error(error);
            toast.error(error.message);
        } finally {
            setIsSending(false);
        }
    };

    return { isSending, sendMessage };
}

export default useSendMessage;