"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import ThemeWaveTransition, {
  type ThemeMode,
  type ThemeTransitionState,
} from "./ThemeWaveTransition";

interface ThemeContextValue {
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
  toggleTheme: () => void;
}

const STORAGE_KEY = "apai-theme";
const DEFAULT_THEME: ThemeMode = "dark";
const THEME_SWITCH_POINT_MS = 360;
const OVERLAY_DURATION_MS = 1120;

const ThemeContext = createContext<ThemeContextValue | null>(null);

function getStoredTheme(): ThemeMode | null {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "light" || saved === "dark") {
      return saved;
    }
  } catch {
    return null;
  }
  return null;
}

function detectSystemTheme(): ThemeMode {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyThemeToRoot(nextTheme: ThemeMode) {
  document.documentElement.setAttribute("data-theme", nextTheme);
  document.documentElement.style.colorScheme = nextTheme;
}

function getInitialTheme(): ThemeMode {
  if (typeof window === "undefined") {
    return DEFAULT_THEME;
  }

  const domTheme = document.documentElement.getAttribute("data-theme");
  if (domTheme === "light" || domTheme === "dark") {
    return domTheme;
  }

  return getStoredTheme() ?? detectSystemTheme();
}

function persistTheme(nextTheme: ThemeMode) {
  try {
    window.localStorage.setItem(STORAGE_KEY, nextTheme);
  } catch {
    // Ignore storage persistence failures (private mode, etc.)
  }
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemeMode>(getInitialTheme);
  const [transition, setTransition] = useState<ThemeTransitionState | null>(null);
  const timersRef = useRef<number[]>([]);

  const clearTimers = useCallback(() => {
    timersRef.current.forEach((timerId) => window.clearTimeout(timerId));
    timersRef.current = [];
  }, []);

  useEffect(() => {
    applyThemeToRoot(theme);
  }, [theme]);

  useEffect(() => {
    return () => clearTimers();
  }, [clearTimers]);

  const runThemeTransition = useCallback(
    (nextTheme: ThemeMode) => {
      if (nextTheme === theme) {
        return;
      }

      clearTimers();

      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion) {
        setThemeState(nextTheme);
        applyThemeToRoot(nextTheme);
        persistTheme(nextTheme);
        return;
      }

      const transitionId = Date.now();
      setTransition({ id: transitionId, from: theme, to: nextTheme });

      const switchTimer = window.setTimeout(() => {
        setThemeState(nextTheme);
        applyThemeToRoot(nextTheme);
        persistTheme(nextTheme);
      }, THEME_SWITCH_POINT_MS);

      const closeTimer = window.setTimeout(() => {
        setTransition((current) => (current?.id === transitionId ? null : current));
      }, OVERLAY_DURATION_MS);

      timersRef.current.push(switchTimer, closeTimer);
    },
    [clearTimers, theme]
  );

  const toggleTheme = useCallback(() => {
    runThemeTransition(theme === "dark" ? "light" : "dark");
  }, [runThemeTransition, theme]);

  const contextValue = useMemo<ThemeContextValue>(
    () => ({
      theme,
      setTheme: runThemeTransition,
      toggleTheme,
    }),
    [runThemeTransition, theme, toggleTheme]
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
      <ThemeWaveTransition transition={transition} />
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}
