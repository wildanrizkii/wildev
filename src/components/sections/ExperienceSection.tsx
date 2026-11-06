"use client";

import { motion } from "framer-motion";
import { experienceData } from "@/data/experience";
import ExperienceRow from "@/components/ui/ExperienceRow";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="max-w-7xl mx-auto px-6 sm:px-8 py-24"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
        <div>
          <span className="text-xs font-mono-tech uppercase tracking-widest text-secondary block mb-3">
            05 / EXPERIENCE
          </span>
          <h2 className="text-3xl sm:text-5xl font-normal tracking-tightest text-primary">
            Where I&apos;ve contributed.
          </h2>
        </div>
        <p className="text-xs font-mono-tech text-secondary uppercase tracking-wider">
          PROFESSIONAL TIMELINE
        </p>
      </div>

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
