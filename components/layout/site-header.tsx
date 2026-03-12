"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const navItems = [
  { href: "#solutions", label: "Solutions" },
  { href: "#use-cases", label: "Industry Use Cases" },
  { href: "#modules", label: "Software Modules" },
  { href: "#infrastructure", label: "Infrastructure" },
  { href: "#automation", label: "AI Automation" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-950/80">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-10">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <Image src="/logo-mark.svg" alt="Pari Labs logo" width={38} height={38} priority className="shrink-0" />
          <div className="leading-tight">
            <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Pari Labs</p>
            <p className="text-xs text-slate-600 dark:text-slate-400">AI Software & Business Automation</p>
          </div>
        </Link>

        <nav className="hidden h-full items-center gap-7 text-sm font-medium text-slate-700 lg:flex dark:text-slate-300">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="inline-flex h-full items-center transition hover:text-emerald-600 dark:hover:text-emerald-300">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />
          <a href="#contact" className="hidden rounded-full bg-emerald-600 px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-emerald-600/20 transition hover:bg-emerald-500 sm:inline-flex">
            Request Consultation
          </a>
          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300/80 text-slate-700 lg:hidden dark:border-slate-700 dark:text-slate-200"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="border-t border-slate-200/80 bg-white/95 px-4 py-3 lg:hidden dark:border-slate-800 dark:bg-slate-950/95"
          >
            <div className="mx-auto grid max-w-7xl gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-emerald-50 hover:text-emerald-700 dark:text-slate-300 dark:hover:bg-slate-900 dark:hover:text-emerald-300"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-1 inline-flex items-center justify-center rounded-full bg-emerald-600 px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-emerald-600/20 transition hover:bg-emerald-500"
              >
                Request Consultation
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
