"use client";

import { useSyncExternalStore } from "react";
import Image from "next/image";
import { useLenis } from "@/providers/SmoothScrollProvider";

const emptySubscribe = () => () => {};
const getClientYear = () => new Date().getFullYear();
const getServerYear = () => 2026;

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#works" },
  { label: "GitHub", href: "#activity" },
  { label: "Experience", href: "#experience" },
  { label: "Tech Stack", href: "#stack" },
  { label: "Contact", href: "#connect" },
];

export default function Footer() {
  const lenis = useLenis();
  const currentYear = useSyncExternalStore(
    emptySubscribe,
    getClientYear,
    getServerYear
  );

  const handleScrollTo = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
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

  const handleScrollToTop = () => {
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full bg-canvas pt-16 sm:pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Top Section: Navigation Links (Left) + Brand Wordmark (Right) */}
        <div className="pb-8 sm:pb-10 flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-6">
          {/* Navigation Links matching Navbar (Align Left) */}
          <nav
            className="flex flex-wrap items-center justify-start gap-6 sm:gap-8 text-[13px] font-medium tracking-tight text-secondary"
            aria-label="Footer Navigation"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleScrollTo(e, item.href)}
                className="hover:text-primary transition-colors py-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-primary"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Brand Wordmark (Align Right) */}
          <div className="flex items-center justify-start md:justify-end">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleScrollToTop();
              }}
              className="text-xl font-bold tracking-tight text-primary focus:outline-none focus-visible:ring-1 focus-visible:ring-primary py-1"
              aria-label="WILDev. Home"
            >
              <span>WILDev.</span>
            </a>
          </div>
        </div>

        {/* Bottom Section: Vertical Rotated Wordmark + Landscape Image Banner */}
        <div className="pt-8 sm:pt-12 flex flex-col sm:flex-row items-end justify-between gap-8 sm:gap-12">
          {/* Vertical Rotated Wordmark */}
          <div className="select-none self-start sm:self-end pb-1 sm:pr-2">
            <span
              className="text-xl sm:text-2xl lg:text-[1.85rem] font-bold tracking-[0.2em] text-primary uppercase font-mono-tech sm:[writing-mode:vertical-rl] sm:rotate-180"
            >
              RETROSPECTIVE
            </span>
          </div>

          {/* Landscape Image Banner */}
          <div
            onContextMenu={(e) => e.preventDefault()}
            className="relative flex-1 w-full aspect-video sm:aspect-21/9 lg:aspect-[2.35/1] overflow-hidden bg-surface select-none"
          >
            <Image
              src="/images/footer.webp"
              alt="Atmospheric mountain ridge immersed in soft mist and clouds"
              fill
              sizes="(max-width: 1280px) 100vw, 1200px"
              loading="eager"
              className="object-cover object-center pointer-events-none transition-[filter] duration-300 dark:brightness-[0.90] dark:contrast-[1.04]"
              draggable={false}
            />
          </div>
        </div>

        {/* Bottom Colophon & Meta Line */}
        <div className="mt-12 flex flex-col sm:flex-row items-baseline justify-between gap-4 text-xs font-mono-tech text-secondary">
          <div>
            <span className="text-primary font-bold tracking-tight">
              WILDev.
            </span>
            <span className="ml-2" suppressHydrationWarning>
              © {currentYear}. Bandung, West Java, Indonesia.
            </span>
          </div>

          <div>
            <button
              type="button"
              onClick={handleScrollToTop}
              className="inline-flex items-center space-x-1 text-primary hover:underline focus:outline-none focus-visible:ring-1 focus-visible:ring-primary cursor-pointer"
            >
              <span>Back to Top ↑</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
