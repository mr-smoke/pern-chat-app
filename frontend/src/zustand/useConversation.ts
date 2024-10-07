import { create } from "zustand";

interface ConversationState {
    selectedConversation: Conversation | null;
    setSelectedConversation: (conversation: Conversation | null) => void;
    messages: Message[];
    setMessages: (messages: Message[]) => void;
}

const useConversation = create<ConversationState>((set) => ({
    selectedConversation: null,
    setSelectedConversation: (conversation) => set({ selectedConversation: conversation }),
    messages: [],
    setMessages: (messages) => set({ messages }),
}));

export default useConversation;

// addConversation: (conversation) => set((state) => ({ conversations: [...state.conversations, conversation] })),
// addMessageToConversation: (conversationId, message) => set((state) => ({
//     conversations: state.conversations.map((conversation) => {
//         if (conversation.id === conversationId) {
//             return { ...conversation, messages: [...conversation.messages, message] };
//         }
//         return conversation;
//     }),
// })),