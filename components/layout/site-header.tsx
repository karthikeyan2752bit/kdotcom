"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const navItems = [
  { href: "#capabilities", label: "Capabilities" },
  { href: "#projects", label: "Projects" },
  { href: "#architecture", label: "Architecture" },
  { href: "#automation", label: "Automation" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/60 bg-white/75 backdrop-blur-xl dark:border-slate-800/70 dark:bg-slate-950/70">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link href="/" className="flex items-center gap-3">
          <motion.div
            className="h-9 w-9 rounded-xl bg-gradient-to-br from-emerald-500 via-cyan-400 to-slate-800"
            whileHover={{ rotate: 8, scale: 1.06 }}
          />
          <div>
            <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Karthikeyan M</p>
            <p className="text-xs text-slate-600 dark:text-slate-400">Backend Systems Engineer</p>
          </div>
        </Link>
        <nav className="hidden items-center gap-7 text-sm font-medium text-slate-700 md:flex dark:text-slate-300">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-emerald-600 dark:hover:text-emerald-300">
              {item.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-cyan-500/20">
          Book Strategy Call
        </a>
      </div>
    </header>
  );
}
