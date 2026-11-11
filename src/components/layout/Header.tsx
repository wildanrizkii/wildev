"use client";

import { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { motion } from "framer-motion";
import { useLenis } from "@/providers/SmoothScrollProvider";
import MobileDrawer from "./MobileDrawer";
import ThemeToggle from "@/components/ui/ThemeToggle";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#works" },
  { label: "GitHub", href: "#activity" },
  { label: "Experience", href: "#experience" },
  { label: "Tech Stack", href: "#stack" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const lenis = useLenis();

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        if (lenis) {
          lenis.scrollTo(target as HTMLElement, {
            offset: 0,
            duration: 1.2,
          });
        } else {
          target.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  return (
    <header className="relative w-full z-40 bg-canvas">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 h-20 flex items-center justify-between relative">
        {/* Brand Logo / Wordmark */}
        <a
          href="#"
          onClick={(e) => {
            if (lenis) {
              e.preventDefault();
              lenis.scrollTo(0, { duration: 1.2 });
            }
          }}
          className="flex items-center text-xl font-bold tracking-tightest text-primary focus:outline-none focus:ring-1 focus:ring-primary py-1"
          aria-label="WILDev. Home"
        >
          <span>WILDev.</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden md:flex items-center space-x-9 text-[13px] font-medium tracking-tight text-primary md:absolute md:left-1/2 md:-translate-x-1/2"
          aria-label="Primary Navigation"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleScrollTo(e, item.href)}
              className="hover:text-secondary transition-colors py-2 focus:outline-none focus-visible:ring-1 focus-visible:ring-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Action Button & Mobile Menu Trigger */}
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="hidden md:flex items-center">
            <ThemeToggle />
          </div>

          <a
            href="#connect"
            onClick={(e) => handleScrollTo(e, "#connect")}
            className="hidden sm:inline-flex items-center space-x-1.5 text-xs font-mono-tech uppercase tracking-wider px-4 py-2 border border-primary text-primary hover:bg-primary hover:text-canvas focus:outline-none focus-visible:ring-1 focus-visible:ring-primary min-h-11"
          >
            <span>Contact</span>
            <FiArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
          </a>

          {/* Mobile Hamburguer Trigger - 44x44 minimum touch target with 3-line morph to X */}
          <button
            type="button"
            aria-label={mobileOpen ? "Close Navigation Menu" : "Open Navigation Menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="md:hidden min-w-11 min-h-11 flex items-center justify-center p-2 -mr-3.25 text-primary focus:outline-none focus-visible:ring-1 focus-visible:ring-primary relative"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6 pointer-events-none"
              aria-hidden="true"
            >
              {/* Top line: morphs to first diagonal of X */}
              <motion.path
                d="M 4 6 L 20 6"
                animate={{
                  d: mobileOpen ? "M 5 5 L 19 19" : "M 4 6 L 20 6",
                }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              />
              {/* Middle line: fades out */}
              <motion.path
                d="M 4 12 L 20 12"
                animate={{ opacity: mobileOpen ? 0 : 1 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              />
              {/* Bottom line: morphs to second diagonal of X */}
              <motion.path
                d="M 4 18 L 20 18"
                animate={{
                  d: mobileOpen ? "M 5 19 L 19 5" : "M 4 18 L 20 18",
                }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <MobileDrawer
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        navItems={navItems}
      />
    </header>
  );
}
