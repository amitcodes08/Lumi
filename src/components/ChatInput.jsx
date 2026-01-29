import { useState, useRef, useEffect } from "react";
import { Send, Mic, ChevronDown, Bot, StopCircle } from "lucide-react";
import useChatStore from "../store/useChatStore"
import { fetchAIResponse } from "../assistants/googleAI";
import { fetchGroqResponse } from "../assistants/groqAI";



const ChatInput = () => {
  const [input, setInput] = useState("");
  const addMessage = useChatStore((state) => state.addMessage);

  const [isListening, setIsListening] = useState(false);
  const [showModelSelect, setShowModelSelect] = useState(false);

  const isChatActive = useChatStore((state) => state.isChatActive);
  const toggleChat = useChatStore((state) => state.toggleChat);
  const selectedModel = useChatStore((state) => state.selectedModel);
  const setSelectedModel = useChatStore((state) => state.setSelectedModel);
  const setIsLoading = useChatStore((state) => state.setIsLoading);
  const messages = useChatStore((state) => state.messages)


  const textareaRef = useRef(null);

  const models = ["Gemini-3-Flash", "Groq", "GPT-4o", "Llama 3"];

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + "px";
    }
  }, [input]);

  const handleSend = async () => {
    if (!input.trim()) return;

    addMessage({ id: Date.now(), role: "user", content: input });

    if(!isChatActive) {
      toggleChat();
    }

    setInput("");
    
    try {
      setIsLoading(true)
      if(selectedModel === "Gemini-3-Flash") {
        const aiResponse = await fetchAIResponse(input);
        addMessage({
          id: Date.now() + 1,
          role: "assistant",
          content: aiResponse,
        });
      }

      else if(selectedModel === "Groq") {
        const groqResponse = await fetchGroqResponse(input, messages)
        console.log(groqResponse)
        addMessage({
          id: Date.now() + 1,
          role: "assistant",
          content: groqResponse
        })
      }


  } catch (error) {
    console.error("Lumi AI Error:", error);
    addMessage({
      id: Date.now() + 1,
      role: "assistant",
      content: "Sorry, Lumi's connection flickered. Please try again.",
    });
    setIsLoading(false);
  }
  finally {
    setIsLoading(false);
  }

  };

  const toggleListening = () => {
    setIsListening(!isListening);
  };
  
  return (
      <div
        className={`w-full transition-all duration-300 ease-in-out px-4 py-4 ${
          isChatActive
            ? "fixed bottom-0 left-12 right-0 z-50 bg-linear-to-t from-white dark:from-brand-900 to-transparent"
            : "relative mx-auto max-w-3xl"
        }`}
      >
        <div className="w-full max-w-3xl mx-auto p-4">
          <div className="relative flex flex-col bg-brand-200 dark:bg-brand-700 rounded-3xl p-2 border border-transparent focus-within:border-brand-500 transition-all shadow-sm">
            <textarea
              ref={textareaRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Have anything on mind?"
              rows={1}
              className="w-full bg-transparent text-brand-600 dark:text-brand-50 placeholder-brand-400/70 p-3 text-lg font-sans outline-none resize-none max-h-48 overflow-y-auto"
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSend();
                }
              }}
            />

            <div className="flex justify-between items-center px-2 pb-1 pt-2">
              <div className="relative">
                <button
                  onClick={() => setShowModelSelect(!showModelSelect)}
                  className="flex items-center gap-2 text-sm font-medium text-brand-600 dark:text-brand-200 hover:bg-brand-300 dark:hover:bg-brand-600 px-3 py-1.5 rounded-full transition-colors"
                >
                  <Bot size={18} />
                  <span>{selectedModel}</span>
                  <ChevronDown
                    size={14}
                    className={`transition-transform ${showModelSelect ? "rotate-180" : ""}`}
                  />
                </button>

                {showModelSelect && (
                  <div className="absolute bottom-12 left-0 w-48 bg-white dark:bg-brand-800 rounded-xl shadow-xl border border-brand-100 dark:border-brand-600 overflow-hidden z-10 py-1">
                    {models.map((model) => (
                      <button
                        key={model}
                        onClick={() => {
                          setSelectedModel(model);
                          setShowModelSelect(false);
                        }}
                        className={`w-full text-left px-4 py-2 text-sm hover:bg-brand-100 dark:hover:bg-brand-600 ${
                          selectedModel === model
                            ? "text-brand-600 dark:text-brand-50 font-bold bg-brand-50 dark:bg-brand-700"
                            : "text-brand-500 dark:text-brand-200"
                        }`}
                      >
                        {model}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={toggleListening}
                  className={`p-2 rounded-full transition-all ${
                    isListening
                      ? "bg-red-500/10 text-red-500 animate-pulse"
                      : "text-brand-500 dark:text-brand-300 hover:bg-brand-300 dark:hover:bg-brand-600"
                  }`}
                  title="Speak"
                >
                  {isListening ? <StopCircle size={22} /> : <Mic size={22} />}
                </button>

                <button
                  onClick={handleSend}
                  disabled={!input.trim()}
                  className={`p-2 rounded-full transition-all ${
                    input.trim()
                      ? "bg-brand-600 text-white dark:bg-brand-50 dark:text-brand-900 shadow-md transform hover:scale-105 active:scale-95"
                      : "bg-brand-300 dark:bg-brand-600 text-brand-400 dark:text-brand-400 cursor-not-allowed"
                  }`}
                >
                  <Send size={20} className={input.trim() ? "ml-0.5" : ""} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default ChatInput;
