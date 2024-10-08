interface Conversation {
    id: string;
    name: string;
    profilePic: string;
}

interface Message {
    id: string;
    content: string;
    senderId: string;
    createdAt: string;
    shake?: boolean;
}
