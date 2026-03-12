"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const navItems = [
  { href: "#solutions", label: "Solutions", hasDropdown: true },
  { href: "#use-cases", label: "Industry Use Cases", hasDropdown: true },
  { href: "#modules", label: "Software Modules" },
  { href: "#infrastructure", label: "Infrastructure" },
  { href: "#automation", label: "AI Automation" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4.5 w-4.5">
      <path
        d="M11 4a7 7 0 1 0 4.42 12.43l3.57 3.57a1 1 0 0 0 1.42-1.41l-3.57-3.58A7 7 0 0 0 11 4Zm0 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ChevronDownIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" className="h-4 w-4 opacity-70">
      <path d="M5.2 7.6a.75.75 0 0 1 1.06 0L10 11.34l3.74-3.74a.75.75 0 1 1 1.06 1.06l-4.27 4.27a.75.75 0 0 1-1.06 0L5.2 8.66a.75.75 0 0 1 0-1.06Z" fill="currentColor" />
    </svg>
  );
}

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
      className={`sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl transition-all duration-300 dark:border-slate-800/80 dark:bg-slate-950/80 ${
        isScrolled ? "shadow-[0_8px_24px_-14px_rgba(15,23,42,0.25)] dark:shadow-black/35" : ""
      }`}
    >
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex min-w-0 flex-1 items-center">
          <Link href="/" className="inline-flex items-center gap-3 rounded-md px-1 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/50">
            <Image src="/logo-mark.svg" alt="Kdotcom logo" width={36} height={36} priority className="h-9 w-9" />
            <span className="text-base font-semibold tracking-[0.015em] text-slate-900 dark:text-slate-100">Kdotcom</span>
          </Link>
        </div>

        <nav className="hidden items-center justify-center gap-1 lg:flex" aria-label="Primary">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-haspopup={item.hasDropdown ? "menu" : undefined}
              className="group relative inline-flex h-11 items-center gap-1 rounded-md px-3 text-[0.95rem] font-medium leading-none tracking-[0.01em] text-slate-700 transition-colors duration-200 hover:text-emerald-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/50 dark:text-slate-300 dark:hover:text-emerald-300"
            >
              <span>{item.label}</span>
              {item.hasDropdown ? <ChevronDownIcon /> : null}
              <span className="absolute inset-x-3 bottom-1 h-0.5 origin-left scale-x-0 rounded-full bg-current opacity-70 transition-transform duration-200 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <div className="flex flex-1 items-center justify-end gap-1.5 sm:gap-2">
          <button
            type="button"
            aria-label="Search"
            className="hidden h-10 w-10 items-center justify-center rounded-md text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/50 lg:inline-flex dark:text-slate-300 dark:hover:bg-slate-900 dark:hover:text-slate-100"
          >
            <SearchIcon />
          </button>

          <button
            type="button"
            className="hidden h-10 items-center rounded-md px-2.5 text-sm font-medium tracking-[0.01em] text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/50 lg:inline-flex dark:text-slate-300 dark:hover:bg-slate-900 dark:hover:text-slate-100"
          >
            EN
            <ChevronDownIcon />
          </button>

          <ThemeToggle />

          <a
            href="#contact"
            className="hidden h-10 items-center rounded-md px-3 text-sm font-medium tracking-[0.01em] text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/50 lg:inline-flex dark:text-slate-300 dark:hover:bg-slate-900 dark:hover:text-slate-100"
          >
            Sign In
          </a>

          <a
            href="#contact"
            className="inline-flex h-10 items-center rounded-xl bg-emerald-600 px-4 text-sm font-semibold tracking-[0.01em] text-white shadow-lg shadow-emerald-700/20 transition-all duration-200 hover:bg-emerald-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/60 sm:px-5"
          >
            <span className="hidden sm:inline">Request Consultation</span>
            <span className="sm:hidden">Consultation</span>
          </a>

          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-300/80 text-lg text-slate-700 transition-colors hover:bg-slate-100 lg:hidden dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-900"
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
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="border-t border-slate-200/80 bg-white/95 px-4 pb-4 pt-3 backdrop-blur-xl lg:hidden dark:border-slate-800 dark:bg-slate-950/95"
            aria-label="Mobile"
          >
            <div className="mx-auto grid max-w-7xl gap-1.5">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex min-h-11 items-center justify-between rounded-md px-3 py-2 text-sm font-medium tracking-[0.01em] text-slate-700 transition-colors hover:bg-emerald-50 hover:text-emerald-700 dark:text-slate-300 dark:hover:bg-slate-900 dark:hover:text-emerald-300"
                >
                  <span>{item.label}</span>
                  {item.hasDropdown ? <ChevronDownIcon /> : null}
                </a>
              ))}
              <div className="mt-1 grid grid-cols-2 gap-2 border-t border-slate-200/80 pt-3 dark:border-slate-800">
                <button
                  type="button"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-slate-300/80 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-900"
                >
                  Search
                </button>
                <button
                  type="button"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-slate-300/80 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-900"
                >
                  EN
                </button>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
