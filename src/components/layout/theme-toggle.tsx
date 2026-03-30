"use client";

import { useState } from "react";

const storageKey = "akhil-portfolio-theme";

type Theme = "light" | "dark";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof document === "undefined") {
      return "light";
    }

    return document.documentElement.classList.contains("dark") ? "dark" : "light";
  });

  function applyTheme(nextTheme: Theme) {
    const root = document.documentElement;
    root.classList.toggle("dark", nextTheme === "dark");
    root.dataset.theme = nextTheme;
    localStorage.setItem(storageKey, nextTheme);
    setTheme(nextTheme);
  }

  return (
    <button
      type="button"
      onClick={() => applyTheme(theme === "dark" ? "light" : "dark")}
      className="theme-toggle-button"
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    >
      <span className="h-2.5 w-2.5 rounded-full bg-blue-500" />
      {theme === "dark" ? "Light mode" : "Dark mode"}
    </button>
  );
}
