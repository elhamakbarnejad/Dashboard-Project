import { createContext, useEffect, useState } from "react";

const ThemeContex = createContext();
const getDefaultTheme = () => {
  return localStorage.getItem("theme") || "light";
};
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getDefaultTheme());
  const themeToggle = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };
  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);
  return (
    <ThemeContex.Provider value={{ theme, themeToggle }}>
      {children}
    </ThemeContex.Provider>
  );
};

export default ThemeContex;
