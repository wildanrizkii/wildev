import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  number: string;
  title: string;
  rightElement?: React.ReactNode;
  className?: string;
}

export default function SectionHeader({
  number,
  title,
  rightElement,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4",
        className
      )}
    >
      <div className="text-xs font-mono-tech uppercase tracking-widest text-secondary">
        {number} / {title}
      </div>
      {rightElement && (
        <div className="text-xs font-mono-tech text-secondary uppercase tracking-wider">
          {rightElement}
        </div>
      )}
    </div>
  );
}
