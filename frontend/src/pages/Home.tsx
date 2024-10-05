import { useState } from "react";
import useGetConversations from "../hooks/useGetConversations";
import useGetMessages from "../hooks/useGetMessages";
import useLogout from "../hooks/useLogout";
import useConversation from "../zustand/useConversation";
import useSendMessage from "../hooks/useSendMessage";

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
      <div className="border rounded-xl p-3 flex min-w-96">
        <div className="flex flex-col gap-3 w-1/2 border-r-2 p-3">
          <h1 className="text-3xl">Home Page</h1>
          <h2>Conversations</h2>
          {conversations.map((conversation) => (
            <div
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
          <button onClick={handleLogout}>Logout</button>
        </div>
        <div className="flex flex-col gap-3 w-1/2 p-3">
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
