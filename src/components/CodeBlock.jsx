import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Copy, Check } from "lucide-react"; // Added Copy, Check

const CodeBlock = ({ language, children }) => {
  const [isCopied, setIsCopied] = useState(false);
  const codeString = String(children).replace(/\n$/, "");

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(codeString);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="relative rounded-md overflow-hidden my-2 group">
      
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 z-10 p-1.5 rounded-md 
                   bg-gray-700/50 hover:bg-gray-600/70 text-gray-200 
                   transition-all duration-200 opacity-0 group-hover:opacity-100"
        aria-label="Copy code"
        title="Copy code"
      >
        {isCopied ? (
          <Check size={16} className="text-green-400" />
        ) : (
          <Copy size={16} />
        )}
      </button>

      <SyntaxHighlighter
        style={dracula}
        language={language}
        PreTag="div"
        customStyle={{
          margin: 0,
          borderRadius: "0.375rem",
          fontSize: "0.9rem",
          paddingRight: "2.5rem",
        }}
      >
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};


export default CodeBlock