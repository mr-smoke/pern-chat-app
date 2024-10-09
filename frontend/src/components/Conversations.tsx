import { FaFilter } from "react-icons/fa";
import useGetConversations from "../hooks/useGetConversations";
import useConversation from "../zustand/useConversation";
import Conversation from "./Conversation";
import Loading from "./Loading";

const Conversations = () => {
  const { conversations, isLoading } = useGetConversations();
  const { searchConversations, setSearchConversations } = useConversation();

  return (
    <div className="flex-1 p-4 overflow-auto flex md:flex-col gap-3 min-h-24">
      {isLoading && <Loading />}
      {!conversations.length && !isLoading && (
        <p className="text-center text-2xl">No conversation found</p>
      )}
      {searchConversations && (
        <>
          <div className="flex flex-col gap-3 justify-center">
            <p className="text-center text-xl hidden md:block">
              Search results for "{searchConversations}"
            </p>
            <p
              className="text-sm text-gray-500 flex justify-center items-center gap-3 p-2 border rounded-lg cursor-pointer"
              onClick={() => setSearchConversations(null)}
            >
              Unfilter
              <FaFilter />
            </p>
          </div>
          {conversations
            .filter((conversation) =>
              conversation.name.toLowerCase().includes(searchConversations)
            )
            .map((conversation) => (
              <Conversation key={conversation.id} conversation={conversation} />
            ))}
        </>
      )}
      {!isLoading &&
        !searchConversations &&
        conversations.map((conversation) => (
          <Conversation key={conversation.id} conversation={conversation} />
        ))}
    </div>
  );
};

export default Conversations;
