"use client";

import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";
import CopyEmailButton from "@/components/ui/CopyEmailButton";
import LiveClock from "@/components/ui/LiveClock";

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/wildanrizkii",
    icon: FiGithub,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/wildanrizkii",
    icon: FiLinkedin,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/wildanrizkii",
    icon: FiInstagram,
  },
  {
    name: "Direct Mail Client",
    url: "mailto:wildanrizki9560@gmail.com",
    icon: FiMail,
  },
];

export default function ConnectSection() {
  const email = "wildanrizki9560@gmail.com";

  return (
    <section
      id="connect"
      className="max-w-7xl mx-auto px-6 sm:px-8 py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className="text-xs font-mono-tech uppercase tracking-widest text-secondary mb-4"
      >
        06 / CONNECT
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Direct Inquiry Box */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7"
        >
          <h2 className="text-4xl sm:text-6xl font-medium tracking-tightest text-primary leading-[1.05]">
            Good things start with a conversation.
          </h2>
          <p className="mt-6 text-base text-secondary max-w-xl font-normal leading-relaxed">
            Whether you have an upcoming project, a challenging architectural
            problem, or an exciting full-time or fractional role, my inbox is
            open.
          </p>

          {/* Direct Inquiry Box */}
          <div className="mt-10 p-6 sm:p-8 bg-surface/60 border border-borderline w-full max-w-xl">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-borderline/70">
              <span className="text-xs font-mono-tech uppercase tracking-wider text-secondary">
                Direct Inquiry
              </span>
              <span className="text-[11px] font-mono-tech text-secondary">
                Typical response &lt; 24h
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-mono-tech font-semibold tracking-tight text-primary">
              Start a conversation
            </h3>
            <p className="mt-1.5 text-xs text-secondary font-mono-tech leading-relaxed">
              Available for full-time engineering, contracts &amp; technical advisory.
            </p>

            <div className="mt-6 pt-5 border-t border-borderline/70 grid grid-cols-2 gap-2.5 sm:gap-3 items-center">
              <a
                href={`mailto:${email}`}
                className="h-11 px-2.5 sm:px-5 text-[11px] sm:text-xs font-mono-tech uppercase tracking-wider border border-primary bg-primary text-canvas hover:bg-transparent hover:text-primary transition-colors inline-flex items-center justify-center gap-1.5 sm:gap-2 focus:outline-none focus-visible:ring-1 focus-visible:ring-primary w-full whitespace-nowrap"
              >
                <FiMail className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                <span>Send Email</span>
                <FiArrowUpRight className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
              </a>
              <CopyEmailButton email={email} className="w-full" />
            </div>
          </div>
        </motion.div>

        {/* Right Column: Social Index & Directories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="lg:col-span-5 space-y-6 lg:pt-4"
        >
          <div className="text-xs font-mono-tech uppercase tracking-widest text-primary pb-2 border-b border-borderline">
            Social &amp; Networks
          </div>

          <ul className="divide-y divide-borderline">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <li key={social.name}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-h-11 py-3.5 flex items-center justify-between group text-sm font-medium text-primary hover:text-secondary transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-primary"
                  >
                    <span className="inline-flex items-center gap-2.5">
                      <Icon className="w-4 h-4 text-secondary group-hover:text-primary transition-colors" aria-hidden="true" />
                      <span>{social.name}</span>
                    </span>
                    <FiArrowUpRight
                      className="w-4 h-4 text-secondary group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="pt-6 border-t border-borderline/60">
            <span className="text-xs font-mono-tech text-secondary block">
              Current Location
            </span>
            <div className="mt-1 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <p className="text-sm font-medium text-primary">
                Bandung, West Java, Indonesia
              </p>
              <LiveClock />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
