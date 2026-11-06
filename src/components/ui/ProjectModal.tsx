"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiCheck, FiExternalLink, FiX } from "react-icons/fi";
import { Project } from "@/types/portfolio";
import { useLockScroll } from "@/hooks/useLockScroll";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useLockScroll(Boolean(project));

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (project) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div
          data-lenis-prevent
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-primary/40 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* Modal Card */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-2xl bg-canvas border border-borderline shadow-2xl p-6 sm:p-8 z-10 max-h-[90vh] overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-start justify-between pb-4 border-b border-borderline">
              <div>
                <span className="text-xs font-mono-tech text-secondary uppercase tracking-wider">
                  {project.number} · {project.category} · {project.year}
                </span>
                <h3
                  id="modal-title"
                  className="text-2xl sm:text-3xl font-medium tracking-tight text-primary mt-1"
                >
                  {project.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close modal"
                className="min-h-[44px] min-w-[44px] flex items-center justify-center text-secondary hover:text-primary transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-primary -mr-2 -mt-2"
              >
                <FiX className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>

            {/* Overview & Description */}
            <div className="mt-6 space-y-4 text-sm text-secondary leading-relaxed">
              <p>{project.description}</p>
              {project.overview && (
                <div className="p-4 bg-surface/50 border border-borderline text-primary text-xs font-mono-tech leading-relaxed">
                  <p className="font-semibold uppercase tracking-wider mb-1">
                    System Architecture Note:
                  </p>
                  <p>{project.overview}</p>
                </div>
              )}
            </div>

            {/* Highlights */}
            {project.highlights && project.highlights.length > 0 && (
              <div className="mt-6">
                <h4 className="text-xs font-mono-tech uppercase tracking-widest text-primary mb-3">
                  Technical Highlights
                </h4>
                <ul className="space-y-2 text-xs text-secondary font-mono-tech">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2">
                      <FiCheck
                        className="w-3.5 h-3.5 text-emerald-700 mt-0.5 shrink-0"
                        aria-hidden="true"
                      />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tech Stack */}
            <div className="mt-6 pt-6 border-t border-borderline">
              <h4 className="text-xs font-mono-tech uppercase tracking-widest text-primary mb-3">
                Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] font-mono-tech px-2.5 py-1 border border-borderline bg-white/60 text-accent"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer Actions */}
            <div className="mt-8 pt-4 border-t border-borderline flex items-center justify-between">
              <span className="text-[11px] font-mono-tech text-secondary">
                {project.status}
              </span>
              {project.links?.liveDemo && (
                <a
                  href={project.links.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[44px] inline-flex items-center space-x-1.5 text-xs font-mono-tech uppercase tracking-wider text-primary hover:underline focus:outline-none focus-visible:ring-1 focus-visible:ring-primary"
                >
                  <span>Visit Application</span>
                  <FiExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
