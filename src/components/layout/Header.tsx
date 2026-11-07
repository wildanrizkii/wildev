"use client";

import { useState } from "react";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";
import { useLenis } from "@/providers/SmoothScrollProvider";
import MobileDrawer from "./MobileDrawer";

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
      if (target && lenis) {
        lenis.scrollTo(target as HTMLElement, {
          offset: -80,
          duration: 1.2,
        });
      }
    }
  };

  return (
    <header className="sticky top-0 w-full z-40 bg-canvas transition-colors">
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
          className="hidden md:flex items-center space-x-9 text-[13px] font-medium tracking-tight text-secondary md:absolute md:left-1/2 md:-translate-x-1/2"
          aria-label="Primary Navigation"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleScrollTo(e, item.href)}
              className="hover:text-primary transition-colors duration-150 py-2 focus:outline-none focus-visible:ring-1 focus-visible:ring-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Action Button & Mobile Menu Trigger */}
        <div className="flex items-center space-x-4">
          <a
            href="#connect"
            onClick={(e) => handleScrollTo(e, "#connect")}
            className="hidden sm:inline-flex items-center space-x-1.5 text-xs font-mono-tech uppercase tracking-wider px-4 py-2 border border-primary text-primary hover:bg-primary hover:text-canvas transition-colors duration-200 focus:outline-none focus-visible:ring-1 focus-visible:ring-primary"
          >
            <span>Contact</span>
            <FiArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
          </a>

          {/* Mobile Hamburguer Trigger - 44x44 minimum touch target */}
          <button
            type="button"
            aria-label={mobileOpen ? "Close Navigation Menu" : "Open Navigation Menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="md:hidden min-w-11 min-h-11 flex items-center justify-center p-2 text-primary focus:outline-none focus-visible:ring-1 focus-visible:ring-primary"
          >
            {mobileOpen ? (
              <FiX className="w-6 h-6 pointer-events-none" aria-hidden="true" />
            ) : (
              <FiMenu className="w-6 h-6 pointer-events-none" aria-hidden="true" />
            )}
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
