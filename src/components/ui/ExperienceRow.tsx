import { ExperienceItem } from "@/types/portfolio";

interface ExperienceRowProps {
  item: ExperienceItem;
}

export default function ExperienceRow({ item }: ExperienceRowProps) {
  return (
    <article className="py-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-baseline">
      {/* Col 1: Period & Employment Type */}
      <div className="lg:col-span-3 text-xs font-mono-tech text-secondary uppercase">
        {item.period} · {item.employmentType}
      </div>

      {/* Col 2: Role, Organization & Achievements */}
      <div className="lg:col-span-5">
        <h3 className="text-xl font-medium text-primary">{item.role}</h3>
        <p className="text-xs font-mono-tech text-secondary mt-1">
          {item.company} / {item.department}
        </p>

        <ul className="mt-4 space-y-2 text-xs text-secondary leading-relaxed list-disc list-inside">
          {item.achievements.map((achievement, idx) => (
            <li key={idx}>{achievement}</li>
          ))}
        </ul>
      </div>

      {/* Col 3: Tech Pills */}
      <div className="lg:col-span-4 flex flex-wrap gap-2 lg:justify-end">
        {item.techStack.map((tech) => (
          <span
            key={tech}
            className="text-[11px] font-mono-tech px-2.5 py-1 bg-surface border border-borderline text-accent"
          >
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
}
