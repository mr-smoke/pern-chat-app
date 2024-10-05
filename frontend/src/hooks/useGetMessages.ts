import { useEffect, useState } from "react";
import useConversation from "../zustand/useConversation";

const useGetMessages = () => {
    const [isLoading, setIsLoading] = useState(true);
    const { messages, setMessages, selectedConversation } = useConversation();

    useEffect(() => {
        const getMessages = async () => {
            if (!selectedConversation) {
                return;
            }
            setMessages([]);
            try {
                setIsLoading(true);
                const response = await fetch(`/api/message/${selectedConversation.id}`, {
                    method: "GET",
                });
                const data = await response.json();

                if (!response.ok) {
                    throw new Error(data.error);
                }

                setMessages(data);
            } catch (error: any) {
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        };

        getMessages();
    }, [selectedConversation, setMessages]);

    return { isLoading, messages };
}

export default useGetMessages;

