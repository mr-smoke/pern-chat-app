import { FaHandPaper } from "react-icons/fa";
import useGetMessages from "../hooks/useGetMessages";
import Loading from "./Loading";
import Message from "./Message";

const Messages = () => {
  const { isLoading, messages } = useGetMessages();

  return (
    <div className="rounded-xl p-3 h-96 overflow-y-auto flex-1 flex flex-col gap-3">
      {isLoading && <Loading />}
      {!messages.length && !isLoading && (
        <div className="text-5xl flex flex-col items-center justify-center h-full gap-12">
          <p className="text-center">Say hello and start to chat.</p>
          <FaHandPaper className="w-20 h-20 animate-bounce" />
        </div>
      )}
      {!isLoading &&
        messages.map((message) => (
          <Message key={message.id} message={message} />
        ))}
    </div>
  );
};

export default Messages;
