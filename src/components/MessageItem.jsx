import { useState } from "react";
import lumilogo from "../assets/lumi-logo.png";
import { User, Copy, Check } from "lucide-react";
import Markdown from "react-markdown";
import CodeBlock from "./CodeBlock";

const MessageItem = ({ msg }) => {
  const [isMsgCopied, setIsMsgCopied] = useState(false);

  const handleCopyMessage = async () => {
    try {
      await navigator.clipboard.writeText(msg.content);
      setIsMsgCopied(true);
      setTimeout(() => setIsMsgCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy message:", err);
    }
  };

  return (
    <div
      className={`flex w-full gap-4 animate-msg group ${
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

      {/* Message Bubble Container */}
      <div className="relative max-w-[85%]">
        <div
          className={`px-5 py-3 rounded-2xl text-[16px] leading-relaxed shadow-sm overflow-hidden relative
            ${
              msg.role === "user"
                ? "bg-brand-600 text-white rounded-tr-none"
                : "bg-white dark:bg-brand-800 text-brand-900 dark:text-brand-700 border border-brand-100 dark:border-brand-700 rounded-tl-none glass-morphism"
            }`}
        >
          <Markdown
            components={{
              // --- Fixed List Rendering ---
              ul: ({ node, ...props }) => (
                <ul className="list-disc pl-6 mb-2 space-y-1" {...props} />
              ),
              ol: ({ node, ...props }) => (
                <ol className="list-decimal pl-6 mb-2 space-y-1" {...props} />
              ),
              li: ({ node, ...props }) => <li className="pl-1" {...props} />,
              // --- Fixed Paragraph Spacing ---
              p: ({ node, ...props }) => (
                <p className="mb-3 last:mb-0" {...props} />
              ),
              // --- Fixed Headers ---
              h1: ({ node, ...props }) => (
                <h1 className="text-2xl font-bold mb-3 mt-4" {...props} />
              ),
              h2: ({ node, ...props }) => (
                <h2 className="text-xl font-bold mb-2 mt-3" {...props} />
              ),
              h3: ({ node, ...props }) => (
                <h3 className="text-lg font-bold mb-2 mt-3" {...props} />
              ),

              // --- Existing Components ---
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || "");
                if (!inline && match) {
                  return (
                    <CodeBlock
                      language={match[1]}
                      children={children}
                      {...props}
                    />
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

          {/* Spacer for copy button */}
          <div className="h-4 w-full" />
        </div>

        <button
          onClick={handleCopyMessage}
          className={`absolute bottom-2 right-2 p-1.5 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100 z-20
            ${
              msg.role === "user"
                ? "bg-brand-700 text-brand-100 hover:bg-brand-800 hover:text-white"
                : "bg-gray-100 dark:bg-brand-700 text-gray-500 dark:text-brand-300 hover:bg-gray-200 dark:hover:bg-brand-600"
            }`}
          title="Copy full message"
        >
          {isMsgCopied ? <Check size={14} /> : <Copy size={14} />}
        </button>
      </div>

      {msg.role === "user" && (
        <div className="w-10 h-10 rounded-full dark:bg-brand-700 flex items-center justify-center dark:text-brand-200 bg-brand-600 shrink-0">
          <User size={20} />
        </div>
      )}
    </div>
  );
};

export default MessageItem;
