import { useSocket } from "../context/SocketContext";
import useConversation from "../zustand/useConversation";

const Conversation = ({ conversation }: { conversation: Conversation }) => {
  const { setSelectedConversation, selectedConversation } = useConversation();
  const { onlineUsers } = useSocket();
  return (
    <div
      className={`relative min-w-max flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-slate-700 hover:opacity-70 ${
        selectedConversation?.id === conversation.id ? "bg-slate-700" : ""
      }
      {onlineUsers.includes(conversation.id) ? "bg-slate-700" : ""}
      `}
      onClick={() => setSelectedConversation(conversation)}
    >
      <img
        src={conversation.profilePic}
        alt={conversation.name}
        className="w-10 h-10 rounded-full"
      />
      <span className="font-semibold truncate">{conversation.name}</span>
      {onlineUsers.includes(conversation.id) && (
        <div className="w-3 h-3 bg-green-500 rounded-full absolute top-1 left-1" />
      )}
    </div>
  );
};

export default Conversation;
