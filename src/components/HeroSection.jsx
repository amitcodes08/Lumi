import ChatInput from "./ChatInput";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full bg-brand-100 dark:bg-brand-900 transition-colors duration-300">
      <p className="md:text-4xl text-2xl font-semibold font-display text-brand-950 dark:text-white mb-4">
        Let's make the <span className="text-brand-500">AI unboring</span>.
      </p>
    
      <ChatInput/>
    </div>
  );
};

export default HeroSection;
