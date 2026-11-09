"use client";

import { useState, useMemo, useCallback, memo } from "react";
import { contributionMatrixData } from "@/data/contribution-matrix";
import { ContributionDay } from "@/types/portfolio";

const cellClasses: Record<number, string> = {
  0: "bg-cell-0",
  1: "bg-cell-1",
  2: "bg-cell-2",
  3: "bg-cell-3",
  4: "bg-cell-4",
};

const MONTH_NAMES = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

interface MonthLabel {
  name: string;
  weekIndex: number;
}

function getMonthLabels(days: ContributionDay[], totalWeeks: number): MonthLabel[] {
  const labels: MonthLabel[] = [];
  let lastMonth = -1;
  let lastWeekIdx = -99;

  for (let w = 0; w < totalWeeks; w++) {
    const day = days[w * 7];
    if (!day) continue;

    const parts = day.date.split("-");
    if (parts.length < 2) continue;
    const monthIdx = parseInt(parts[1], 10) - 1;

    if (monthIdx !== lastMonth) {
      if (labels.length === 1 && w - lastWeekIdx < 2) {
        // Replace previous initial label if it only spanned 1 week
        labels[0] = { name: MONTH_NAMES[monthIdx], weekIndex: w };
        lastWeekIdx = w;
      } else if (w - lastWeekIdx >= 2 && totalWeeks - w >= 2) {
        labels.push({
          name: MONTH_NAMES[monthIdx],
          weekIndex: w,
        });
        lastWeekIdx = w;
      } else if (labels.length === 0 && totalWeeks - w >= 2) {
        labels.push({
          name: MONTH_NAMES[monthIdx],
          weekIndex: w,
        });
        lastWeekIdx = w;
      }
      lastMonth = monthIdx;
    }
  }

  return labels;
}

interface HeatmapCellProps {
  day: ContributionDay;
  isSelected: boolean;
  onHover: (day: ContributionDay) => void;
  onLeave: () => void;
  onClick: (day: ContributionDay) => void;
}

const HeatmapCell = memo(function HeatmapCell({
  day,
  isSelected,
  onHover,
  onLeave,
  onClick,
}: HeatmapCellProps) {
  return (
    <div
      role="gridcell"
      tabIndex={0}
      aria-label={`${day.count} contributions on ${day.date}`}
      onMouseEnter={() => onHover(day)}
      onMouseLeave={onLeave}
      onFocus={() => onHover(day)}
      onBlur={onLeave}
      onClick={() => onClick(day)}
      className={`aspect-square w-full rounded-[1px] md:rounded-[2px] ${
        cellClasses[day.tier] ?? "bg-cell-0"
      } border ${
        isSelected
          ? "border-primary ring-1 ring-inset ring-primary"
          : "border-borderline/40 hover:border-primary hover:ring-1 hover:ring-inset hover:ring-primary/80"
      } transition-colors duration-100 relative focus:outline-none focus:border-primary focus:ring-1 focus:ring-inset focus:ring-primary cursor-pointer`}
    />
  );
});

interface HeatmapGridProps {
  days?: ContributionDay[];
}

export default function HeatmapGrid({ days = contributionMatrixData }: HeatmapGridProps) {
  const [activeCell, setActiveCell] = useState<ContributionDay | null>(null);
  const activeDays = days && days.length > 0 ? days : contributionMatrixData;

  const totalWeeks = useMemo(() => {
    return Math.max(1, Math.ceil(activeDays.length / 7));
  }, [activeDays]);

  const monthLabels = useMemo(() => {
    return getMonthLabels(activeDays, totalWeeks);
  }, [activeDays, totalWeeks]);

  const handleHover = useCallback((day: ContributionDay) => {
    setActiveCell(day);
  }, []);

  const handleLeave = useCallback(() => {
    setActiveCell(null);
  }, []);

  const handleClick = useCallback((day: ContributionDay) => {
    setActiveCell((prev) => (prev?.date === day.date ? null : day));
  }, []);

  return (
    <div className="relative w-full">
      {/* Active tooltip indicator */}
      <div className="h-6 mb-3 flex items-center text-xs font-mono-tech text-secondary">
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

      {/* Rendered 52-Week Contribution Matrix with Month & Day Axis */}
      <div
        className="overflow-x-auto pb-3 focus:outline-none"
        tabIndex={0}
        aria-label="GitHub 52-week contribution heatmap matrix"
      >
        <div className="min-w-[760px] w-full select-none py-1 px-1">
          {/* Month labels row */}
          <div className="grid grid-cols-[28px_1fr] gap-2 mb-2 items-center">
            {/* Blank placeholder aligning with day-of-week labels */}
            <div aria-hidden="true" />

            {/* Months aligned with week columns */}
            <div
              className="grid gap-[3px] sm:gap-[3.5px] text-[10px] font-mono-tech text-secondary/80 select-none h-4"
              style={{
                gridTemplateColumns: `repeat(${totalWeeks}, minmax(0, 1fr))`,
              }}
              aria-hidden="true"
            >
              {monthLabels.map((m) => (
                <span
                  key={`${m.name}-${m.weekIndex}`}
                  style={{ gridColumnStart: m.weekIndex + 1 }}
                  className="col-span-3 truncate leading-none"
                >
                  {m.name}
                </span>
              ))}
            </div>
          </div>

          {/* Main Grid: Day labels + Heatmap Matrix */}
          <div className="grid grid-cols-[28px_1fr] gap-2 items-stretch">
            {/* Day of week labels */}
            <div
              className="grid text-[9px] sm:text-[10px] font-mono-tech text-secondary/70 select-none"
              style={{
                gridTemplateRows: "repeat(7, minmax(0, 1fr))",
                gap: "3.5px",
              }}
              aria-hidden="true"
            >
              <span className="flex items-center leading-none"></span>
              <span className="flex items-center leading-none">Mon</span>
              <span className="flex items-center leading-none"></span>
              <span className="flex items-center leading-none">Wed</span>
              <span className="flex items-center leading-none"></span>
              <span className="flex items-center leading-none">Fri</span>
              <span className="flex items-center leading-none"></span>
            </div>

            {/* Contribution Cells */}
            <div
              className="heatmap-grid-scroll w-full"
              style={{
                display: "grid",
                gridTemplateRows: "repeat(7, minmax(0, 1fr))",
                gridAutoFlow: "column",
                gridAutoColumns: "minmax(0, 1fr)",
                gap: "3.5px",
              }}
              role="grid"
              aria-readonly="true"
            >
              {activeDays.map((day) => (
                <HeatmapCell
                  key={day.date}
                  day={day}
                  isSelected={activeCell?.date === day.date}
                  onHover={handleHover}
                  onLeave={handleLeave}
                  onClick={handleClick}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
