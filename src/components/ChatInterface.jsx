import useChatStore from "../store/useChatStore";

const ChatInterface = () => {
  const messages = useChatStore((state) => state.messages);

  return (
    <div className="flex-1 overflow-y-auto px-4 pt-20 pb-40">
      <div className="max-w-3xl mx-auto flex flex-col">
        {messages.map((msg) => (
          <div key={msg.id} role={msg.role}>
            content={msg.content}{" "}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatInterface;
