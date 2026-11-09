"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { projectsData } from "@/data/projects";
import { Project } from "@/types/portfolio";
import ProjectCard from "@/components/ui/ProjectCard";
import ProjectArchiveTable from "@/components/ui/ProjectArchiveTable";
import ProjectModal from "@/components/ui/ProjectModal";

type FilterType = "all" | "apps" | "apis";

const FEATURED_COUNT = 3;

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

export default function SelectedWorksSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<FilterType>("all");

  const filteredProjects = useMemo(() => {
    if (filter === "apps") {
      return projectsData.filter(
        (p) =>
          p.id === "adora-apps" ||
          p.id === "aviora-apps" ||
          p.id === "aviora-task-apps" ||
          p.id === "world-time"
      );
    }
    if (filter === "apis") {
      return projectsData.filter(
        (p) =>
          p.id === "adora-api" ||
          p.id === "aviora-api" ||
          p.id === "aviora-task-api"
      );
    }
    return projectsData;
  }, [filter]);

  const featuredProjects = useMemo(
    () => filteredProjects.slice(0, FEATURED_COUNT),
    [filteredProjects]
  );

  const archiveProjects = useMemo(
    () => filteredProjects.slice(FEATURED_COUNT),
    [filteredProjects]
  );

  return (
    <section
      id="works"
      className="max-w-7xl mx-auto px-6 sm:px-8 py-24"
    >
      {/* Header */}
      <motion.div
        variants={headerContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4"
      >
        <div>
          <motion.span
            variants={headerItemVariants}
            className="text-xs font-mono-tech uppercase tracking-widest text-secondary block mb-3"
          >
            02 / SELECTED WORKS
          </motion.span>
          <motion.h2
            variants={headerItemVariants}
            className="text-3xl sm:text-5xl font-normal tracking-tightest text-primary"
          >
            A selection of things I&apos;ve built.
          </motion.h2>
        </div>
        <motion.div
          variants={headerItemVariants}
          className="flex flex-col items-start md:items-end gap-2"
        >
          <p className="text-xs font-mono-tech text-secondary uppercase tracking-wider">
            ARCHIVE (2025 – 2026) · 7 REPOSITORIES
          </p>
          {/* Swiss Filter Tabs */}
          <div className="flex items-center space-x-2 pt-2">
            <button
              type="button"
              onClick={() => setFilter("all")}
              className={`min-h-11 px-3 py-1.5 text-xs font-mono-tech uppercase tracking-wider transition-colors border ${
                filter === "all"
                  ? "bg-primary text-canvas border-primary"
                  : "bg-surface/50 text-secondary border-borderline hover:text-primary"
              }`}
            >
              All (7)
            </button>
            <button
              type="button"
              onClick={() => setFilter("apps")}
              className={`min-h-11 px-3 py-1.5 text-xs font-mono-tech uppercase tracking-wider transition-colors border ${
                filter === "apps"
                  ? "bg-primary text-canvas border-primary"
                  : "bg-surface/50 text-secondary border-borderline hover:text-primary"
              }`}
            >
              Apps (4)
            </button>
            <button
              type="button"
              onClick={() => setFilter("apis")}
              className={`min-h-11 px-3 py-1.5 text-xs font-mono-tech uppercase tracking-wider transition-colors border ${
                filter === "apis"
                  ? "bg-primary text-canvas border-primary"
                  : "bg-surface/50 text-secondary border-borderline hover:text-primary"
              }`}
            >
              APIs (3)
            </button>
          </div>
        </motion.div>
      </motion.div>

      {/* Featured Works List */}
      <div className="space-y-24">
        {featuredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="transform-gpu will-change-[transform,opacity]"
          >
            <ProjectCard
              project={project}
              onOpenCaseStudy={(proj) => setSelectedProject(proj)}
            />
            {index < featuredProjects.length - 1 && (
              <hr className="border-borderline mt-24" />
            )}
          </motion.div>
        ))}
      </div>

      {/* Archive Table for Remaining Works */}
      <ProjectArchiveTable
        projects={archiveProjects}
        onOpenCaseStudy={(proj) => setSelectedProject(proj)}
      />

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
