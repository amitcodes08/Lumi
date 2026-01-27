import useTheme from "../hooks/useTheme";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  const [theme, setTheme] = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-full hover:bg-brand-200 dark:hover:bg-brand-800 transition-colors"
      aria-label="Toggle Theme"
    >
      {theme === "dark" ? (
        <Sun className="w-5 h-5 text-brand-50" />
      ) : (
        <Moon className="w-5 h-5 text-brand-950" />
      )}
    </button>
  );
};

export default ThemeToggle;
