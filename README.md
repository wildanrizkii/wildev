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

[Ikhtisar](#-ikhtisar-proyek) • [Fitur Utama](#-fitur-utama) • [Modul & Dependensi](#-modul--dependensi-yang-digunakan) • [Struktur Proyek](#-struktur-arsitektur-proyek) • [Memulai](#-panduan-instalasi--memulai) • [Scripts](#-perintah-scripts) • [Lisensi](#-lisensi)

---

</div>

## 📖 Ikhtisar Proyek

**WILDev. Portfolio** adalah website portofolio rekayasa perangkat lunak (software engineering) personal yang dirancang dengan pendekatan **Swiss International Typographic Style**. Proyek ini memadukan tata letak editorial yang presisi, palet warna *warm canvas* (`#EDECEB`), tipografi kurasi (*Inter* & *JetBrains Mono*), aksen mikro monospaced, serta performa tinggi berbasis **Next.js 16 App Router** dan **React 19**.

Selain menyajikan showcase proyek dan riwayat karir secara interaktif, portofolio ini terintegrasi langsung dengan **GitHub API** untuk menampilkan data kontribusi live, matriks heatmap aktivitas tahunan, dan repositori publik secara real-time.

---

## ✨ Fitur Utama

- 📐 **Swiss Editorial Design System**: Grid asimetris presisi, hairline borders, micro-badges, dan hierarki visual bersih tanpa dekorasi berlebih (*anti-slop*).
- 🌊 **Inertial Smooth Scrolling**: Pengalaman scrolling mulus menggunakan engine **Lenis** yang dioptimasi via custom React context provider.
- 🐙 **Live GitHub Activity & Heatmap**:
  - Pengambilan data kontribusi dinamis dari GitHub API dengan fallback data matriks kurasi.
  - Visualisasi kontribusi 52 minggu (Heatmap Grid) dengan tooltip statistik.
  - Ringkasan komit total, streak aktivitas terpanjang, dan bahasa pemrograman dominan.
- 💼 **Interactive Project Showcase & Modal**:
  - Kartu proyek dengan thumbnail resolusi tinggi dan meta tags teknis.
  - Modal detail interaktif lengkap dengan deskripsi arsitektur dan link preview.
  - Lock scroll handler otomatis saat modal aktif.
- ⏱️ **Live Local Clock**: Jam real-time akurat penunjuk zona waktu lokal (`Asia/Jakarta / WIB`) dengan indikator status availability.
- 📋 **Seamless Interaction**: Tombol salin email instan satu kali klik dengan feedback notifikasi dinamis (`useClipboard`).
- 📱 **Adaptive Mobile Drawer**: Navigasi responsif dengan gestur drawer halus untuk perangkat layar kecil.

---

## 📦 Modul & Dependensi yang Digunakan

Berikut adalah daftar lengkap modul, pustaka, dan dependensi yang digunakan dalam proyek ini beserta fungsinya masing-masing:

### 1. Core Framework & Runtime

| Modul / Paket | Versi | Peran & Deskripsi Penggunaan |
| :--- | :---: | :--- |
| **`next`** | `16.4.5` | Framework React modern generasi terbaru dengan arsitektur **App Router**, Turbopack engine, React Server Components (RSC), dan Route Handlers API. |
| **`react`** | `19.3.0` | Library utama pembangunan antarmuka berbasis komponen deklaratif, hooks, serta concurrent rendering. |
| **`react-dom`** | `19.3.0` | Adapter rendering React khusus untuk Document Object Model (DOM) browser. |
| **`typescript`** | `^5` | Bahasa pemrograman bertipe statis untuk menjamin type-safety, DX optimal, dan skalabilitas kode. |

### 2. Styling, Layout & Animasi

| Modul / Paket | Versi | Peran & Deskripsi Penggunaan |
| :--- | :---: | :--- |
| **`tailwindcss`** | `^4` | Utility-first CSS framework v4 dengan engine berkecepatan tinggi tanpa overhead konfigurasi rumit. |
| **`@tailwindcss/turbopack`** | `^4` | Plugin resmi Tailwind untuk integrasi native kompilasi instan dengan Next.js Turbopack. |
| **`lenis`** | `^1.3.27` | Engine smooth scroll modern berbasis momentum/inersia yang ringan dan responsif pada desktop maupun touch device. |
| **`framer-motion`** | `^14.9.1` | Pustaka animasi deklaratif untuk transisi halaman, modal, interaksi kartu, dan efek hover mikro. |
| **`gsap`** | `^3.15.1` | GreenSock Animation Platform untuk manipulasi timeline animasi presisi dan performa tinggi. |
| **`@gsap/react`** | `^2.1.2` | Wrapper resmi integrasi lifecycle GSAP dengan React hooks (`useGSAP`). |

### 3. Data Management & Utilities

| Modul / Paket | Versi | Peran & Deskripsi Penggunaan |
| :--- | :---: | :--- |
| **`@tanstack/redact`** | `^0.3.1` | Utility library dari TanStack suite untuk manajemen dan pemrosesan data terstruktur secara aman. |
| **`react-icons`** | `^5.7.0` | Kumpulan icon SVG lengkap mencakup Simple Icons, Feather Icons, dan Lucide Icons untuk tombol, link sosial, dan indikator. |
| **`clsx`** | `^2.1.1` | Utilitas ultra-ringan untuk merangkai nama kelas CSS bersyarat (*conditional classNames*). |
| **`tailwind-merge`** | `^3.7.0` | Helper untuk menggabungkan class Tailwind CSS tanpa konflik prioritas (digabungkan bersama `clsx` dalam helper `cn()`). |

### 4. Developer Tools & Code Quality

| Modul / Paket | Versi | Peran & Deskripsi Penggunaan |
| :--- | :---: | :--- |
| **`eslint`** | `^9` | Linter JavaScript/TypeScript generasi 9 untuk menjaga standar, konsistensi, dan kebersihan kode. |
| **`eslint-config-next`** | `16.4.5` | Konfigurasi rules linting khusus Next.js untuk kepatuhan best practice App Router dan Core Web Vitals. |
| **`@types/node`** | `^20` | Definisi tipe statis TypeScript untuk lingkungan runtime Node.js. |
| **`@types/react`** | `^19` | Definisi tipe TypeScript untuk React 19 API, hooks, dan JSX components. |
| **`@types/react-dom`** | `^19` | Definisi tipe TypeScript untuk DOM renderer React. |

---

## 🏛️ Struktur Arsitektur Proyek

Berikut adalah gambaran hierarki dan organisasi folder di dalam direktori `src/`:

```
wildev-portfolio/
├── public/                     # Aset statis publik (favicon, SVG, media)
├── src/
│   ├── app/                    # Next.js 16 App Router
│   │   ├── api/                # API Route Handlers
│   │   │   └── github-activity/# Endpoint proxy data aktivitas GitHub
│   │   ├── favicon.ico         # Favicon aplikasi
│   │   ├── globals.css         # Styling global, font variables, & utilitas Tailwind v4
│   │   ├── layout.tsx          # Root Layout (Fonts, Metadata, Provider, Header & Footer)
│   │   └── page.tsx            # Halaman utama portofolio (Server Component)
│   ├── components/
│   │   ├── layout/             # Komponen struktural (Header, Footer, MobileDrawer)
│   │   ├── sections/           # Section utama satu halaman:
│   │   │   ├── HeroSection.tsx         # Headline editorial & status ringkas
│   │   │   ├── AboutSection.tsx        # Narasi bio & filosofi engineering
│   │   │   ├── SelectedWorksSection.tsx# Grid karya terpilih & modal trigger
│   │   │   ├── TechStackSection.tsx    # 4 pilar arsitektur keahlian teknis
│   │   │   ├── ActivitySection.tsx     # Heatmap GitHub & repository showcase
│   │   │   ├── ExperienceSection.tsx   # Riwayat profesional & pendidikan
│   │   │   └── ConnectSection.tsx      # Kanal kontak & copy email
│   │   └── ui/                 # Komponen UI modular:
│   │       ├── CopyEmailButton.tsx     # Tombol interaktif salin email
│   │       ├── ExperienceRow.tsx       # Baris expandable riwayat kerja
│   │       ├── HeatmapGrid.tsx         # Grid visualisasi kontribusi GitHub 52 minggu
│   │       ├── LiveClock.tsx           # Jam zona waktu Asia/Jakarta real-time
│   │       ├── ProjectArchiveTable.tsx # Tabel arsip proyek tambahan
│   │       ├── ProjectCard.tsx         # Kartu display proyek
│   │       ├── ProjectModal.tsx        # Modal overlay detail proyek
│   │       ├── RepositoryCard.tsx      # Kartu info repositori GitHub
│   │       ├── SectionHeader.tsx       # Header standar penomoran section
│   │       └── TechPillarCard.tsx      # Kartu pilar tech stack
│   ├── data/                   # Data statis & fallback konten kurasi
│   │   ├── contribution-matrix.ts      # Matriks kontribusi fallback 365 hari
│   │   ├── experience.ts               # Data riwayat karir
│   │   ├── projects.ts                 # Data daftar proyek & screenshot
│   │   ├── repositories.ts             # Data fallback repositori GitHub
│   │   └── tech-stack.ts               # Data 4 pilar spesialisasi teknis
│   ├── hooks/                  # Custom React Hooks
│   │   ├── useClipboard.ts             # Hook helper salin teks dengan timeout state
│   │   ├── useLiveClock.ts             # Hook live interval jam lokal
│   │   └── useLockScroll.ts            # Hook pengunci scroll body saat modal terbuka
│   ├── lib/                    # Utilitas umum & konektor eksternal
│   │   ├── github.ts                   # Fetcher GitHub REST API & transformer data
│   │   └── utils.ts                    # Helper utility (cn / clsx + tailwind-merge)
│   ├── providers/              # Context Providers
│   │   └── SmoothScrollProvider.tsx    # Provider inisialisasi Lenis Smooth Scroll
│   └── types/                  # Definisi antarmuka TypeScript
│       └── portfolio.ts                # Model data Project, TechPillar, GitHubStats, dll
├── package.json                # Manifest dependensi & script proyek
├── tsconfig.json               # Konfigurasi compiler TypeScript
└── README.md                   # Dokumentasi proyek
```

---

## 🚀 Panduan Instalasi & Memulai

### Prasyarat

Pastikan lingkungan lokal Anda telah terpasang:
- **Node.js**: `v20.x` atau lebih baru
- **Package Manager**: `npm`, `pnpm`, atau `bun`

### 1. Kloning Repositori

```bash
git clone https://github.com/wildanrizkii/wildev.git
cd wildev
```

### 2. Instalasi Dependensi

```bash
npm install
# atau
pnpm install
# atau
bun install
```

### 3. Konfigurasi Variabel Lingkungan (Opsional)

Buat file `.env.local` di root direktori untuk mengaktifkan sinkronisasi otomatis data akun GitHub Anda:

```env
# Username akun GitHub untuk data live activity
NEXT_PUBLIC_GITHUB_USERNAME=wildanrizkii

# Personal Access Token GitHub (Opsional, untuk menaikkan rate-limit API)
GITHUB_TOKEN=ghp_yourPersonalAccessTokenHere
```

> **Catatan:** Jika environment variable tidak diset, aplikasi secara otomatis menggunakan data fallback kurasi yang tersedia di `src/data/`.

### 4. Menjalankan Server Development

```bash
npm run dev
```

Buka peramban Anda di **[http://localhost:3000](http://localhost:3000)** untuk melihat antarmuka portofolio.

---

## 🛠️ Perintah Scripts

| Perintah | Deskripsi |
| :--- | :--- |
| `npm run dev` | Menjalankan Next.js development server dengan integrasi Turbopack cepat. |
| `npm run build` | Melakukan kompilasi dan optimasi bundle produksi (*production build*). |
| `npm run start` | Menjalankan server aplikasi Next.js dalam mode produksi setelah build. |
| `npm run lint` | Menjalankan ESLint untuk memeriksa kepatuhan dan kebersihan kode. |

---

## 🎨 Filosofi Desain & Tipografi

Desain portofolio ini menganut prinsip **Swiss Style** (International Typographic Style):
- **Palet Warna Netral**: Latar kanvas hangat (`#EDECEB`), teks dominan `#1A1918`, serta border tipis `#D4D2CE`.
- **Tipografi Harmonis**:
  - **Inter**: Sans-serif netral untuk keterbacaan tinggi pada body text dan subheader.
  - **JetBrains Mono**: Monospace presisi untuk metadata, label penomoran section (`01 / 06`), status badge, dan koordinat teknis.
- **Micro-Interactions**: Animasi transisi subtle via Framer Motion dan momentum scrolling dari Lenis yang tidak mendistraksi pembaca.

---

## 👨‍💻 Profil & Pengembang

Dikembangkan dan dirawat dengan penuh perhatian oleh **Wildan Rizki (WILDev.)**.

- **GitHub**: [@wildanrizkii](https://github.com/wildanrizkii)
- **Website**: [wildev.my.id](https://wildev.my.id) *(atau domain portofolio terkait)*
- **Fokus**: Full-Stack Web Development, High-Performance Systems, UI/UX Engineering.

---

## 📄 Lisensi

Proyek ini dirilis di bawah lisensi pribadi / [MIT License](LICENSE) *(silakan disesuaikan dengan kebutuhan lisensi Anda)*.

<div align="center">
  <small>© 2026 WILDev. Dirancang dengan presisi & standar rekayasa perangkat lunak modern.</small>
</div>

