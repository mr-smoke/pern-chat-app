import { FaHandPaper } from "react-icons/fa";
import useGetMessages from "../hooks/useGetMessages";
import Loading from "./Loading";
import Message from "./Message";

const Messages = () => {
  const { isLoading, messages } = useGetMessages();

  return (
    <div className="rounded-xl p-3 overflow-y-auto flex-1 flex flex-col gap-3">
      {isLoading && <Loading />}
      {!messages.length && !isLoading && (
        <div className="text-5xl flex flex-col items-center justify-center h-full gap-12">
          <p className="text-center">Say hello and start to chat.</p>
          <FaHandPaper className="w-20 h-20 animate-bounce" />
        </div>
      )}
      {messages.map((message, index) => {
        const prevMessage = index > 0 ? messages[index - 1] : null;
        const isNewDay = prevMessage
          ? new Date(message.createdAt).toDateString() !==
            new Date(prevMessage.createdAt).toDateString()
          : true;

        return (
          <>
            {isNewDay && (
              <div className="text-center text-xs text-gray-500 my-2">
                {new Date(message.createdAt).toLocaleDateString()}
              </div>
            )}
            <Message message={message} />
          </>
        );
      })}
    </div>
  );
};

export default Messages;
