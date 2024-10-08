import { useEffect, useRef } from "react";
import { useAuth } from "../context/AuthContext";
import { timeExtract } from "../utils/timeExtract";
import useConversation from "../zustand/useConversation";

const Message = ({ message }: { message: Message }) => {
  const { authUser } = useAuth();
  const { selectedConversation } = useConversation();
  const isOwner = message.senderId === authUser?.id;
  const profilePic = isOwner
    ? authUser?.profilePic
    : selectedConversation?.profilePic;
  const shake = message.shake ? "shake" : "";

  const messageEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (
    <div className={`flex ${isOwner ? "justify-end" : ""}`}>
      <div className={`flex flex-col gap-1 ${isOwner ? "items-end" : ""}`}>
        <div className="flex items-center gap-2">
          <img
            className={`w-8 h-8 ${isOwner ? "order-1" : ""}`}
            src={profilePic}
            alt="Message img"
          />
          <p className={`p-3 rounded-xl bg-slate-700 w-max ${shake}`}>
            {message.content}
          </p>
        </div>
        <p className="text-xs text-right">{timeExtract(message.createdAt)}</p>
        <div ref={messageEndRef} />
      </div>
    </div>
  );
};

export default Message;
