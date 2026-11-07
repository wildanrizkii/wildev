<div align="center">

# ✦ WILDev. — Engineering Portfolio

<p align="center">
  <strong>Personal engineering portfolio & showcase for WILDev. (Wildan Rizki)</strong><br />
  <em>Crafted with Swiss editorial aesthetics, modern typography, and high-performance frontend engineering.</em>
</p>

<p align="center">
  <a href="https://nextjs.org"><img src="https://img.shields.io/badge/Next.js_16-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js 16" /></a>
  <a href="https://react.dev"><img src="https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React 19" /></a>
  <a href="https://www.typescriptlang.org"><img src="https://img.shields.io/badge/TypeScript_5-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript 5" /></a>
  <a href="https://tailwindcss.com"><img src="https://img.shields.io/badge/Tailwind_CSS_v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS v4" /></a>
  <a href="https://lenis.darkroom.engineering"><img src="https://img.shields.io/badge/Lenis-Smooth_Scroll-black?style=for-the-badge" alt="Lenis Scroll" /></a>
  <a href="https://motion.dev"><img src="https://img.shields.io/badge/Framer_Motion-14-black?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" /></a>
</p>

---

[Overview](#-project-overview) • [Key Features](#-key-features) • [Modules & Dependencies](#-modules--dependencies) • [Project Architecture](#-project-architecture) • [Getting Started](#-getting-started) • [Scripts](#-available-scripts) • [Design Philosophy](#-design-philosophy--typography) • [License](#-license)

---

</div>

## 📖 Project Overview

**WILDev. Portfolio** is a personal software engineering portfolio website designed with a **Swiss International Typographic Style** approach. The project blends precise editorial layouts, a warm canvas color palette (`#EDECEB`), curated typography (_Inter_ & _JetBrains Mono_), monospaced micro-accents, and high-performance frontend engineering powered by **Next.js 16 App Router** and **React 19**.

Beyond showcasing interactive projects and career history, this portfolio directly integrates with the **GitHub API** to display live contribution data, an annual activity heatmap matrix, and real-time public repositories.

---

## ✨ Key Features

- 📐 **Swiss Editorial Design System**: Precise asymmetric grids, hairline borders, micro-badges, and clean visual hierarchy without decorative bloat (_anti-slop_).
- 🌊 **Inertial Smooth Scrolling**: Fluid scrolling experience powered by the **Lenis** engine, optimized via a custom React context provider.
- 🐙 **Live GitHub Activity & Heatmap**:
  - Dynamic contribution data fetching via GitHub API with a curated matrix fallback.
  - 52-week contribution visualization (Heatmap Grid) with interactive statistics tooltips.
  - Metrics for total commits, longest active streak, and dominant programming languages.
- 💼 **Interactive Project Showcase & Modal**:
  - Project cards featuring high-resolution thumbnails and technical meta tags.
  - Interactive detail modal with comprehensive architectural overviews and live preview links.
  - Automatic body scroll lock handler while the modal is open.
- ⏱️ **Live Local Clock**: Accurate real-time clock displaying the local time zone (`Asia/Jakarta / WIB`) with availability status indicator.
- 📋 **Seamless Interaction**: One-click instant email copy button with dynamic toast feedback (`useClipboard`).
- 📱 **Adaptive Mobile Drawer**: Responsive navigation featuring smooth drawer gestures optimized for compact displays.

---

## 📦 Modules & Dependencies

Below is the complete list of modules, libraries, and dependencies used in this project along with their respective roles:

### 1. Core Framework & Runtime

| Module / Package | Version  | Role & Usage Description                                                                                                     |
| :--------------- | :------: | :--------------------------------------------------------------------------------------------------------------------------- |
| **`next`**       | `16.4.5` | Modern Next.js framework with **App Router** architecture, Turbopack engine, React Server Components (RSC), and Route Handlers API. |
| **`react`**      | `19.3.0` | Core declarative UI library utilizing modern hooks and concurrent rendering.                                                 |
| **`react-dom`**  | `19.3.0` | React rendering adapter for the browser Document Object Model (DOM).                                                         |
| **`typescript`** |   `^5`   | Statically typed programming language providing type safety, optimal DX, and codebase scalability.                          |

### 2. Styling, Layout & Animation

| Module / Package             |  Version  | Role & Usage Description                                                                                         |
| :--------------------------- | :-------: | :---------------------------------------------------------------------------------------------------------------- |
| **`tailwindcss`**            |   `^4`    | Utility-first CSS framework v4 with a high-performance engine and zero-config overhead.                          |
| **`@tailwindcss/turbopack`** |   `^4`    | Official Tailwind plugin providing native compilation integration with Next.js Turbopack.                       |
| **`lenis`**                  | `^1.3.27` | Modern inertia/momentum-based smooth scroll engine, lightweight and responsive across desktop and touch devices. |
| **`framer-motion`**          | `^14.9.1` | Declarative animation library powering page transitions, modals, card interactions, and micro-hover effects.     |
| **`gsap`**                   | `^3.15.1` | GreenSock Animation Platform for high-performance, precision animation timelines.                                |
| **`@gsap/react`**            | `^2.1.2`  | Official GSAP integration wrapper for React component lifecycles (`useGSAP`).                                    |

### 3. Data Management & Utilities

| Module / Package       | Version  | Role & Usage Description                                                                                                   |
| :--------------------- | :------: | :------------------------------------------------------------------------------------------------------------------------- |
| **`@tanstack/redact`** | `^0.3.1` | Utility library from the TanStack suite for safe handling and masking of sensitive structured data.                        |
| **`react-icons`**      | `^5.7.0` | Comprehensive SVG icon collection including Simple Icons, Feather Icons, and Lucide Icons for buttons, social links, and indicators. |
| **`clsx`**             | `^2.1.1` | Ultra-lightweight utility for conditionally constructing CSS class strings.                                                |
| **`tailwind-merge`**   | `^3.7.0` | Helper to merge Tailwind CSS classes without specificity conflicts (composed with `clsx` in the `cn()` utility).           |

### 4. Developer Tools & Code Quality

| Module / Package         | Version  | Role & Usage Description                                                                               |
| :----------------------- | :------: | :----------------------------------------------------------------------------------------------------- |
| **`eslint`**             |   `^9`   | Next-generation JavaScript/TypeScript linter maintaining code consistency and quality standards.       |
| **`eslint-config-next`** | `16.4.5` | Next.js linting rule configuration enforcing App Router and Core Web Vitals best practices.            |
| **`@types/node`**        |  `^20`   | TypeScript type definitions for the Node.js runtime environment.                                       |
| **`@types/react`**       |  `^19`   | TypeScript type definitions for React 19 APIs, hooks, and JSX elements.                                |
| **`@types/react-dom`**   |  `^19`   | TypeScript type definitions for the React DOM renderer.                                                |

---

## 🏛️ Project Architecture

Below is the directory hierarchy and structural organization inside the `src/` directory:

```
wildev-portfolio/
├── public/                     # Static public assets (favicons, SVGs, media)
├── src/
│   ├── app/                    # Next.js 16 App Router
│   │   ├── api/                # API Route Handlers
│   │   │   └── github-activity/# GitHub activity data proxy endpoint
│   │   ├── favicon.ico         # Application favicon
│   │   ├── globals.css         # Global stylesheet, font variables, & Tailwind v4 utilities
│   │   ├── layout.tsx          # Root Layout (Fonts, Metadata, Providers, Header & Footer)
│   │   └── page.tsx            # Main portfolio page (Server Component)
│   ├── components/
│   │   ├── layout/             # Structural layout components (Header, Footer, MobileDrawer)
│   │   ├── sections/           # Primary single-page sections:
│   │   │   ├── HeroSection.tsx         # Editorial headline & concise availability status
│   │   │   ├── AboutSection.tsx        # Bio narrative & engineering philosophy
│   │   │   ├── SelectedWorksSection.tsx# Curated project showcase grid & modal triggers
│   │   │   ├── TechStackSection.tsx    # 4 architectural pillars of technical expertise
│   │   │   ├── ActivitySection.tsx     # GitHub activity heatmap & repository showcase
│   │   │   ├── ExperienceSection.tsx   # Professional experience & education timeline
│   │   │   └── ConnectSection.tsx      # Contact channels & copy-email action
│   │   └── ui/                 # Modular UI components:
│   │       ├── CopyEmailButton.tsx     # Interactive copy-to-clipboard email button
│   │       ├── ExperienceRow.tsx       # Expandable career experience row
│   │       ├── HeatmapGrid.tsx         # 52-week GitHub contribution visualization grid
│   │       ├── LiveClock.tsx           # Real-time Asia/Jakarta timezone clock
│   │       ├── ProjectArchiveTable.tsx # Comprehensive project archive table
│   │       ├── ProjectCard.tsx         # Project showcase card
│   │       ├── ProjectModal.tsx        # In-depth project detail modal overlay
│   │       ├── RepositoryCard.tsx      # GitHub repository overview card
│   │       ├── SectionHeader.tsx       # Standardized numbered section header
│   │       └── TechPillarCard.tsx      # Technical stack pillar card
│   ├── data/                   # Static data & curated fallback content
│   │   ├── contribution-matrix.ts      # 365-day fallback contribution matrix
│   │   ├── experience.ts               # Career and education history data
│   │   ├── projects.ts                 # Featured projects list & metadata
│   │   ├── repositories.ts             # Fallback GitHub repository data
│   │   └── tech-stack.ts               # 4 specialization pillars dataset
│   ├── hooks/                  # Custom React Hooks
│   │   ├── useClipboard.ts             # Clipboard copy hook with timeout feedback state
│   │   ├── useLiveClock.ts             # Real-time local clock interval hook
│   │   └── useLockScroll.ts            # Body scroll lock hook when modal is open
│   ├── lib/                    # General utilities & external connectors
│   │   ├── github.ts                   # GitHub REST API fetcher & data transformer
│   │   └── utils.ts                    # Class merging utility (cn / clsx + tailwind-merge)
│   ├── providers/              # Context Providers
│   │   └── SmoothScrollProvider.tsx    # Lenis smooth scroll initialization provider
│   └── types/                  # TypeScript interface definitions
│       └── portfolio.ts                # Data models for Project, TechPillar, GitHubStats, etc.
├── package.json                # Dependencies and project scripts manifest
├── tsconfig.json               # TypeScript compiler configuration
└── README.md                   # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites

Ensure your local development environment has:

- **Node.js**: `v20.x` or later
- **Package Manager**: `npm`, `pnpm`, or `bun`

### 1. Clone the Repository

```bash
git clone https://github.com/wildanrizkii/wildev.git
cd wildev
```

### 2. Install Dependencies

```bash
npm install
# or
pnpm install
# or
bun install
```

### 3. Configure Environment Variables (Optional)

Create a `.env.local` file in the root directory to enable live GitHub synchronization:

```env
# GitHub account username for live activity data
NEXT_PUBLIC_GITHUB_USERNAME=wildanrizkii

# GitHub Personal Access Token (Optional, to increase API rate limits)
GITHUB_TOKEN=ghp_yourPersonalAccessTokenHere
```

> **Note:** If environment variables are not configured, the application automatically falls back to curated static data in `src/data/`.

### 4. Run the Development Server

```bash
npm run dev
```

Open **[http://localhost:3000](http://localhost:3000)** in your browser to view the portfolio.

---

## 🛠️ Available Scripts

| Command         | Description                                                          |
| :-------------- | :------------------------------------------------------------------- |
| `npm run dev`   | Runs the Next.js development server with Turbopack for fast HMR.     |
| `npm run build` | Compiles and optimizes the application for production.               |
| `npm run start` | Starts the production server after a build.                          |
| `npm run lint`  | Runs ESLint to check code consistency and quality.                   |

---

## 🎨 Design Philosophy & Typography

The portfolio design adheres to the principles of the **Swiss Style** (International Typographic Style):

- **Neutral Palette**: Warm canvas background (`#EDECEB`), deep text (`#1A1918`), and subtle borders (`#D4D2CE`).
- **Harmonious Typography**:
  - **Inter**: Neutral sans-serif providing high legibility across body text and subheadings.
  - **JetBrains Mono**: Precision monospace typeface for metadata, numbered section labels (`01 / 06`), status badges, and technical coordinates.
- **Micro-Interactions**: Subtle Framer Motion transitions and Lenis momentum scrolling that enhance feel without distracting readers.

---

## 👨‍💻 Profile & Author

Designed and engineered with care by **Wildan Rizki (WILDev.)**.

- **GitHub**: [@wildanrizkii](https://github.com/wildanrizkii)
- **Website**: [wildevv.vercel.app](https://wildev.vercel.app)
- **Focus**: Full-Stack Web Development, High-Performance Systems, UI/UX Engineering.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

<div align="center">
  <small>© 2026 WILDev.</small>
</div>
