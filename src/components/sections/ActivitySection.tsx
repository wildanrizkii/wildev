"use client";

import { useEffect, useState, Suspense } from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import { repositoriesData } from "@/data/repositories";
import HeatmapGrid from "@/components/ui/HeatmapGrid";
import RepositoryCard from "@/components/ui/RepositoryCard";
import { GitHubActivityData } from "@/types/portfolio";

interface ActivitySectionProps {
  initialData?: GitHubActivityData;
}

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

export default function ActivitySection({ initialData }: ActivitySectionProps) {
  const [data, setData] = useState<GitHubActivityData | undefined>(initialData);

  useEffect(() => {
    // If no initialData or to refresh on client mount
    if (!initialData) {
      fetch("/api/github-activity")
        .then((res) => {
          if (res.ok) return res.json();
          throw new Error("Failed to load activity");
        })
        .then((fetchedData: GitHubActivityData) => {
          setData(fetchedData);
        })
        .catch(() => {
          // Keep current/fallback state silently
        });
    }
  }, [initialData]);

  const username = data?.stats?.username || "wildanrizkii";
  const totalContribs = data?.stats?.totalContributions ?? 2111;
  const activeWeeks = data?.stats?.activeWeeks ?? 52;
  const longestSingleDay = data?.stats?.longestSingleDay ?? 22;
  const releasePattern =
    data?.stats?.releasePattern ?? "Wed • Thu • Fri heavy release cycles";
  const repositories =
    data?.repositories && data.repositories.length > 0
      ? data.repositories
      : repositoriesData;

  const profileUrl = `https://github.com/${username}`;

  return (
    <section
      id="activity"
      className="max-w-7xl mx-auto px-6 sm:px-8 py-24"
    >
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
            04 / OPEN SOURCE &amp; ACTIVITY
          </motion.span>
          <motion.h2
            variants={headerItemVariants}
            className="text-3xl sm:text-5xl font-normal tracking-tightest text-primary"
          >
            Consistency in every commit.
          </motion.h2>
        </div>
        <motion.div
          variants={headerItemVariants}
          className="text-xs font-mono-tech text-secondary flex items-center space-x-3"
        >
          <a
            href={profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-primary hover:underline"
          >
            @{username}
          </a>
          <span>·</span>
          <span suppressHydrationWarning>
            {totalContribs.toLocaleString("en-US")}+ contributions (last 12 mos)
          </span>
        </motion.div>
      </motion.div>

      {/* Heatmap Panel Container */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="p-6 sm:p-8 bg-surface/50 border border-borderline transform-gpu will-change-[transform,opacity]"
      >
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-borderline">
          <div className="flex items-center space-x-2">
            <FiGithub className="w-4 h-4 text-primary" aria-hidden="true" />
            <span className="text-xs font-mono-tech text-primary font-medium tracking-tight">
              ANNUAL REPOSITORY CADENCE
            </span>
          </div>

          {/* Legend */}
          <div className="flex items-center space-x-2 text-[10px] font-mono-tech text-secondary">
            <span>Less</span>
            <div className="flex space-x-1" aria-hidden="true">
              <span className="w-2.5 h-2.5 bg-cell-0 inline-block border border-borderline/60" />
              <span className="w-2.5 h-2.5 bg-cell-1 inline-block border border-borderline/60" />
              <span className="w-2.5 h-2.5 bg-cell-2 inline-block border border-borderline/60" />
              <span className="w-2.5 h-2.5 bg-cell-3 inline-block border border-borderline/60" />
              <span className="w-2.5 h-2.5 bg-cell-4 inline-block border border-borderline/60" />
            </div>
            <span>More</span>
          </div>
        </div>

        <Suspense
          fallback={
            <div className="h-40 min-h-[160px] flex items-center justify-center text-xs font-mono-tech text-secondary">
              Loading contribution activity...
            </div>
          }
        >
          <HeatmapGrid days={data?.contributions} />
        </Suspense>

        <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono-tech text-secondary pt-3 border-t border-borderline/60 gap-2">
          <span>
            Weekly active streak: {activeWeeks} weeks • Longest single day:{" "}
            {longestSingleDay} commits
          </span>
          <span className="text-primary font-medium">{releasePattern}</span>
        </div>
      </motion.div>

      {/* Key Repositories Grid */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {repositories.map((repo, idx) => (
          <motion.div
            key={repo.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="h-full flex flex-col transform-gpu will-change-[transform,opacity]"
          >
            <RepositoryCard repo={repo} />
          </motion.div>
        ))}
      </div>

      {/* Action */}
      <div className="mt-8 text-center sm:text-left">
        <a
          href={profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="min-h-[44px] inline-flex items-center space-x-2 text-xs font-mono-tech uppercase tracking-wider text-primary border border-primary px-5 py-2.5 hover:bg-primary hover:text-canvas focus:outline-none focus-visible:ring-1 focus-visible:ring-primary"
        >
          <span>Explore GitHub Profile</span>
          <FiArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
