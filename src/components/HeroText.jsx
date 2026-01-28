import {motion, AnimatePresence } from "framer-motion";
import useChatStore from "../store/useChatStore";

const HeroText = () => {
  const isChatActive = useChatStore((state) => state.isChatActive);

  return (
    <AnimatePresence>
      {!isChatActive && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="text-center"
        >
          <p className="md:text-4xl text-2xl font-semibold font-display text-brand-950 dark:text-white mb-4">
            Let's make the <span className="text-brand-500">AI unboring</span>.
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default HeroText;
