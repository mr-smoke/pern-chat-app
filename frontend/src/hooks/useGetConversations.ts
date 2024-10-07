import { useEffect, useState } from "react";

interface Conversation {
    id: string;
    name: string;
    profilePic: string;
}

const useGetConversations = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [conversations, setConversations] = useState<Conversation[]>([]);

    useEffect(() => {
        const getConversations = async () => {
            try {
                setIsLoading(true);
                const response = await fetch("/api/message/conversations", {
                    method: "GET",
                });
                const data = await response.json();

                if (!response.ok) {
                    throw new Error(data.error);
                }

                setConversations(data);
            } catch (error: any) {
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        };

        getConversations();
    }, []);

    return { isLoading, conversations };
};

export default useGetConversations;