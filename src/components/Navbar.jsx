import lumiLogo from "../assets/lumi-logo.png";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <nav className="h-16 w-full flex items-center justify-between px-6 border-b border-brand-200 dark:border-brand-800 bg-brand-50 dark:bg-brand-900 transition-colors duration-300">
      <div className="flex items-center gap-3">
        <img src={lumiLogo} alt="Lumi Logo" className="h-8 w-auto" />
        <span className="text-2xl font-bold font-display text-brand-950 dark:text-white">
          lumi
        </span>
      </div>

      <div>
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
