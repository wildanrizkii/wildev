"use client";

import { motion } from "framer-motion";
import { experienceData } from "@/data/experience";
import ExperienceRow from "@/components/ui/ExperienceRow";

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

export default function ExperienceSection() {
  return (
    <section
      id="experience"
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
            05 / EXPERIENCE
          </motion.span>
          <motion.h2
            variants={headerItemVariants}
            className="text-3xl sm:text-5xl font-normal tracking-tightest text-primary"
          >
            Where I&apos;ve contributed.
          </motion.h2>
        </div>
        <motion.p
          variants={headerItemVariants}
          className="text-xs font-mono-tech text-secondary uppercase tracking-wider"
        >
          PROFESSIONAL TIMELINE
        </motion.p>
      </motion.div>

      {/* Minimalist Editorial Experience Rows */}
      <div className="divide-y divide-borderline border-y border-borderline">
        {experienceData.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <ExperienceRow item={item} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
