import { useState } from "react";
import useLogout from "../hooks/useLogout";
import useConversation from "../zustand/useConversation";
import useSendMessage from "../hooks/useSendMessage";
import { FaPaperPlane, FaSignOutAlt } from "react-icons/fa";
import Conversations from "../components/Conversations";
import Search from "../components/Search";
import Messages from "../components/Messages";

const Home = () => {
  const { handleLogout } = useLogout();
  const { selectedConversation } = useConversation();
  const { sendMessage } = useSendMessage();
  const [message, setMessage] = useState("");

  const messageHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) {
      return;
    }
    await sendMessage(message);
    setMessage("");
  };
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
          <h1 className="text-xl font-bold border-b-2 p-3">
            Chat with {selectedConversation?.name}
          </h1>
          <Messages />
          <form className="p-4 flex gap-3" onSubmit={messageHandler}>
            <input
              className="flex-1 p-3 rounded-lg bg-slate-700"
              type="text"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              placeholder="Type a message"
            />
            <button className="rounded-full bg-slate-700 p-3" type="submit">
              <FaPaperPlane className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
