import { useEffect, useRef } from "react";
import useChatStore from "../store/useChatStore";
import { User} from "lucide-react";
import lumilogo from "../assets/lumi-logo.png"

const ChatInterface = () => {
  const messages = useChatStore((state) => state.messages);
  const bottomRef = useRef(null); 

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div
      className="flex-1 overflow-y-auto px-4 pt-24 pb-12 custom-scrollbar bg-transparent"
      style={{ height: "calc(100vh - 160px)" }}
    >
      <div className="max-w-3xl mx-auto flex flex-col gap-8">
        {messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-64 text-brand-400">
            <Sparkles size={48} className="mb-4 opacity-20" />
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
                  <div className="w-10 h-10 rounded-full bg-brand-600 flex items-center justify-center text-white shadow-lg shrink-0">
                    <img src={lumilogo} className="w-full h-auto"/>
                  </div>
                )}

                <div
                  className={`max-w-[85%] px-5 py-3 rounded-2xl text-lg leading-relaxed shadow-sm
                  ${
                    msg.role === "user"
                      ? "bg-brand-600 text-white rounded-tr-none"
                      : "bg-white dark:bg-brand-800 text-brand-900 dark:text-brand-50 border border-brand-100 dark:border-brand-700 rounded-tl-none glass-morphism"
                  }`}
                >
                  <p className="whitespace-pre-wrap">{msg.content}</p>
                </div>

                {msg.role === "user" && (
                  <div className="w-8 h-8 rounded-full bg-brand-200 dark:bg-brand-700 flex items-center justify-center text-brand-600 shrink-0">
                    <User size={16} />
                  </div>
                )}
              </div>
            ))}
           <div ref={bottomRef} className="h-1" />
          </>
        )}
      </div>
    </div>
  );
};

export default ChatInterface;
