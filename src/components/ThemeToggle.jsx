import { useContext } from "react";
import { ThemeContext } from "./../providers/ThemeProviders";

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="bg-gray-300 dark:bg-gray-700 rounded-full w-12 h-6 flex items-center justify-center focus:outline-none"
    >
      <div
        className={`bg-white dark:bg-black w-4 h-4 rounded-full transition-transform duration-300 transform ${
          isDarkMode ? "translate-x-6" : "translate-x-0"
        }`}
      />
    </button>
  );
};

export default ThemeToggle;
