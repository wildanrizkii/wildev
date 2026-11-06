"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const foundations = [
  {
    code: "FOUNDATION 01 // ARCHITECTURE",
    title: "Strong Type Safety & Clean Contracts",
    description:
      "Prioritizing strict schemas, domain-driven boundaries, and automated validation barriers before shipping code to customers.",
  },
  {
    code: "FOUNDATION 02 // PERFORMANCE",
    title: "Low Latency & Editorial Clarity",
    description:
      "Crafting uncluttered digital experiences with rapid time-to-first-byte, zero cumulative layout shift, and disciplined interaction design.",
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="max-w-7xl mx-auto px-6 sm:px-8 py-20 sm:py-28"
    >
      {/* Top Header & Specification Metadata Bar */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-12 sm:mb-16 gap-4">
        <div className="text-xs font-mono-tech uppercase tracking-widest text-secondary">
          01 / ABOUT WILDev.
        </div>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-mono-tech text-secondary">
          <span>ROLE: FULLSTACK WEB DEVELOPER</span>
          <span className="opacity-40">•</span>
          <span>COMPANY: PT GANESHA OPERATION</span>
          <span className="opacity-40">•</span>
          <span>LOC: BANDUNG (UTC+7)</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Big Statement & Narrative Dossier */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 flex flex-col justify-between space-y-8"
        >
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-medium tracking-tightest leading-[1.12] text-primary">
              Curious about technology.
              <br />
              Passionate about building resilient systems.
            </h2>
            <div className="space-y-4 text-sm sm:text-[15px] text-secondary leading-relaxed font-normal">
              <p>
                I am an Indonesian software developer dedicated to crafting
                intentional, resilient web platforms. My engineering background in
                Informatics guides my belief that software should be as reliable
                under the hood as it is clear on the screen.
              </p>
              <p>
                Whether structuring multi-tenant SQL database schemas,
                orchestrating NestJS microservices, or tuning client-side Next.js
                rendering cycles, I treat every layer as part of a single unified
                craft.
              </p>
            </div>
          </div>

          {/* Quick Technical Profile Spec Sheet */}
          <div className="pt-6 border-t border-borderline space-y-3 font-mono-tech text-xs">
            <div className="flex items-baseline justify-between py-1 border-b border-borderline/40">
              <span className="text-secondary uppercase">Focus</span>
              <span className="text-primary font-medium">Fullstack Web Systems &amp; APIs</span>
            </div>
            <div className="flex items-baseline justify-between py-1 border-b border-borderline/40">
              <span className="text-secondary uppercase">Current Role</span>
              <span className="text-primary font-medium">PT Ganesha Operation</span>
            </div>
            <div className="flex items-baseline justify-between py-1">
              <span className="text-secondary uppercase">Period</span>
              <span className="text-primary font-medium">2025 – Present</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Vertical Accent + Image Banner + Principles Spec Cards + Current Role Sheet */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="lg:col-span-7 flex flex-col md:flex-row gap-8 items-stretch"
        >
          {/* Subtle Vertical Rotated Accent Track (Echoing DEV and RETROSPECTIVE) */}
          <div
            className="hidden md:flex flex-col items-center justify-between border-r border-borderline pr-6 select-none"
            aria-hidden="true"
          >
            <span className="text-[10px] font-mono-tech text-secondary tracking-[0.25em] uppercase [writing-mode:vertical-rl] rotate-180">
              EXPERIENCE &amp; FOUNDATIONS
            </span>
            <div className="w-[1.5px] h-12 bg-primary/30 mt-6" />
          </div>

          {/* Content Block */}
          <div className="flex-1 space-y-8">
            {/* Visual Atmosphere Image Banner */}
            <div
              onContextMenu={(e) => e.preventDefault()}
              className="relative w-full aspect-[2.2/1] overflow-hidden bg-surface select-none"
            >
              <Image
                src="/images/about.webp"
                alt="Textured monochrome ocean current representing dynamic digital systems"
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover object-center pointer-events-none"
                draggable={false}
              />
            </div>

            {/* Current Professional Engagement */}
            <div>
              <div className="text-xs font-mono-tech uppercase tracking-widest text-primary mb-4 flex items-center justify-between">
                <span>Current Professional Engagement</span>
                <span className="text-[11px] font-mono-tech text-secondary uppercase">
                  Full-Time
                </span>
              </div>
              <div className="p-5 sm:p-6 bg-surface/50 border border-borderline">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-3 border-b border-borderline/60">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono-tech uppercase px-2 py-0.5 bg-primary text-canvas font-semibold">
                        2025 – PRESENT
                      </span>
                      <h4 className="text-base font-semibold text-primary tracking-tight">
                        Fullstack Web Developer
                      </h4>
                    </div>
                    <p className="text-xs text-secondary mt-1 font-medium">
                      PT Ganesha Operation · Educational Technology &amp; Web Systems
                    </p>
                  </div>
                  <span className="font-mono-tech text-xs text-secondary">
                    Bandung, West Java, Indonesia
                  </span>
                </div>
                <p className="text-xs text-secondary mt-3 leading-relaxed">
                  Building and scaling full-stack digital learning platforms, internal administrative web tools, and distributed application features.
                </p>
              </div>
            </div>

            {/* Engineering Foundations Spec Cards */}
            <div>
              <div className="text-xs font-mono-tech uppercase tracking-widest text-primary mb-4">
                Engineering Foundations
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {foundations.map((item) => (
                  <div
                    key={item.code}
                    className="p-5 sm:p-6 bg-surface/50 border border-borderline hover:border-primary/40 transition-colors flex flex-col justify-between"
                  >
                    <div>
                      <span className="font-mono-tech text-[11px] text-secondary tracking-wider block">
                        {item.code}
                      </span>
                      <h3 className="text-sm sm:text-base font-medium mt-2.5 text-primary tracking-tight">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-xs text-secondary mt-3 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
