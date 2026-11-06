"use client";

import { motion } from "framer-motion";
import { techStackData } from "@/data/tech-stack";
import TechPillarCard from "@/components/ui/TechPillarCard";

export default function TechStackSection() {
  return (
    <section
      id="stack"
      className="max-w-7xl mx-auto px-6 sm:px-8 py-24"
    >
      <div className="text-xs font-mono-tech uppercase tracking-widest text-secondary mb-4">
        03 / TOOLS &amp; TECHNOLOGIES
      </div>
      <h2 className="text-3xl sm:text-5xl font-normal tracking-tightest text-primary mb-16">
        The tools behind the work.
      </h2>

      {/* 4 Segmented Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {techStackData.map((pillar, idx) => (
          <motion.div
            key={pillar.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
          >
            <TechPillarCard pillar={pillar} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
