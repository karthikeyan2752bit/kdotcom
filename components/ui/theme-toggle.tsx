"use client";

import { useEffect, useState } from "react";

function getInitialTheme(): "light" | "dark" {
  if (typeof window === "undefined") {
    return "light";
  }

  const stored = window.localStorage.getItem("theme");
  if (stored === "light" || stored === "dark") {
    return stored;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">(getInitialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      type="button"
      onClick={() => setTheme((current) => (current === "dark" ? "light" : "dark"))}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300/80 bg-white/95 dark:bg-slate-900 text-slate-700 transition hover:border-emerald-400 hover:text-emerald-700 dark:border-slate-700  dark:text-slate-200 dark:hover:border-emerald-500 dark:hover:text-emerald-300"
      aria-label="Toggle dark and light theme"
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      <span className="text-base" aria-hidden="true">{theme === "dark" ? "☀" : "☾"}</span>
    </button>
  );
}
