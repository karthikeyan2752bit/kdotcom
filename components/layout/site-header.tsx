"use client";

import { useEffect, useState } from "react";
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
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl transition-all duration-300 dark:border-slate-800/80 dark:bg-slate-950/75 ${
        isScrolled ? "shadow-sm shadow-slate-900/5 dark:shadow-black/20" : ""
      }`}
    >
      <div className="mx-auto grid h-20 max-w-7xl grid-cols-[1fr_auto] items-center gap-3 px-5 sm:px-6 lg:grid-cols-3 lg:px-10">
        <Link href="/" className="inline-flex items-center gap-3 self-center">
          <Image src="/logo-mark.svg" alt="Pari Labs logo" width={36} height={36} priority className="h-9 w-9" />
          <div className="space-y-0.5 leading-tight">
            <p className="text-[0.95rem] font-semibold tracking-[-0.01em] text-slate-900 dark:text-slate-100">Pari Labs</p>
            <p className="text-xs tracking-[0.01em] text-slate-600 dark:text-slate-400">AI Software & Business Automation</p>
          </div>
        </Link>

        <nav className="hidden items-center justify-center gap-7 text-[0.95rem] font-medium leading-none tracking-[0.01em] text-slate-700 lg:flex dark:text-slate-300">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative inline-flex h-11 items-center px-1 transition-colors duration-200 hover:text-emerald-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/50 dark:hover:text-emerald-300"
            >
              {item.label}
              <span className="absolute inset-x-1 bottom-2 h-px origin-left scale-x-0 bg-current opacity-70 transition-transform duration-200 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-2 sm:gap-3">
          <ThemeToggle />
          <a
            href="#contact"
            className="hidden h-11 items-center rounded-xl bg-emerald-600 px-5 text-sm font-semibold tracking-[0.01em] text-white shadow-lg shadow-emerald-600/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-emerald-500 hover:shadow-emerald-600/30 lg:inline-flex"
          >
            Request Consultation
          </a>
          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-300/80 text-lg text-slate-700 transition-colors hover:bg-slate-100 lg:hidden dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-900"
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
            className="border-t border-slate-200/80 bg-white/95 px-4 pb-4 pt-3 backdrop-blur-xl lg:hidden dark:border-slate-800 dark:bg-slate-950/95"
          >
            <div className="mx-auto grid max-w-7xl gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium tracking-[0.01em] text-slate-700 transition hover:bg-emerald-50 hover:text-emerald-700 dark:text-slate-300 dark:hover:bg-slate-900 dark:hover:text-emerald-300"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-2 inline-flex h-11 items-center justify-center rounded-xl bg-emerald-600 px-4 text-sm font-semibold tracking-[0.01em] text-white shadow-lg shadow-emerald-600/20 transition hover:bg-emerald-500"
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
