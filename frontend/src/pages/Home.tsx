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
    <main className="min-h-screen flex justify-center items-center">
      <div className="border rounded-xl flex flex-col md:flex-row w-full md:w-4/5 lg:w-3/4 xl:w-2/3 h-[715px] bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 text-white overflow-hidden relative">
        <section className="flex flex-col md:flex-1 w-full md:w-1/3 md:border-r-2">
          <Search />
          <Conversations />
          <button
            onClick={handleLogout}
            className="self-start p-4 md:relative absolute bottom-0 left-0"
          >
            <FaSignOutAlt size={30} />
          </button>
        </section>
        <section className="flex flex-col flex-1 md:flex-none w-full md:w-2/3 max-h-[30rem] md:max-h-none">
          {!selectedConversation ? (
            <div className="text-5xl flex flex-col items-center justify-center h-full gap-12 p-3">
              <p className="text-center">Select a user and start to chat.</p>
              <FaCommentAlt className="w-20 h-20 animate-bounce" />
            </div>
          ) : (
            <>
              <h1 className="text-xl font-bold border-y-2 p-3 truncate">
                Chat with {selectedConversation?.name}
              </h1>
              <Messages />
              <MessageInput />
            </>
          )}
        </section>
      </div>
    </main>
  );
};

export default Home;
