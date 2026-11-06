import { TechPillar } from "@/types/portfolio";

interface TechPillarCardProps {
  pillar: TechPillar;
}

export default function TechPillarCard({ pillar }: TechPillarCardProps) {
  return (
    <div className="p-6 border border-borderline bg-surface/30 hover:border-primary/40 transition-colors">
      <div className="flex items-center justify-between pb-3 border-b border-borderline mb-4">
        <span className="font-mono-tech text-xs uppercase font-semibold text-primary">
          {pillar.number} / {pillar.title}
        </span>
        <span className="w-1.5 h-1.5 bg-primary" aria-hidden="true" />
      </div>

      <ul className="space-y-2.5 font-mono-tech text-xs">
        {pillar.items.map((item) => (
          <li
            key={item}
            className="flex items-center py-1 border-b border-borderline/30 last:border-b-0"
          >
            <span className="text-primary">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
