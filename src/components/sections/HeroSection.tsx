"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLenis } from "@/providers/SmoothScrollProvider";

export default function HeroSection() {
  const lenis = useLenis();

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target && lenis) {
        lenis.scrollTo(target as HTMLElement, {
          offset: -75,
          duration: 1.2,
        });
      }
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-6 sm:px-8 py-6 sm:py-8 lg:py-10 min-h-[calc(100dvh-5rem)] flex flex-col justify-between relative">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-6 xl:gap-8 items-stretch relative flex-1">
        {/* Left Column: Portrait Visual */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 flex items-stretch h-full"
        >
          {/* Main Portrait Visual */}
          <div
            onContextMenu={(e) => e.preventDefault()}
            className="flex-1 relative aspect-[3/4] sm:aspect-[4/5] lg:aspect-auto w-full h-full min-h-[380px] sm:min-h-[460px] lg:min-h-[540px] overflow-hidden bg-surface select-none"
          >
            <Image
              alt="Editorial portrait of software engineer with handcrafted leather artisan field pack on stone coast"
              className="w-full h-full object-cover object-center pointer-events-none select-none"
              priority
              fetchPriority="high"
              fill
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
              src="/images/hero.webp"
            />
          </div>
        </motion.div>

        {/* Right Column: Specification Top & Giant DEV Bottom */}
        <div className="lg:col-span-6 flex flex-col justify-between pt-1 lg:pt-2 h-full">
          {/* Top Section: Specification & Technical Metadata */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 sm:grid-cols-12 gap-8 sm:gap-6 items-start"
          >
            {/* Specification Heading & Sub-Dimensions */}
            <div className="sm:col-span-6 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-primary">
                Specification
              </h2>

              <div className="space-y-1">
                <span className="block text-xs font-semibold text-primary">
                  Dimensions
                </span>
                <p className="text-xs font-mono-tech text-secondary leading-relaxed">
                  L: Full-Stack W: TypeScript H: Cloud SaaS
                </p>
              </div>

              <div className="space-y-1 pt-1">
                <span className="block text-xs font-semibold text-primary">
                  Engineering Scope
                </span>
                <p className="text-xs font-mono-tech text-secondary leading-relaxed">
                  Distributed web systems, strict schema design, and low-latency APIs.
                </p>
              </div>
            </div>

            {/* Right-Aligned Technical Metadata Attributes */}
            <div className="sm:col-span-6 sm:text-right space-y-3 font-mono-tech text-xs">
              <div>
                <span className="text-[11px] text-secondary uppercase tracking-wider block">
                  Materials:
                </span>
                <span className="text-primary font-medium block mt-0.5">
                  TypeScript / Node.js
                </span>
              </div>

              <div>
                <span className="text-[11px] text-secondary uppercase tracking-wider block">
                  Core Engine:
                </span>
                <span className="text-primary font-medium block mt-0.5">
                  Next.js 16 &amp; NestJS
                </span>
              </div>

              <div>
                <span className="text-[11px] text-secondary uppercase tracking-wider block">
                  Base Region:
                </span>
                <span className="text-primary font-medium block mt-0.5">
                  Indonesia (UTC+7)
                </span>
              </div>

              <div>
                <span className="text-[11px] text-secondary uppercase tracking-wider block">
                  Article No.:
                </span>
                <span className="text-primary font-medium block mt-0.5">
                  # 2026-WILDev.
                </span>
              </div>
            </div>
          </motion.div>

          {/* Bottom Section: Giant DEV Title, Summary & Rectangular Action Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 sm:mt-14 lg:mt-auto pt-6 text-right"
          >
            {/* Giant Display Typography */}
            <h1 className="text-7xl sm:text-8xl md:text-9xl lg:text-[9.25rem] xl:text-[11.5rem] font-bold tracking-tightest leading-none text-primary select-none text-right">
              DEV
            </h1>

            {/* Bottom Row: Descriptive Paragraph & Action Button */}
            <div className="mt-4 sm:mt-6 grid grid-cols-1 sm:grid-cols-12 gap-6 sm:gap-4 items-end">
              <div className="sm:col-span-8 flex sm:justify-end">
                <p className="text-xs sm:text-sm text-secondary leading-relaxed max-w-md text-right">
                  Full-stack engineer crafting resilient web platforms, multi-tenant databases,
                  and low-latency digital products with disciplined systems architecture.
                </p>
              </div>

              <div className="sm:col-span-4 flex sm:justify-end">
                <a
                  href="#works"
                  onClick={(e) => handleScrollTo(e, "#works")}
                  className="w-full sm:w-auto min-h-[44px] px-8 py-3.5 border border-primary text-xs font-mono-tech uppercase tracking-wider text-primary text-center hover:bg-primary hover:text-canvas transition-colors duration-200 focus:outline-none focus-visible:ring-1 focus-visible:ring-primary flex items-center justify-center select-none"
                >
                  Explore works
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Far Right Minimalist Indicator Lines (|||) matching reference layout */}
        <div
          className="hidden xl:flex flex-col gap-1.5 absolute -right-5 top-1/2 -translate-y-1/2 opacity-70 pointer-events-none select-none"
          aria-hidden="true"
        >
          <div className="w-[1.5px] h-4 bg-primary" />
          <div className="w-[1.5px] h-4 bg-primary" />
          <div className="w-[1.5px] h-4 bg-primary" />
        </div>
      </div>
    </section>
  );
}
