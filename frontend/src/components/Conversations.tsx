import useGetConversations from "../hooks/useGetConversations";
import Conversation from "./Conversation";
import Loading from "./Loading";

const Conversations = () => {
  const { conversations, isLoading } = useGetConversations();

  return (
    <div className="flex-1 p-4 overflow-auto flex flex-col gap-3">
      {isLoading && <Loading />}
      {!conversations.length && !isLoading && (
        <p className="text-center text-xl">No conversations found</p>
      )}
      {!isLoading &&
        conversations.map((conversation) => (
          <Conversation key={conversation.id} conversation={conversation} />
        ))}
    </div>
  );
};

export default Conversations;
