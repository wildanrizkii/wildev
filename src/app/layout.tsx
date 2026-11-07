import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SmoothScrollProvider from "@/providers/SmoothScrollProvider";
import { ThemeProvider } from "@/providers/ThemeProvider";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#EDECEB" },
    { media: "(prefers-color-scheme: dark)", color: "#121211" },
  ],
};

export const metadata: Metadata = {
  title: "WILDev. — Software Developer & Product Builder",
  description:
    "Personal portfolio of WILDev. Software developer and product builder based in Indonesia. Swiss editorial layout, thoughtful engineering.",
  keywords: [
    "Software Developer",
    "Product Builder",
    "Full-Stack Engineer",
    "Next.js",
    "NestJS",
    "TypeScript",
    "Indonesia",
    "WILDev.",
  ],
  authors: [{ name: "WILDev." }],
  openGraph: {
    title: "WILDev. — Software Developer & Product Builder",
    description:
      "Full-stack developer focused on robust architecture, clean systems, and high-performance interactive experiences.",
    type: "website",
    locale: "en_US",
  },
};

const themeInitScript = `(function(){try{var k='wildev-theme',s=localStorage.getItem(k),d=window.matchMedia('(prefers-color-scheme: dark)').matches;var dark=s==='dark'||(!s&&d)||(s==='system'&&d);var r=document.documentElement;if(dark){r.classList.add('dark');r.setAttribute('data-theme','dark');r.style.colorScheme='dark';}else{r.classList.remove('dark');r.setAttribute('data-theme','light');r.style.colorScheme='light';}}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="bg-canvas text-primary selection:bg-primary selection:text-canvas min-h-screen flex flex-col font-sans">
        <ThemeProvider>
          <SmoothScrollProvider>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
