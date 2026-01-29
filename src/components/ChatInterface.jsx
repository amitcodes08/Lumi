import useChatStore from "../store/useChatStore";
import { useRef, useEffect } from "react";
import lumilogo from "../assets/lumi-logo.png"
import {User} from "lucide-react"

const ChatInterface = () => {
  // console.log("ChatInterface Rendered");

 const messages = useChatStore((state) => state.messages);
 const isLoading = useChatStore((state) => state.isLoading);

  const bottomRef = useRef(null);

  useEffect(() => {
    if (bottomRef.current) {
      const timeoutId = setTimeout(() => {
        bottomRef.current.scrollIntoView({ behavior: "smooth" });
      }, 100);
      return () => clearTimeout(timeoutId);
    }
  }, [messages.length, isLoading]); 
  return (
    <div
      className="flex-1 overflow-y-auto px-4 pt-24 pb-12 custom-scrollbar bg-transparent"
      style={{ height: "calc(100vh - 160px)" }}
    >
      <div className="max-w-3xl mx-auto flex flex-col gap-8">
        {messages.length === 0 && !isLoading ? (
          <div className="flex flex-col items-center justify-center h-64 text-brand-400">
            <p className="text-xl font-medium">Lumi is ready to assist you.</p>
          </div>
        ) : (
          <>
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex w-full gap-4 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                {msg.role === "assistant" && (
                  <div className="w-10 h-10 rounded-full bg-brand-600 flex items-center justify-center shadow-lg shrink-0 overflow-hidden">
                    <img
                      src={lumilogo}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                <div
                  className={`max-w-[85%] px-5 py-3 rounded-2xl text-lg leading-relaxed shadow-sm
                  ${
                    msg.role === "user"
                      ? "bg-brand-600 text-white rounded-tr-none"
                      : "bg-white dark:bg-brand-800 text-brand-900 dark:text-brand-950 border border-brand-100 dark:border-brand-700 rounded-tl-none glass-morphism"
                  }`}
                >
                  <p className="whitespace-pre-wrap">{msg.content}</p>
                </div>

                {msg.role === "user" && (
                  <div className="w-10 h-10 rounded-full bg-brand-200 dark:bg-brand-700 flex items-center justify-center text-brand-600 shrink-0">
                    <User size={20} />
                  </div>
                )}
              </div>
            ))}

            {isLoading && (
              <div className="flex w-full gap-4 justify-start items-center animate-in fade-in duration-300">
                <div className="relative w-10 h-10 rounded-full bg-brand-600 flex items-center justify-center shadow-lg shrink-0 overflow-hidden">
                  <img
                    src={lumilogo}
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

            <div ref={bottomRef} className="h-1" />
          </>
        )}
      </div>
    </div>
  );
};

export default ChatInterface