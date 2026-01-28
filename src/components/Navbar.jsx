import lumiLogo from "../assets/lumi-logo.png";
import ThemeToggle from "./ThemeToggle";
import MenuIcon from "../assets/icons/menu-burger.svg";
import { useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate("/login");
  };
  return (
    <nav className="h-16 w-full flex items-center justify-between px-6 border-b-2  border-brand-200 dark:border-brand-800 bg-brand-50 dark:bg-brand-900 transition-colors duration-300">
      <div className="flex items-center">
        <img
          src={MenuIcon}
          alt="Menu Icon"
          className="h-6 w-4 dark:invert md:hidden sm:block"
        />
        <img
          src={lumiLogo}
          alt="Lumi Logo"
          className="h-8 w-auto invert dark:invert-0 -mr-2"
        />
        <span className="text-2xl font-bold font-display text-brand-950 dark:text-white">
          lumi
        </span>
      </div>

      <div className="flex items-center">
        <ThemeToggle />
        <button
          onClick={handleSignIn}
          className="ml-4 px-4 py-1.5 font-semibold font-display rounded-lg bg-brand-600 text-white hover:bg-brand-700 dark:bg-brand-100 dark:text-brand-950 dark:hover:bg-brand-300 transition-colors duration-200"
        >
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
