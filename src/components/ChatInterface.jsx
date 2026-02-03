import useChatStore from "../store/useChatStore";
import { useEffect, useRef } from "react";
import MessageItem from "./MessageItem";
import lumilogo from "../assets/lumi-logo.png";

const ChatInterface = () => {
  const messages = useChatStore((state) => state.messages);
  const isLoading = useChatStore((state) => state.isLoading);
  const isChatActive = useChatStore((state) => state.isChatActive);

  const lastMessageContent = messages[messages.length - 1]?.content;

  const scrollRef = useRef(null);
  const bottomRef = useRef(null);

  const scrollToBottom = () => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages.length, lastMessageContent, isLoading]);

  return (
    <div
      ref={scrollRef}
      className="flex-1 overflow-y-auto px-4 pt-24 custom-scrollbar bg-transparent scroll-smooth"
      style={{ height: "calc(100vh - 160px)" }}
    >
      <div className="max-w-3xl mx-auto flex flex-col gap-8">
        {messages.map((msg, index) => (
          <MessageItem key={msg.id || index} msg={msg} />
        ))}

        {isLoading && (
          <div className="flex w-full gap-4 justify-start items-center animate-in fade-in duration-300">
            <div className="relative w-10 h-10 rounded-full bg-brand-600 flex items-center justify-center shadow-lg shrink-0 overflow-hidden">
              <img
                src={lumilogo}
                alt="Lumi Loading"
                className="w-full h-full object-cover animate-pulse"
              />
              <div className="absolute inset-0 border-2 border-t-white border-transparent rounded-full animate-spin" />
            </div>
            <div className="bg-white dark:bg-brand-800 px-5 py-3 rounded-2xl rounded-tl-none glass-morphism border border-brand-100 dark:border-brand-700 flex gap-1 items-center">
              <span className="w-2 h-2 bg-brand-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
              <span className="w-2 h-2 bg-brand-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
              <span className="w-2 h-2 bg-brand-400 rounded-full animate-bounce"></span>
            </div>
          </div>
        )}

        <div
          ref={bottomRef}
          className={`${isChatActive ? "h-48" : "h-12"} w-full transition-all duration-300`}
        />
      </div>
    </div>
  );
};

export default ChatInterface;
