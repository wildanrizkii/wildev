"use client";

import { motion } from "framer-motion";
import { techStackData } from "@/data/tech-stack";
import TechPillarCard from "@/components/ui/TechPillarCard";

const headerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.04,
    },
  },
};

const headerItemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export default function TechStackSection() {
  return (
    <section
      id="stack"
      className="max-w-7xl mx-auto px-6 sm:px-8 py-24"
    >
      <motion.div
        variants={headerContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4"
      >
        <div>
          <motion.span
            variants={headerItemVariants}
            className="text-xs font-mono-tech uppercase tracking-widest text-secondary block mb-3"
          >
            03 / TOOLS &amp; TECHNOLOGIES
          </motion.span>
          <motion.h2
            variants={headerItemVariants}
            className="text-3xl sm:text-5xl font-normal tracking-tightest text-primary"
          >
            The tools behind the work.
          </motion.h2>
        </div>
        <motion.p
          variants={headerItemVariants}
          className="text-xs font-mono-tech text-secondary uppercase tracking-wider"
        >
          TECHNICAL STACK MATRIX // 24 CAPABILITIES
        </motion.p>
      </motion.div>

      {/* Connected Technical Matrix */}
      <div className="border border-borderline bg-borderline grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px">
        {techStackData.map((pillar, idx) => (
          <motion.div
            key={pillar.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            className="h-full bg-canvas flex flex-col transform-gpu will-change-[transform,opacity]"
          >
            <TechPillarCard pillar={pillar} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
