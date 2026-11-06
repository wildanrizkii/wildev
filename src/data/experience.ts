import { ExperienceItem } from "@/types/portfolio";

export const experienceData: ExperienceItem[] = [
  {
    id: "exp-go",
    period: "2025 – PRESENT",
    employmentType: "FULL-TIME",
    role: "Fullstack Web Developer",
    company: "PT Ganesha Operation",
    department: "Educational Technology & Systems",
    achievements: [
      "Engineered full-stack digital learning platforms and internal administrative web applications supporting nationwide operations.",
      "Developed high-performance interactive interfaces and resilient backend microservices with strict schema validation.",
      "Optimized database query flows and caching layers to guarantee low latency during high-concurrency peak usage.",
    ],
    techStack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
  },
  {
    id: "exp-adelle",
    period: "2025 – 2026",
    employmentType: "CONTRACT & PRODUCT",
    role: "Fullstack Web Developer",
    company: "SaaS Adelle Apps",
    department: "Enterprise Multi-Tenant Cloud Platform",
    achievements: [
      "Engineered core application surfaces and multi-tenant architectures for scalable enterprise SaaS operations.",
      "Built automated workflow systems, real-time activity feeds, and strictly typed internal API contracts.",
      "Spearheaded frontend component library standardizations with zero layout shift and rapid interactive response.",
    ],
    techStack: ["Next.js", "React", "TypeScript", "Node.js", "Tailwind CSS"],
  },
  {
    id: "exp-adora",
    period: "2024 – 2025",
    employmentType: "FREELANCE CONTRACT & PRODUCT",
    role: "Fullstack Web Developer",
    company: "Apotek Adora",
    department: "Digital Health & Pharmacy Infrastructure",
    achievements: [
      "Architected multi-tenant pharmaceutical database handling thousands of daily transactions across retail branches.",
      "Engineered background inventory sync engine with optimistic updates and conflict resolution for unstable connections.",
      "Reduced API endpoint P95 response times by 48% via strategic query restructuring and Redis caching layers.",
    ],
    techStack: ["Next.js", "NestJS", "PostgreSQL", "Docker", "Prisma"],
  },
];
