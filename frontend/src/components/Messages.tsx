import { FaHandPaper } from "react-icons/fa";
import useGetMessages from "../hooks/useGetMessages";
import Loading from "./Loading";

const Messages = () => {
  const { isLoading, messages } = useGetMessages();

  return (
    <div className="rounded-xl p-3 h-96 overflow-y-auto flex-1">
      {isLoading && <Loading />}
      {!messages.length && !isLoading && (
        <div className="text-5xl flex flex-col items-center justify-center h-full gap-12">
          <p className="text-center">Say hello and start to chat.</p>
          <FaHandPaper className="w-20 h-20 animate-bounce" />
        </div>
      )}
      {!isLoading &&
        messages.map((message) => (
          <div className="p-1" key={message.id}>
            <p className="p-3 rounded-xl bg-slate-700 w-max">
              {message.content}
            </p>
          </div>
        ))}
    </div>
  );
};

export default Messages;
