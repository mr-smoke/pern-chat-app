import { create } from "zustand";

interface ConversationState {
    searchConversations: string | null;
    setSearchConversations: (search: string | null) => void;
    selectedConversation: Conversation | null;
    setSelectedConversation: (conversation: Conversation | null) => void;
    messages: Message[];
    setMessages: (messages: Message[]) => void;
}

const useConversation = create<ConversationState>((set) => ({
    searchConversations: null,
    setSearchConversations: (search) => set({ searchConversations: search }),
    selectedConversation: null,
    setSelectedConversation: (conversation) => set({ selectedConversation: conversation }),
    messages: [],
    setMessages: (messages) => set({ messages }),
}));

export default useConversation;