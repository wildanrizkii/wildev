"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
} from "react";

export type Theme = "light" | "dark" | "system";
export type ResolvedTheme = "light" | "dark";

interface ThemeContextValue {
  theme: Theme;
  resolvedTheme: ResolvedTheme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  mounted: boolean;
}

const STORAGE_KEY = "wildev-theme";
const THEME_CHANGE_EVENT = "wildev-theme-change";

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

function getSystemTheme(): ResolvedTheme {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function getStoredTheme(): Theme {
  if (typeof window === "undefined") return "system";
  try {
    const stored = localStorage.getItem(STORAGE_KEY) as Theme | null;
    if (stored === "light" || stored === "dark" || stored === "system") {
      return stored;
    }
  } catch {
    // storage fallback
  }
  return "system";
}

function getServerTheme(): Theme {
  return "system";
}

function subscribeTheme(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  window.addEventListener("storage", callback);
  window.addEventListener(THEME_CHANGE_EVENT, callback);
  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  mediaQuery.addEventListener("change", callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(THEME_CHANGE_EVENT, callback);
    mediaQuery.removeEventListener("change", callback);
  };
}

const emptySubscribe = () => () => {};
const getClientMounted = () => true;
const getServerMounted = () => false;

function applyThemeToDOM(resolved: ResolvedTheme) {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  if (resolved === "dark") {
    root.classList.add("dark");
    root.setAttribute("data-theme", "dark");
    root.style.colorScheme = "dark";
  } else {
    root.classList.remove("dark");
    root.setAttribute("data-theme", "light");
    root.style.colorScheme = "light";
  }
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useSyncExternalStore(subscribeTheme, getStoredTheme, getServerTheme);
  const mounted = useSyncExternalStore(emptySubscribe, getClientMounted, getServerMounted);

  const resolvedTheme: ResolvedTheme = useMemo(() => {
    if (!mounted) return "light";
    return theme === "system" ? getSystemTheme() : theme;
  }, [theme, mounted]);

  // Synchronize DOM with active theme
  useEffect(() => {
    applyThemeToDOM(resolvedTheme);
  }, [resolvedTheme]);

  // Enable transitions after initial paint to guarantee zero-flash on load
  useEffect(() => {
    const timer = setTimeout(() => {
      document.documentElement.setAttribute("data-mounted", "true");
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  const setTheme = useCallback((newTheme: Theme) => {
    try {
      localStorage.setItem(STORAGE_KEY, newTheme);
    } catch {
      // storage unavailable
    }

    const nextResolved = newTheme === "system" ? getSystemTheme() : newTheme;

    const performThemeChange = () => {
      applyThemeToDOM(nextResolved);
      window.dispatchEvent(new Event(THEME_CHANGE_EVENT));
    };

    if (typeof document === "undefined") {
      performThemeChange();
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // 1. If View Transitions API is supported, use it for 100% unified whole-page crossfade
    if (
      "startViewTransition" in document &&
      !prefersReducedMotion &&
      typeof document.startViewTransition === "function"
    ) {
      try {
        const transition = document.startViewTransition(() => {
          performThemeChange();
        });
        if (transition && "ready" in transition) {
          transition.ready.catch(() => {});
        }
        if (transition && "finished" in transition) {
          transition.finished.catch(() => {});
        }
        return;
      } catch {
        // Fallback to synchronized CSS transition
      }
    }

    // 2. Fallback: Force ALL components to the exact same 300ms duration with 0s delay
    const root = document.documentElement;
    root.classList.add("theme-switching");
    performThemeChange();

    window.setTimeout(() => {
      root.classList.remove("theme-switching");
    }, 320);
  }, []);

  const toggleTheme = useCallback(() => {
    const nextTheme: Theme = resolvedTheme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
  }, [resolvedTheme, setTheme]);

  const value = useMemo<ThemeContextValue>(
    () => ({
      theme,
      resolvedTheme,
      setTheme,
      toggleTheme,
      mounted,
    }),
    [theme, resolvedTheme, setTheme, toggleTheme, mounted]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
