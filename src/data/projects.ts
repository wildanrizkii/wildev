import { Project } from "@/types/portfolio";

export const projectsData: Project[] = [
  {
    id: "adora-apps",
    number: "01",
    category: "PHARMACY CLOUD SAAS & POS",
    year: "2025 – 2026",
    title: "Adora Apps",
    description:
      "A comprehensive cloud pharmacy operations and point-of-sale platform. Features real-time multi-branch inventory tracking, batch expiration matrices, role-based pharmacist access, and an offline-first cashier interface with IndexedDB.",
    techStack: [
      "Next.js 16",
      "React 19",
      "Tailwind CSS",
      "Framer Motion",
      "Lenis",
      "Zod",
      "Vaul",
    ],
    status: "DEPLOYED IN PRODUCTION",
    previewType: "image",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBZt9VBzQ_5dci6I49WgD9T_fSDvZjbjduins5E8aSCZdON-JC9mcpts6IpvHy54I5UZPbSw_f69aDVKPcolYYM3iZ11KIg4BvstfDtpfIpv5loEA77RgnY-kK2GlM0ZvfPRPYv6EIlLAvIWWcm24jCT1G89BDhR1Ab1gLAoMIw5TGSOwTi0RVXlxrRTcBYbgispoGKcsIM_c4OF5iIWmkWroiieTteqIC-hw571kph",
    links: {
      caseStudy: "#connect",
      liveDemo: "https://adelle.id",
    },
    overview:
      "Engineered to eliminate retail inventory discrepancies across retail pharmacy branches, enforcing strict batch expiry tracking with sub-second cashier checkout workflows.",
    highlights: [
      "Multi-branch real-time stock balance tracking",
      "Offline-first PWA cashier with background synchronization",
      "Batch expiration warning matrices & automated restock alerts",
      "Optimized P95 query latency under 45ms",
    ],
  },
  {
    id: "adora-api",
    number: "02",
    category: "ENTERPRISE BACKEND ARCHITECTURE",
    year: "2025 – 2026",
    title: "Adora API",
    description:
      "High-throughput NestJS enterprise backend powering Apotek Adora. Implements strict multi-tenant schema isolation, Midtrans payment gateway integrations, automated background stock audit schedules, and OpenAPI/Swagger documentation.",
    techStack: [
      "NestJS",
      "Prisma ORM",
      "PostgreSQL",
      "Docker",
      "Swagger",
      "Redis",
      "JWT / CSRF",
    ],
    status: "PRODUCTION REST API",
    previewType: "blueprint",
    links: {
      caseStudy: "#connect",
    },
    overview:
      "Multi-tenant architecture isolating pharmacy branches with strict row-level security and background queue processors handling high-volume daily transactional invoices.",
    highlights: [
      "Strict row-level tenancy and cryptographic session management",
      "Automated cron workers for inventory depletion calculation",
      "Midtrans payment webhook verification with idempotent replay protection",
      "Complete OpenAPI / Swagger interactive API specifications",
    ],
  },
  {
    id: "aviora-apps",
    number: "03",
    category: "PRODUCTIVITY & SPRINT SUITE",
    year: "2025 – 2026",
    title: "Aviora Apps",
    description:
      "A minimalist team productivity and sprint workflow suite. Designed with a strictly monochrome aesthetic, Aviora enables fast collaborative keyboard navigation, drag-and-drop Kanban columns, timeline Gantt charts, and persistent optimistic updates.",
    techStack: [
      "Next.js 16",
      "React 19",
      "Tailwind CSS",
      "Framer Motion",
      "Lenis",
      "Recharts",
      "Zustand",
    ],
    status: "ACTIVE SOFTWARE",
    previewType: "image",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAg-i3jUc-Cy_hVFoA1I-vBqbkDpJru-GnK9W1dwhzH3mKTg3oIfH3-k5Nbqy2HIi0WdlqdZ4xsEDd3f9o4g-0JHYjmpfH1LB1tvnAjCpqv55v0GfABjei-cfUcV2TDJ6lC9nX_I8yBWe8Eqz2dt5For4gSkxA6StWKs7B8C0bljfaFb9B-QKlb-uY4XL3eA2hi7vDGXpjxZqPKBDZ_ZEAzTYeVX0ZRnxgTBjKzBG4v",
    links: {
      caseStudy: "#connect",
      liveDemo: "https://aviora.bray.web.id",
    },
    overview:
      "Built for software engineering teams that demand high-speed backlog management, zero clutter, and instantaneous optimistic state changes without blocking network round-trips.",
    highlights: [
      "Optimistic state mutations for instantaneous feedback",
      "Multi-board drag and drop with collision boundaries",
      "Comprehensive keyboard shortcuts covering 100% of backlog actions",
      "Timeline Gantt visualization for sprint milestones",
    ],
  },
  {
    id: "aviora-api",
    number: "04",
    category: "DISTRIBUTED SPRINT CORE ENGINE",
    year: "2025 – 2026",
    title: "Aviora API",
    description:
      "Distributed backend core orchestrating Aviora sprint lifecycle, board permissions, user session verification, and real-time WebSocket distribution with Redis caching.",
    techStack: [
      "NestJS",
      "PostgreSQL",
      "Prisma ORM",
      "Docker",
      "WebSockets",
      "Throttler",
      "Passport",
    ],
    status: "PRODUCTION REST API",
    previewType: "blueprint",
    links: {
      caseStudy: "#connect",
    },
    overview:
      "Event-driven NestJS core built on WebSockets and Redis pub/sub to propagate sprint board state transitions to connected collaborators in real-time.",
    highlights: [
      "WebSocket real-time architecture for sub-second board state sync",
      "Throttler rate-limiting guards preventing denial-of-service abuse",
      "Cryptographic token rotation with refresh token revoking",
      "Sub-millisecond query responses with Prisma database optimizations",
    ],
  },
  {
    id: "aviora-task-apps",
    number: "05",
    category: "TASK MANAGEMENT & ISSUE TRACKER",
    year: "2025 – 2026",
    title: "Aviora Task Apps",
    description:
      "Focused task tracking frontend providing team velocity charts, filtered priority matrices, nested checklist trees, and instant issue triage surfaces with virtualized scrolling.",
    techStack: [
      "Next.js 16",
      "React 19",
      "Tailwind CSS",
      "Framer Motion",
      "Lenis",
      "Vaul",
    ],
    status: "PRODUCTION APPLICATION",
    previewType: "image",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBHft4s_Kh5rD1Sq9Trt_qkkdGQGhPsY-zTSiheTNGIYZr14js44KP-BQUeU3TlfXaqCWzwG9XwBsYOypXMYRQfWpm2H4eGl2iDGOBLoKLTAofBx45jYMmkeI6HgQNSaRPP8xSS5DOoJMwDyOzIAqZVC_OPMf1dm7H7ptRr5V2mUCTGAnz3ofy472Rb1F1sVSFogDvuoHTi8DJ2GrEAvaYiVKoqpjGZbCwvNAc_4UiX",
    links: {
      caseStudy: "#connect",
    },
    overview:
      "Engineered for granular issue triaging, backlog refinement, and virtualized list performance across enterprise project trees.",
    highlights: [
      "Virtualized long-list task rendering for zero lag",
      "Nested subtask dependency graphs and checklist progression",
      "Sprint burndown velocity and priority matrices",
      "Fast-access modal drawers with Vaul touch gestures",
    ],
  },
  {
    id: "aviora-task-api",
    number: "06",
    category: "TASK LIFECYCLE & AUDIT MICROSERVICE",
    year: "2025 – 2026",
    title: "Aviora Task API",
    description:
      "Dedicated microservice handling task transitions, immutable audit logs, background reminder workers, and transactional webhook dispatchers for enterprise sprint projects.",
    techStack: [
      "NestJS",
      "PostgreSQL",
      "Prisma ORM",
      "Docker",
      "Swagger",
      "Redis",
      "Zod",
    ],
    status: "MICROSERVICE API",
    previewType: "blueprint",
    links: {
      caseStudy: "#connect",
    },
    overview:
      "High-concurrency microservice tracking full state change lifecycles with append-only audit tables and scheduled background reminder routines.",
    highlights: [
      "Immutable event-sourced audit logs for compliance tracking",
      "Background workers for task due date alerts and escalation",
      "Transactional webhook dispatchers with exponential backoff",
      "Strict Zod & class-validator input payload contracts",
    ],
  },
  {
    id: "world-time",
    number: "07",
    category: "FUTURISTIC TIME ENGINE & SHOWCASE",
    year: "2026",
    title: "World Time",
    description:
      "High-concept futuristic global world clock and city showcase. Features millisecond-accurate astronomical time computations, interactive city slot selector, sleek cyberpunk aesthetic, and kinetic drawer transitions.",
    techStack: [
      "Next.js 16",
      "React 19",
      "Framer Motion",
      "Tailwind CSS",
      "Chakra Petch",
      "Michroma",
    ],
    status: "PRODUCTION UTILITY",
    previewType: "blueprint",
    links: {
      caseStudy: "#connect",
      liveDemo: "#",
    },
    overview:
      "Exploration of speculative Swiss-futuristic interface design combined with multi-timezone astronomical algorithms and zero-drift tick synchronization.",
    highlights: [
      "Zero-drift astronomical time computation engine",
      "Custom typographic scale pairing Michroma and Chakra Petch",
      "Dynamic timezone offset recalculation across 30+ major capitals",
      "Kinetic touch drawer with accessible keyboard selection",
    ],
  },
];
