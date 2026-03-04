"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const navItems = [
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/80 backdrop-blur dark:border-slate-800/70 dark:bg-slate-950/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <motion.div
            className="h-9 w-9 rounded-xl bg-gradient-to-br from-emerald-500 via-teal-500 to-slate-800 shadow-lg shadow-emerald-500/20"
            whileHover={{ rotate: 8, scale: 1.04 }}
            transition={{ type: "spring", stiffness: 260, damping: 16 }}
          />
          <div className="leading-tight">
            <p className="text-sm font-semibold tracking-tight text-slate-900 dark:text-slate-100">
              Karthikeyan M
            </p>
            <p className="text-xs text-slate-600 dark:text-slate-400">Systems Engineer</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex dark:text-slate-300">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-emerald-600 dark:hover:text-emerald-300">
              {item.label}
            </a>
          ))}
        </nav>

        <motion.a
          href="#contact"
          whileHover={{ y: -1 }}
          className="inline-flex items-center rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white shadow-md shadow-slate-900/20 transition hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
        >
          Book intro call
        </motion.a>
      </div>
    </header>
  );
}
