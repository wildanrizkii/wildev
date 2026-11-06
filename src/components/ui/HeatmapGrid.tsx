"use client";

import { useState } from "react";
import { contributionMatrixData } from "@/data/contribution-matrix";
import { ContributionDay } from "@/types/portfolio";

const cellClasses: Record<number, string> = {
  0: "bg-cell-0",
  1: "bg-cell-1",
  2: "bg-cell-2",
  3: "bg-cell-3",
  4: "bg-cell-4",
};

interface HeatmapGridProps {
  days?: ContributionDay[];
}

export default function HeatmapGrid({ days = contributionMatrixData }: HeatmapGridProps) {
  const [activeCell, setActiveCell] = useState<ContributionDay | null>(null);
  const activeDays = days && days.length > 0 ? days : contributionMatrixData;

  return (
    <div className="relative">
      {/* Active tooltip indicator */}
      <div className="h-6 mb-2 flex items-center text-xs font-mono-tech text-secondary">
        {activeCell ? (
          <span className="text-primary font-medium">
            {activeCell.count} contribution{activeCell.count === 1 ? "" : "s"} on{" "}
            {activeCell.date}
          </span>
        ) : (
          <span className="text-[11px] text-secondary">
            Hover or tap any cell to inspect daily commit cadence
          </span>
        )}
      </div>

      {/* Rendered 52-Week Contribution Matrix */}
      <div
        className="overflow-x-auto pb-3 focus:outline-none"
        tabIndex={0}
        aria-label="GitHub 52-week contribution heatmap matrix"
      >
        <div
          className="heatmap-grid-scroll min-w-[720px] select-none py-1"
          role="grid"
          aria-readonly="true"
        >
          {activeDays.map((day) => (
            <div
              key={day.date}
              role="gridcell"
              tabIndex={0}
              aria-label={`${day.count} contributions on ${day.date}`}
              onMouseEnter={() => setActiveCell(day)}
              onMouseLeave={() => setActiveCell(null)}
              onFocus={() => setActiveCell(day)}
              onBlur={() => setActiveCell(null)}
              className={`w-[11px] h-[11px] rounded-[1px] ${
                cellClasses[day.tier]
              } transition-transform duration-100 hover:scale-125 focus:scale-125 focus:outline-none focus:ring-1 focus:ring-primary cursor-pointer`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
