export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  year: string;
  description: string;
  techStack: string[];
  status: string;
  imageUrl?: string;
  previewType?: "image" | "blueprint";
  links?: {
    caseStudy?: string;
    liveDemo?: string;
    repository?: string;
  };
  overview?: string;
  highlights?: string[];
}

export interface ExperienceItem {
  id: string;
  period: string;
  employmentType: string;
  role: string;
  company: string;
  department: string;
  achievements: string[];
  techStack: string[];
}

export interface TechPillar {
  id: string;
  number: string;
  title: string;
  items: string[];
}

export interface RepositoryItem {
  id: string;
  name: string;
  description: string;
  stars: number;
  language: string;
  languageColor: string;
  version: string;
  url: string;
}

export interface ContributionDay {
  date: string;
  count: number;
  tier: 0 | 1 | 2 | 3 | 4;
}

export interface GitHubStats {
  username: string;
  totalContributions: number;
  activeWeeks: number;
  longestStreak: number;
  longestSingleDay: number;
  releasePattern: string;
}

export interface GitHubActivityData {
  contributions: ContributionDay[];
  stats: GitHubStats;
  repositories: RepositoryItem[];
  updatedAt: string;
  source: "live" | "fallback";
}
