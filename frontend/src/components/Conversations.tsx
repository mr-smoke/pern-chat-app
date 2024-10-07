import useGetConversations from "../hooks/useGetConversations";
import useConversation from "../zustand/useConversation";
import Loading from "./Loading";

const Conversations = () => {
  const { conversations, isLoading } = useGetConversations();
  const { setSelectedConversation, selectedConversation } = useConversation();

  return (
    <div className="flex-1 p-4 overflow-auto flex flex-col gap-3">
      {isLoading && <Loading />}
      {!conversations.length && !isLoading && (
        <p className="text-center text-xl">No conversations found</p>
      )}
      {!isLoading &&
        conversations.map((conversation) => (
          <div
            className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-slate-700 hover:opacity-70 ${
              selectedConversation?.id === conversation.id ? "bg-slate-700" : ""
            }`}
            key={conversation.id}
            onClick={() => setSelectedConversation(conversation)}
          >
            <img
              src={conversation.profilePic}
              alt={conversation.name}
              className="w-10 h-10 rounded-full"
            />
            <span className="font-semibold">{conversation.name}</span>
          </div>
        ))}
    </div>
  );
};

export default Conversations;
