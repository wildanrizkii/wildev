import { TechPillar } from "@/types/portfolio";

export const techStackData: TechPillar[] = [
  {
    id: "frontend-client",
    number: "01",
    title: "FRONTEND & CLIENT",
    items: [
      "Next.js & React",
      "TypeScript",
      "TanStack (Query, Table, Virtual)",
      "TanStack Pacer & Redact",
      "Tailwind CSS",
      "Framer Motion & Lenis",
    ],
  },
  {
    id: "backend-architecture",
    number: "02",
    title: "BACKEND & ARCHITECTURE",
    items: [
      "NestJS & Node.js",
      "Swagger / OpenAPI",
      "WebSockets",
      "NestJS Throttler",
      "Passport & JWT Auth",
      "Zod & Class Validator",
    ],
  },
  {
    id: "database-storage",
    number: "03",
    title: "DATABASE & STORAGE",
    items: [
      "PostgreSQL",
      "Prisma ORM & PG Adapter",
      "Redis Cache",
      "IndexedDB (Offline-first)",
      "SQL Optimization",
    ],
  },
  {
    id: "devops-tooling",
    number: "04",
    title: "DEVOPS & TOOLING",
    items: [
      "Docker & Compose",
      "Turbopack",
      "Biome & ESLint",
      "Jest & Testing Library",
      "Git & GitHub Actions",
      "Nginx & VPS",
    ],
  },
];
