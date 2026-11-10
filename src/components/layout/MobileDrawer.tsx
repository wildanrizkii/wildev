"use client";

import { useEffect } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import { useLenis } from "@/providers/SmoothScrollProvider";
import { useLockScroll } from "@/hooks/useLockScroll";
import ThemeToggle from "@/components/ui/ThemeToggle";

interface NavItem {
  label: string;
  href: string;
}

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItem[];
}

export default function MobileDrawer({
  isOpen,
  onClose,
  navItems,
}: MobileDrawerProps) {
  const lenis = useLenis();

  // Lock background scroll when drawer is open
  useLockScroll(isOpen);

  // Close drawer on Escape key or when screen expands to desktop width
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const handleMediaChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    mediaQuery.addEventListener("change", handleMediaChange);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      mediaQuery.removeEventListener("change", handleMediaChange);
    };
  }, [isOpen, onClose]);

  const handleNavClick = (href: string) => {
    onClose();
    if (href.startsWith("#")) {
      const target = document.querySelector(href);
      if (target) {
        if (lenis) {
          lenis.start();
          requestAnimationFrame(() => {
            lenis.scrollTo(target as HTMLElement, {
              offset: 0,
              duration: 1.2,
              force: true,
            });
          });
        } else {
          target.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="drawer-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.25, ease: [0.4, 0, 0.2, 1] },
          }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          onClick={onClose}
          onTouchMove={(e) => e.preventDefault()}
          className="fixed inset-0 top-20 bg-primary/20 backdrop-blur-xs z-40 md:hidden"
          aria-hidden="true"
        />
      )}

      {isOpen && (
        <motion.div
          key="drawer-panel"
          id="mobile-navigation"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
          data-lenis-prevent
          initial={{ opacity: 0, y: -28 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{
            opacity: 0,
            y: -28,
            transition: {
              duration: 0.25,
              ease: [0.4, 0, 0.2, 1],
            },
          }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="md:hidden fixed top-20 left-0 right-0 w-full bg-canvas border-b border-borderline shadow-xl z-50 overflow-y-auto max-h-[calc(100vh-5rem)]"
        >
          <div className="px-6 py-6 flex flex-col space-y-4">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item, idx) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.22,
                    delay: 0.04 + idx * 0.04,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className="min-h-11 flex items-center text-sm font-medium text-secondary hover:text-primary py-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-primary"
                  >
                    {item.label}
                  </a>
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.22,
                delay: 0.04 + navItems.length * 0.04,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="pt-4 border-t border-borderline flex flex-col gap-3"
            >
              <ThemeToggle className="w-full justify-between px-4 border border-borderline hover:border-primary" showLabel />
              <a
                href="#connect"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("#connect");
                }}
                className="min-h-11 w-full flex items-center justify-center space-x-1.5 text-xs font-mono-tech uppercase tracking-wider px-4 py-2 border border-primary text-primary hover:bg-primary hover:text-canvas focus:outline-none focus-visible:ring-1 focus-visible:ring-primary"
              >
                <span>Contact</span>
                <FiArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
