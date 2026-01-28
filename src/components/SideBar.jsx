import MenuIcon from "../assets/icons/menu-burger.svg";
import CrossIcon from "../assets/icons/cross-small.svg";
import { useState } from "react";

const SideBar = () => {
  const [isOpen, setIsopen] = useState(false);

  const handleExpand = () => {
    setIsopen((isOpen) => !isOpen);
  };

  return (
    <section
      className={`
        h-full bg-brand-100 dark:bg-brand-900 border-r border-brand-200 dark:border-brand-700 
        py-4 transition-all duration-300 ease-in-out
        hidden md:flex flex-col 
        ${isOpen ? "md:w-64" : "md:w-16 items-center"}
      `}
    >
      <div
        className={`w-full flex ${isOpen ? "justify-end px-4" : "justify-center"}`}
      >
        <button
          onClick={handleExpand}
          className="p-2 rounded-full hover:bg-brand-200 hover:dark:bg-brand-700 transition-colors focus:outline-none"
        >
          <img
            src={isOpen ? CrossIcon : MenuIcon}
            alt="Sidebar Toggle"
            className="h-6 w-5 dark:invert select-none"
          />
        </button>
      </div>
    </section>
  );
};

export default SideBar;
