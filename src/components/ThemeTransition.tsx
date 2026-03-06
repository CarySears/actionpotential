"use client";

import { createContext, useContext, useEffect, useState, useCallback } from "react";
import WaveTransition from "./WaveTransition";
import GeometricShapes from "./GeometricShapes";

type ThemeMode = "dark" | "light";

type ThemeContextValue = {
  mode: ThemeMode;
  foldProgress: number;
};

const ThemeContext = createContext<ThemeContextValue>({
  mode: "dark",
  foldProgress: 0,
});

export function useThemeTransition() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useThemeTransition must be used within ThemeTransitionProvider");
  return ctx;
}

const FADE_START = 0.45; // 45% viewport scrolled
const FADE_END = 0.72;   // 72% viewport scrolled
const LIGHT_THRESHOLD = 0.82;
const DARK_THRESHOLD = 0.58;

export function ThemeTransitionProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<ThemeMode>("dark");
  const [foldProgress, setFoldProgress] = useState(0);

  const updateTheme = useCallback(() => {
    if (typeof window === "undefined") return;

    const y = window.scrollY;
    const vh = window.innerHeight;
    const start = vh * FADE_START;
    const end = vh * FADE_END;
    const rawProgress = (y - start) / Math.max(end - start, 1);
    const progress = Math.max(0, Math.min(rawProgress, 1));

    setFoldProgress(progress);

    setMode((prev) => {
      if (prev === "dark" && progress > LIGHT_THRESHOLD) return "light";
      if (prev === "light" && progress < DARK_THRESHOLD) return "dark";
      return prev;
    });
  }, []);

  useEffect(() => {
    updateTheme();
    const handleScroll = () => requestAnimationFrame(updateTheme);
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [updateTheme]);

  useEffect(() => {
    document.documentElement.style.setProperty("--fold-fade", String(foldProgress));
    document.body.classList.toggle("theme-light", mode === "light");
  }, [mode, foldProgress]);

  return (
    <ThemeContext.Provider value={{ mode, foldProgress }}>
      {children}
      <WaveTransition />
      <GeometricShapes />
    </ThemeContext.Provider>
  );
}
