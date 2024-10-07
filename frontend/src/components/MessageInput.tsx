import { FaPaperPlane } from "react-icons/fa";
import useSendMessage from "../hooks/useSendMessage";
import { useState } from "react";

const MessageInput = () => {
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
  );
};

export default MessageInput;
