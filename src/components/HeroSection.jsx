import ChatInput from "./ChatInput";
import HeroText from "./HeroText";
import useChatStore from "../store/useChatStore";
import ChatInterface from "./ChatInterface";
const HeroSection = () => {
    const isChatActive = useChatStore((state) => state.isChatActive);

  return (
    <div className="flex flex-col items-center justify-center h-full bg-brand-100 dark:bg-brand-900 transition-colors duration-300 ">
      <HeroText />
      {isChatActive && <ChatInterface />}
    
      <ChatInput />
    </div>
  );
};

export default HeroSection;
