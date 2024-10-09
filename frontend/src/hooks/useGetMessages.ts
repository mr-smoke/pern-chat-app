import { useEffect, useState } from "react";
import useConversation from "../zustand/useConversation";

const useGetMessages = () => {
    const [isLoading, setIsLoading] = useState(true);
    const { messages, setMessages, selectedConversation } = useConversation();
    const [hasMoreMessages, setHasMoreMessages] = useState(true);

    useEffect(() => {
        const getMessages = async () => {
            if (!selectedConversation) {
                return;
            }
            setMessages([]);
            setHasMoreMessages(true);
            try {
                setIsLoading(true);
                const response = await fetch(`/api/message/${selectedConversation.id}?limit=10&offset=0`, {
                    method: "GET",
                });
                const data = await response.json();

                if (!response.ok) {
                    throw new Error(data.error);
                }

                if (data.length < 10) {
                    setHasMoreMessages(false);
                }
                setMessages(data.reverse());

            } catch (error: any) {
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        };

        getMessages();
    }, [selectedConversation, setMessages]);

    const getMoreMessages = async (offset = 10) => {
        if (!hasMoreMessages) {
            return;
        }
        try {
            setIsLoading(true);
            const response = await fetch(`/api/message/${selectedConversation?.id}?limit=10&offset=${offset}`, {
                method: "GET",
            });
            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error);
            }

            if (data.length < 10) {
                setHasMoreMessages(false);
            }
            setMessages([...data.reverse(), ...messages]);

        } catch (error: any) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    return { isLoading, messages, getMoreMessages };
}

export default useGetMessages;

