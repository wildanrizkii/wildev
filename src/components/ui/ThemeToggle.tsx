"use client";

import { useTheme } from "@/providers/ThemeProvider";
import { FiMoon, FiSun } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export default function ThemeToggle({
  className = "",
  showLabel = false,
}: ThemeToggleProps) {
  const { resolvedTheme, toggleTheme, mounted } = useTheme();

  // Avoid initial animation glitch and hydration mismatch:
  // Render CSS-based icons on SSR and before mount matching the early <html> class
  if (!mounted) {
    return (
      <button
        type="button"
        onClick={toggleTheme}
        aria-label="Toggle theme"
        title="Toggle theme"
        className={`min-h-11 min-w-11 px-3 py-2 text-primary inline-flex items-center justify-center space-x-2 cursor-pointer select-none ${className}`}
      >
        <div className="relative w-4 h-4 flex items-center justify-center overflow-hidden">
          <FiSun
            className="w-5 h-5 text-primary block dark:hidden"
            aria-hidden="true"
          />
          <FiMoon
            className="w-5 h-5 text-primary hidden dark:block"
            aria-hidden="true"
          />
        </div>

        {showLabel && (
          <span className="text-xs font-mono-tech uppercase tracking-wider text-primary">
            <span className="inline dark:hidden">Light Mode</span>
            <span className="hidden dark:inline">Dark Mode</span>
          </span>
        )}
      </button>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className={`min-h-11 min-w-11 px-3 py-2 text-primary inline-flex items-center justify-center space-x-2 cursor-pointer select-none ${className}`}
    >
      <div className="relative w-4 h-4 flex items-center justify-center overflow-hidden">
        <AnimatePresence initial={false}>
          {isDark ? (
            <motion.div
              key="dark"
              initial={{ rotate: -90, scale: 0.5, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              exit={{ rotate: 90, scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <FiMoon className="w-5 h-5 text-primary" aria-hidden="true" />
            </motion.div>
          ) : (
            <motion.div
              key="light"
              initial={{ rotate: 90, scale: 0.5, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              exit={{ rotate: -90, scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <FiSun className="w-5 h-5 text-primary" aria-hidden="true" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {showLabel && (
        <span className="text-xs font-mono-tech uppercase tracking-wider text-primary">
          {isDark ? "Dark Mode" : "Light Mode"}
        </span>
      )}
    </button>
  );
}
