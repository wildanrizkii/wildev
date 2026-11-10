import { TechPillar } from "@/types/portfolio";

interface TechPillarCardProps {
  pillar: TechPillar;
}

export default function TechPillarCard({ pillar }: TechPillarCardProps) {
  return (
    <div className="h-full flex flex-col justify-between bg-surface/20 hover:bg-surface/40">
      {/* Pillar Header */}
      <div className="p-5 sm:p-6 border-b border-borderline/80 flex items-center justify-between bg-surface/30">
        <div className="flex flex-col gap-1">
          <span className="font-mono-tech text-[10px] tracking-widest uppercase text-secondary">
            SPEC // {pillar.number}
          </span>
          <h3 className="font-mono-tech text-xs font-semibold uppercase tracking-wider text-primary">
            {pillar.title}
          </h3>
        </div>
        <span
          className="w-1.5 h-1.5 bg-primary shrink-0"
          aria-hidden="true"
        />
      </div>

      {/* Item List */}
      <ul className="flex-1 flex flex-col divide-y divide-borderline/40">
        {pillar.items.map((item, idx) => (
          <li
            key={item}
            className="flex-1 flex items-center justify-between px-5 sm:px-6 py-3.5 hover:bg-surface/60 group min-h-[46px]"
          >
            <div className="flex items-center gap-3 min-w-0">
              <span className="font-mono-tech text-[10px] text-secondary/60 group-hover:text-primary select-none">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <span className="font-mono-tech text-xs text-primary tracking-tight">
                {item}
              </span>
            </div>
            <span
              className="w-1 h-1 rounded-full bg-borderline group-hover:bg-primary ml-2 shrink-0"
              aria-hidden="true"
            />
          </li>
        ))}
      </ul>

      {/* Pillar Footer / Metadata Anchor */}
      <div className="px-5 sm:px-6 py-3 border-t border-borderline/60 bg-surface/30 flex items-center justify-between font-mono-tech text-[10px] text-secondary tracking-widest uppercase">
        <span>06 / 06 MODULES</span>
        <span className="text-secondary/70">ACTIVE</span>
      </div>
    </div>
  );
}
