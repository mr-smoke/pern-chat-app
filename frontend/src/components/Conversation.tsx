import useConversation from "../zustand/useConversation";

const Conversation = ({ conversation }: { conversation: Conversation }) => {
  const { setSelectedConversation, selectedConversation } = useConversation();
  return (
    <div
      className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-slate-700 hover:opacity-70 ${
        selectedConversation?.id === conversation.id ? "bg-slate-700" : ""
      }`}
      onClick={() => setSelectedConversation(conversation)}
    >
      <img
        src={conversation.profilePic}
        alt={conversation.name}
        className="w-10 h-10 rounded-full"
      />
      <span className="font-semibold">{conversation.name}</span>
    </div>
  );
};

export default Conversation;
