import React, { createContext, useContext, useState } from "react";

const initialValue =
  document.documentElement.getAttribute("data-theme") || "dark";

const ThemeContextValue = createContext(initialValue);
const ThemeContextFn = createContext(null);

const ThemeContextProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(initialValue);

  function setTheme() {
    if (currentTheme === "dark") {
      setCurrentTheme("light");
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      setCurrentTheme("dark");
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }

  return (
    <ThemeContextValue.Provider value={currentTheme}>
      <ThemeContextFn.Provider value={setTheme}>
        {children}
      </ThemeContextFn.Provider>
    </ThemeContextValue.Provider>
  );
};

export const useCurrentTheme = () => {
  const theme = useContext(ThemeContextValue);
  return theme;
};

export const useSetTheme = () => {
  const fn = useContext(ThemeContextFn);
  const optimizedFn = React.useCallback(fn, [fn]);
  return optimizedFn;
};

export default ThemeContextProvider;
