"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface AppContextType {
  user: string | null;
  setUser: (user: string | null) => void;

  theme: "light" | "dark";
  toggleTheme: () => void;
}

const AppContext = createContext<AppContextType | undefined>(
  undefined
);

export function AppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<string | null>(null);

  const [theme, setTheme] = useState<"light" | "dark">("light");

  const [mounted, setMounted] = useState(false);

  // Load saved values
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const savedUser = localStorage.getItem("user");

    if (
      savedTheme === "light" ||
      savedTheme === "dark"
    ) {
      setTheme(savedTheme);
    }

    if (savedUser) {
      setUser(savedUser);
    }

    setMounted(true);
  }, []);

  // Apply and save theme
  useEffect(() => {
    if (!mounted) return;

    const root = document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme, mounted]);

  // Save user
  useEffect(() => {
    if (!mounted) return;

    if (user) {
      localStorage.setItem("user", user);
    } else {
      localStorage.removeItem("user");
    }
  }, [user, mounted]);

  const toggleTheme = () => {
    setTheme((prev) =>
      prev === "light" ? "dark" : "light"
    );
  };

  // Prevent rendering before localStorage loads
  if (!mounted) {
    return null;
  }

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        theme,
        toggleTheme,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error(
      "useApp must be used inside AppProvider"
    );
  }

  return context;
};