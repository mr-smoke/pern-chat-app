import useLogout from "../hooks/useLogout";
import useConversation from "../zustand/useConversation";
import { FaCommentAlt, FaSignOutAlt } from "react-icons/fa";
import Conversations from "../components/Conversations";
import Search from "../components/Search";
import Messages from "../components/Messages";
import MessageInput from "../components/MessageInput";

const Home = () => {
  const { handleLogout } = useLogout();
  const { selectedConversation } = useConversation();

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="border rounded-xl flex w-full h-full md:w-2/3 md:h-3/4 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 text-white overflow-hidden">
        <div className="flex flex-col flex-1 w-1/3 border-r-2">
          <Search />
          <Conversations />
          <button onClick={handleLogout} className="self-start p-4">
            <FaSignOutAlt size={30} />
          </button>
        </div>
        <div className="flex flex-col w-2/3">
          {!selectedConversation ? (
            <div className="text-5xl flex flex-col items-center justify-center h-full gap-12">
              <p className="text-center">Select a user and start to chat.</p>
              <FaCommentAlt className="w-20 h-20 animate-bounce" />
            </div>
          ) : (
            <>
              <h1 className="text-xl font-bold border-b-2 p-3">
                Chat with {selectedConversation?.name}
              </h1>
              <Messages />
              <MessageInput />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
