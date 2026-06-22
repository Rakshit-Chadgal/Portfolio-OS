"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light";

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType>({
  theme: "dark",
  toggleTheme: () => {},
});

export function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const storedTheme =
      localStorage.getItem("theme") as Theme;

    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.classList.add(
        storedTheme
      );
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme =
      theme === "dark" ? "light" : "dark";

    document.documentElement.classList.remove(
      theme
    );

    document.documentElement.classList.add(
      nextTheme
    );

    localStorage.setItem("theme", nextTheme);

    setTheme(nextTheme);
  };

  return (
    <ThemeContext.Provider
      value={{ theme, toggleTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () =>
  useContext(ThemeContext);