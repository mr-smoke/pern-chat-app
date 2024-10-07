import { useState } from "react";
import useGetMessages from "../hooks/useGetMessages";
import useLogout from "../hooks/useLogout";
import useConversation from "../zustand/useConversation";
import useSendMessage from "../hooks/useSendMessage";
import { FaPaperPlane, FaSearch, FaSignOutAlt } from "react-icons/fa";
import Conversations from "../components/Conversations";
import Loading from "../components/Loading";

const Home = () => {
  const { handleLogout } = useLogout();
  const { selectedConversation } = useConversation();
  const { isLoading, messages } = useGetMessages();
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
          <div className="border-b-2 p-4 flex items-center gap-3">
            <input
              className="p-3 rounded-lg bg-slate-700 flex-1"
              type="text"
              placeholder="Search..."
            />
            <button className="rounded-full bg-slate-700 p-3">
              <FaSearch className="w-5 h-5" />
            </button>
          </div>
          <Conversations />
          <button onClick={handleLogout} className="self-start p-4">
            <FaSignOutAlt size={30} />
          </button>
        </div>
        <div className="flex flex-col w-2/3">
          <h1 className="text-xl font-bold border-b-2 p-3">
            Chat with {selectedConversation?.name}
          </h1>
          <div className="rounded-xl p-3 h-96 overflow-y-auto  flex-1">
            {isLoading && <Loading />}
            {!isLoading &&
              messages.map((message) => (
                <div className="p-1" key={message.id}>
                  <p className="p-3 rounded-xl bg-slate-700 w-max">
                    {message.content}
                  </p>
                </div>
              ))}
          </div>
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
