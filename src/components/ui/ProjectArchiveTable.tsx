"use client";

import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { Project } from "@/types/portfolio";

interface ProjectArchiveTableProps {
  projects: Project[];
  onOpenCaseStudy: (project: Project) => void;
}

export default function ProjectArchiveTable({
  projects,
  onOpenCaseStudy,
}: ProjectArchiveTableProps) {
  if (projects.length === 0) return null;

  return (
    <div className="mt-20 pt-16 border-t border-borderline">
      {/* Archive Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
        <div>
          <span className="text-xs font-mono-tech uppercase tracking-widest text-secondary block mb-2">
            02.B / ARCHIVE INDEX
          </span>
          <h3 className="text-xl sm:text-2xl font-normal tracking-tight text-primary">
            Comprehensive Works Index
          </h3>
        </div>
        <p className="text-xs font-mono-tech text-secondary uppercase tracking-wider">
          {projects.length} ARCHIVED {projects.length === 1 ? "REPOSITORY" : "REPOSITORIES"}
        </p>
      </div>

      {/* Table Header (Desktop Only) */}
      <div className="hidden lg:grid grid-cols-12 gap-6 pb-3 border-b border-borderline text-[11px] font-mono-tech uppercase tracking-wider text-secondary">
        <div className="col-span-1">No.</div>
        <div className="col-span-4">Project &amp; Architecture</div>
        <div className="col-span-2">Period</div>
        <div className="col-span-3">Tech Stack</div>
        <div className="col-span-2 text-right">Action</div>
      </div>

      {/* Table Body / Rows */}
      <div className="divide-y divide-borderline border-b border-borderline">
        {projects.map((project, idx) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className="group py-5 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-center transition-colors hover:bg-surface/50 px-2 -mx-2"
          >
            {/* Col 1: Project Number */}
            <div className="lg:col-span-1 text-xs font-mono-tech text-secondary">
              {project.number}
            </div>

            {/* Col 2: Title & Category */}
            <div className="lg:col-span-4">
              <div className="flex items-center space-x-2">
                <button
                  type="button"
                  onClick={() => onOpenCaseStudy(project)}
                  className="text-left text-base sm:text-lg font-medium text-primary group-hover:text-accent group-hover:underline focus:outline-none focus-visible:ring-1 focus-visible:ring-primary"
                >
                  {project.title}
                </button>
                <span className="lg:hidden text-xs font-mono-tech text-secondary">
                  · {project.year}
                </span>
              </div>
              <span className="text-[10px] sm:text-[11px] font-mono-tech text-secondary uppercase tracking-wider block mt-0.5">
                {project.category}
              </span>
            </div>

            {/* Col 3: Period (Desktop) */}
            <div className="hidden lg:block lg:col-span-2 text-xs font-mono-tech text-secondary">
              {project.year}
            </div>

            {/* Col 4: Tech Stack Badges */}
            <div className="lg:col-span-3 flex flex-wrap gap-1.5">
              {project.techStack.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="text-[10px] font-mono-tech px-2 py-0.5 border border-borderline bg-surface/80 text-accent"
                >
                  {tech}
                </span>
              ))}
              {project.techStack.length > 3 && (
                <span className="text-[10px] font-mono-tech px-1.5 py-0.5 text-secondary">
                  +{project.techStack.length - 3}
                </span>
              )}
            </div>

            {/* Col 5: Action Button */}
            <div className="lg:col-span-2 flex items-center justify-between lg:justify-end pt-2 lg:pt-0 border-t border-borderline/40 lg:border-t-0">
              <span className="lg:hidden text-[11px] font-mono-tech text-secondary">
                {project.status}
              </span>
              <button
                type="button"
                onClick={() => onOpenCaseStudy(project)}
                className="min-h-11 inline-flex items-center space-x-1.5 text-xs font-mono-tech uppercase tracking-wider text-primary group-hover:underline focus:outline-none focus-visible:ring-1 focus-visible:ring-primary"
                aria-label={`View case study for ${project.title}`}
              >
                <span>Case Study</span>
                <FiArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
              </button>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
