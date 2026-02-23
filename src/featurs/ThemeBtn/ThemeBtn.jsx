import { useContext } from "react";
import ThemeContex from "../../conexts/Theme/Theme";
import { FaMoon, FaSun } from "react-icons/fa";
import clsx from "clsx";

export const ThemeBtn = () => {
  const { theme, themeToggle } = useContext(ThemeContex);
  return (
    <button
      onClick={themeToggle}
      className={clsx(
        "p-3 text-sm hover:opacity-85 rounded-full transition-all duration-150",
        theme === "dark" ? "bg-white text-zinc-950" : "bg-zinc-950 text-white",
      )}
    >
      {theme === "dark" ? <FaSun /> : <FaMoon />}
    </button>
  );
};
