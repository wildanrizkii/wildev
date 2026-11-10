import { FiArrowUpRight, FiStar } from "react-icons/fi";
import { RepositoryItem } from "@/types/portfolio";

interface RepositoryCardProps {
  repo: RepositoryItem;
}

export default function RepositoryCard({ repo }: RepositoryCardProps) {
  return (
    <div className="h-full p-6 bg-canvas border border-borderline flex flex-col justify-between hover:border-primary/40">
      <div>
        <div className="flex items-center justify-between text-xs font-mono-tech text-secondary mb-2">
          <span>PUBLIC REPOSITORY</span>
          <span className="inline-flex items-center gap-1">
            <FiStar className="w-3 h-3 text-secondary" aria-hidden="true" />
            <span>{repo.stars}</span>
          </span>
        </div>
        <h3 className="text-sm font-semibold text-primary">
          <a
            href={repo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline inline-flex items-center gap-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-primary"
          >
            <span>{repo.name}</span>
            <FiArrowUpRight className="w-3 h-3 text-secondary" aria-hidden="true" />
          </a>
        </h3>
        <p className="mt-2 text-xs text-secondary leading-relaxed">
          {repo.description}
        </p>
      </div>

      <div className="mt-4 pt-3 border-t border-borderline/70 flex items-center justify-between text-[11px] font-mono-tech text-secondary">
        <span className="flex items-center gap-1.5">
          <span
            className="w-2 h-2 rounded-full inline-block"
            style={{ backgroundColor: repo.languageColor }}
            aria-hidden="true"
          />
          <span>{repo.language}</span>
        </span>
        <span>{repo.version}</span>
      </div>
    </div>
  );
}
