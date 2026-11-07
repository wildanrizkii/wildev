"use client";

import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import { Project } from "@/types/portfolio";

interface ProjectCardProps {
  project: Project;
  onOpenCaseStudy: (project: Project) => void;
}

export default function ProjectCard({
  project,
  onOpenCaseStudy,
}: ProjectCardProps) {
  return (
    <article className="group grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* Visual Preview */}
      <div className="lg:col-span-7">
        {project.previewType === "image" && project.imageUrl ? (
          <div className="overflow-hidden border border-borderline bg-surface relative aspect-16/10">
            <Image
              alt={`${project.title} interface preview`}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.015]"
              src={project.imageUrl}
              fill
              sizes="(max-width: 1024px) 100vw, 58vw"
              loading="lazy"
            />
          </div>
        ) : (
          <div className="border border-borderline bg-surface p-6 sm:p-10 relative overflow-hidden">
            {/* Contextual Architecture Blueprint Illustration */}
            <div className="space-y-4">
              {project.id === "adora-api" && (
                <>
                  <div className="flex items-center justify-between pb-3 border-b border-borderline">
                    <span className="text-xs font-mono-tech text-primary font-medium">
                      SYSTEM: ADORA_MULTI_TENANT_API
                    </span>
                    <span className="text-[10px] font-mono-tech bg-primary text-canvas px-2 py-0.5">
                      STATUS: 200 OK
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                    <div className="p-3 bg-canvas border border-borderline">
                      <span className="text-[10px] font-mono-tech text-secondary block">
                        TENANT NODES
                      </span>
                      <span className="text-lg font-semibold text-primary block mt-1">
                        12 Branches
                      </span>
                      <span className="text-[10px] text-emerald-700 font-mono-tech">
                        Strict row-level
                      </span>
                    </div>
                    <div className="p-3 bg-canvas border border-borderline">
                      <span className="text-[10px] font-mono-tech text-secondary block">
                        INVENTORY SYNC
                      </span>
                      <span className="text-lg font-semibold text-primary block mt-1">
                        0.08ms
                      </span>
                      <span className="text-[10px] text-secondary font-mono-tech">
                        P95 cached
                      </span>
                    </div>
                    <div className="p-3 bg-canvas border border-borderline">
                      <span className="text-[10px] font-mono-tech text-secondary block">
                        MIDTRANS WEBHOOK
                      </span>
                      <span className="text-lg font-semibold text-primary block mt-1">
                        99.98%
                      </span>
                      <span className="text-[10px] text-primary font-mono-tech">
                        Idempotent verify
                      </span>
                    </div>
                  </div>
                  <div className="p-4 bg-canvas border border-borderline text-xs font-mono-tech text-secondary space-y-1">
                    <p className="text-primary font-medium">
                      $ nest start --service inventory-reconciliation
                    </p>
                    <p>&gt; Connected to postgresql://adora_cluster:5432/adora_core</p>
                    <p>&gt; [Prisma] Multi-tenant middleware active: schema isolation confirmed ✓</p>
                  </div>
                </>
              )}

              {project.id === "aviora-api" && (
                <>
                  <div className="flex items-center justify-between pb-3 border-b border-borderline">
                    <span className="text-xs font-mono-tech text-primary font-medium">
                      PIPELINE: SPRINT_EVENT_GATEWAY
                    </span>
                    <span className="text-[10px] font-mono-tech bg-primary text-canvas px-2 py-0.5">
                      STATUS: 200 OK
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                    <div className="p-3 bg-canvas border border-borderline">
                      <span className="text-[10px] font-mono-tech text-secondary block">
                        ACTIVE WORKSPACES
                      </span>
                      <span className="text-lg font-semibold text-primary block mt-1">
                        48 Sprints
                      </span>
                      <span className="text-[10px] text-emerald-700 font-mono-tech">
                        Active streams
                      </span>
                    </div>
                    <div className="p-3 bg-canvas border border-borderline">
                      <span className="text-[10px] font-mono-tech text-secondary block">
                        WS LATENCY
                      </span>
                      <span className="text-lg font-semibold text-primary block mt-1">
                        12ms
                      </span>
                      <span className="text-[10px] text-secondary font-mono-tech">
                        Sub-frame dispatch
                      </span>
                    </div>
                    <div className="p-3 bg-canvas border border-borderline">
                      <span className="text-[10px] font-mono-tech text-secondary block">
                        REDIS CACHE
                      </span>
                      <span className="text-lg font-semibold text-primary block mt-1">
                        99.4%
                      </span>
                      <span className="text-[10px] text-primary font-mono-tech">
                        Hit ratio
                      </span>
                    </div>
                  </div>
                  <div className="p-4 bg-canvas border border-borderline text-xs font-mono-tech text-secondary space-y-1">
                    <p className="text-primary font-medium">
                      $ nest start --service websocket-board-gateway
                    </p>
                    <p>&gt; Redis pub/sub cluster connected on redis://internal:6379</p>
                    <p>&gt; WebSocket event gateway initialized: real-time board sync armed ✓</p>
                  </div>
                </>
              )}

              {project.id === "aviora-task-api" && (
                <>
                  <div className="flex items-center justify-between pb-3 border-b border-borderline">
                    <span className="text-xs font-mono-tech text-primary font-medium">
                      SERVICE: AVIORA_TASK_AUDIT_LOG
                    </span>
                    <span className="text-[10px] font-mono-tech bg-primary text-canvas px-2 py-0.5">
                      STATUS: 200 OK
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                    <div className="p-3 bg-canvas border border-borderline">
                      <span className="text-[10px] font-mono-tech text-secondary block">
                        TASK EVENTS
                      </span>
                      <span className="text-lg font-semibold text-primary block mt-1">
                        18.4K/day
                      </span>
                      <span className="text-[10px] text-emerald-700 font-mono-tech">
                        Throughput
                      </span>
                    </div>
                    <div className="p-3 bg-canvas border border-borderline">
                      <span className="text-[10px] font-mono-tech text-secondary block">
                        AUDIT WRITE
                      </span>
                      <span className="text-lg font-semibold text-primary block mt-1">
                        0.04ms
                      </span>
                      <span className="text-[10px] text-secondary font-mono-tech">
                        Append only
                      </span>
                    </div>
                    <div className="p-3 bg-canvas border border-borderline">
                      <span className="text-[10px] font-mono-tech text-secondary block">
                        ESCALATIONS
                      </span>
                      <span className="text-lg font-semibold text-primary block mt-1">
                        0 Errors
                      </span>
                      <span className="text-[10px] text-primary font-mono-tech">
                        100% delivered
                      </span>
                    </div>
                  </div>
                  <div className="p-4 bg-canvas border border-borderline text-xs font-mono-tech text-secondary space-y-1">
                    <p className="text-primary font-medium">
                      $ nest start --service task-lifecycle-audit
                    </p>
                    <p>&gt; [AuditWorker] Event sourcing queue listening for task.transition.*</p>
                    <p>&gt; Webhook retry engine: exponential backoff active ✓</p>
                  </div>
                </>
              )}

              {project.id === "world-time" && (
                <>
                  <div className="flex items-center justify-between pb-3 border-b border-borderline">
                    <span className="text-xs font-mono-tech text-primary font-medium">
                      TIME ENGINE: ASTRONOMICAL_TICK_CALCULATOR
                    </span>
                    <span className="text-[10px] font-mono-tech bg-primary text-canvas px-2 py-0.5">
                      STATUS: ZERO DRIFT
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                    <div className="p-3 bg-canvas border border-borderline">
                      <span className="text-[10px] font-mono-tech text-secondary block">
                        TRACKED CITIES
                      </span>
                      <span className="text-lg font-semibold text-primary block mt-1">
                        32 Capitals
                      </span>
                      <span className="text-[10px] text-emerald-700 font-mono-tech">
                        Global sync
                      </span>
                    </div>
                    <div className="p-3 bg-canvas border border-borderline">
                      <span className="text-[10px] font-mono-tech text-secondary block">
                        TICK PRECISION
                      </span>
                      <span className="text-lg font-semibold text-primary block mt-1">
                        0.001ms
                      </span>
                      <span className="text-[10px] text-secondary font-mono-tech">
                        RAF Synced
                      </span>
                    </div>
                    <div className="p-3 bg-canvas border border-borderline">
                      <span className="text-[10px] font-mono-tech text-secondary block">
                        TZ OFFSETS
                      </span>
                      <span className="text-lg font-semibold text-primary block mt-1">
                        UTC-12..+14
                      </span>
                      <span className="text-[10px] text-primary font-mono-tech">
                        Full coverage
                      </span>
                    </div>
                  </div>
                  <div className="p-4 bg-canvas border border-borderline text-xs font-mono-tech text-secondary space-y-1">
                    <p className="text-primary font-medium">
                      $ world-time sync --mode astronomical
                    </p>
                    <p>&gt; Calculating solar declination &amp; local meridian angles</p>
                    <p>&gt; Synchronized with International Earth Rotation Reference Services ✓</p>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Project Meta & Context */}
      <div className="lg:col-span-5 flex flex-col justify-between h-full pt-1">
        <div>
          <div className="flex items-center justify-between text-xs font-mono-tech text-secondary mb-3">
            <span>
              {project.number} · {project.category}
            </span>
            <span>{project.year}</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-primary">
            {project.title}
          </h3>

          <p className="mt-4 text-sm text-secondary leading-relaxed">
            {project.description}
          </p>

          {/* Tech badges in Swiss mono style */}
          <div className="mt-6 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="text-[11px] font-mono-tech px-2.5 py-1 border border-borderline bg-surface/80 text-accent"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-borderline flex items-center justify-between">
          <button
            type="button"
            onClick={() => onOpenCaseStudy(project)}
            className="min-h-11 inline-flex items-center space-x-1.5 text-xs font-mono-tech uppercase tracking-wider text-primary group-hover:underline focus:outline-none focus-visible:ring-1 focus-visible:ring-primary"
          >
            <span>View Case Study</span>
            <FiArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
          </button>
          <span className="text-[11px] font-mono-tech text-secondary">
            {project.status}
          </span>
        </div>
      </div>
    </article>
  );
}
