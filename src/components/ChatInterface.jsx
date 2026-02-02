import useChatStore from "../store/useChatStore";
import { useRef, useEffect } from "react";
import lumilogo from "../assets/lumi-logo.png";
import { User } from "lucide-react";
import Markdown from "react-markdown";

// Import Syntax Highlighter and Theme
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

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
          <div
            key={msg.id || index}
            className={`flex w-full gap-4 animate-msg ${
              msg.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            {/* Assistant Avatar */}
            {msg.role === "assistant" && (
              <div className="w-10 h-10 rounded-full bg-brand-600 flex items-center justify-center shadow-lg shrink-0 overflow-hidden">
                <img
                  src={lumilogo}
                  alt="Lumi"
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Message Bubble */}
            <div
              className={`max-w-[85%] px-5 py-3 rounded-2xl text-lg leading-relaxed shadow-sm overflow-hidden
                  ${
                    msg.role === "user"
                      ? "bg-brand-600 text-white rounded-tr-none"
                      : "bg-white dark:bg-brand-800 text-brand-900 dark:text-brand-700 border border-brand-100 dark:border-brand-700 rounded-tl-none glass-morphism"
                  }`}
            >
              <Markdown
                components={{
                  // 1. Code Handling (Block vs Inline)
                  code({ node, inline, className, children, ...props }) {
                    const match = /language-(\w+)/.exec(className || "");

                    // BLOCK CODE (```js ...)
                    if (!inline && match) {
                      return (
                        <div className="relative rounded-md overflow-hidden my-2">
                          <SyntaxHighlighter
                            style={dracula}
                            language={match[1]}
                            PreTag="div"
                            {...props}
                            customStyle={{
                              margin: 0,
                              borderRadius: "0.375rem", // rounded-md
                              fontSize: "0.9rem",
                            }}
                          >
                            {String(children).replace(/\n$/, "")}
                          </SyntaxHighlighter>
                        </div>
                      );
                    }

                    return (
                      <code
                        className={`${className} 
                          bg-brand-100 text-brand-700 dark:bg-brand-800 dark:text-brand-300 
                          px-1.5 py-0.5 rounded-md font-mono text-sm border border-brand-200 dark:border-brand-700`}
                        {...props}
                      >
                        {children}
                      </code>
                    );
                  },

                  strong({ node, children, ...props }) {
                    return (
                      <strong
                        className="font-bold text-brand-600 dark:text-brand-900"
                        {...props}
                      >
                        {children}
                      </strong>
                    );
                  },

                  a({ node, children, ...props }) {
                    return (
                      <a
                        className="text-blue-500 hover:underline break-all"
                        target="_blank"
                        rel="noopener noreferrer"
                        {...props}
                      >
                        {children}
                      </a>
                    );
                  },
                }}
              >
                {msg.content}
              </Markdown>
            </div>

            {msg.role === "user" && (
              <div className="w-10 h-10 rounded-full dark:bg-brand-700 flex items-center justify-center dark:text-brand-200 bg-brand-600 shrink-0">
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
