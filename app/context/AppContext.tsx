"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

// 1. Define what info our app will share globally
interface AppContextType {
  user: string | null;            // Your Auth State
  theme: "light" | "dark";        // Your Theme State
  toggleTheme: () => void;        // Function to flip the theme
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [user] = useState<string | null>("Alex"); // Example login user
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // Load the user's saved theme when the page opens
  useEffect(() => {
    const saved = localStorage.getItem("theme") as "light" | "dark";
    if (saved) setTheme(saved);
  }, []);

  // Every time the theme changes, update the actual website background
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <AppContext.Provider value={{ user, theme, toggleTheme }}>
      {children}
    </AppContext.Provider>
  );
}

// 2. The short hook to grab this data anywhere in your app
export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error("useApp must be used inside AppProvider");
  return context;
};
