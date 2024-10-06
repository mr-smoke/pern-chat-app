import { useState } from "react";
import useGetConversations from "../hooks/useGetConversations";
import useGetMessages from "../hooks/useGetMessages";
import useLogout from "../hooks/useLogout";
import useConversation from "../zustand/useConversation";
import useSendMessage from "../hooks/useSendMessage";
import { FaSearch, FaSignOutAlt } from "react-icons/fa";

const Home = () => {
  const { handleLogout } = useLogout();
  const { selectedConversation, setSelectedConversation } = useConversation();
  const { conversations } = useGetConversations();
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
      <div className="border rounded-xl flex w-full h-full md:w-2/3 md:h-3/4 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 text-white">
        <div className="flex flex-col flex-1 w-1/3 border-r-2">
          <div className="border-b-2 p-4 flex items-center gap-3">
            <input
              className="p-3 rounded-lg bg-slate-700 flex-1"
              type="text"
              placeholder="Search"
            />
            <button className="rounded-full bg-slate-700 p-3">
              <FaSearch className="w-5 h-5" />
            </button>
          </div>
          <div className="flex-1 p-4 overflow-auto flex flex-col gap-3">
            {conversations.map((conversation) => (
              <div
                className="flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-slate-700 hover:opacity-70"
                key={conversation.id}
                onClick={() => setSelectedConversation(conversation)}
              >
                <img
                  src={conversation.profilePic}
                  alt={conversation.name}
                  className="w-10 h-10 rounded-full"
                />
                <span>{conversation.name}</span>
              </div>
            ))}
          </div>
          <button onClick={handleLogout} className="self-start p-4">
            <FaSignOutAlt size={30} />
          </button>
        </div>
        <div className="flex flex-col gap-3 w-2/3 p-3">
          <h1 className="text-xl">Chat with {selectedConversation?.name}</h1>
          <div className="border rounded-xl p-3 h-96 overflow-y-auto">
            {isLoading && <p>Loading...</p>}
            {!isLoading &&
              messages.map((message) => (
                <div key={message.id}>
                  <span>{message.content}</span>
                </div>
              ))}
          </div>
          <form onSubmit={messageHandler}>
            <input
              type="text"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
