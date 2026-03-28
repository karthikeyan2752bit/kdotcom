"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const desktopNavItems: Array<{ href: string; label: string }> = [
  { href: "#solutions", label: "Solutions" },
  { href: "#industries", label: "Industries" },
  { href: "#how-we-work", label: "How It Works" },
  { href: "#contact", label: "Contact" },
];

const mobileNavItems: Array<{ href: string; label: string }> = [
  { href: "#solutions", label: "Solutions" },
  { href: "#industries", label: "Industry Use Cases" },
  { href: "#modules", label: "Software Modules" },
  { href: "#infrastructure", label: "Infrastructure" },
  { href: "#automation", label: "AI Automation" },
  { href: "#how-we-work", label: "Process" },
  { href: "#contact", label: "Contact" },
  { href: "#contact", label: "Request Consultation" },
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

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    const onChange = () => {
      if (media.matches) setIsOpen(false);
    };
    onChange();
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isOpen);
    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-slate-200/65 transition-all duration-300 ${
        isScrolled
          ? "bg-white/70 shadow-[0_14px_32px_-18px_rgba(15,23,42,0.35)] backdrop-blur-[10px]"
          : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      <div className="nav-container mx-auto hidden h-[4.5rem] w-full max-w-7xl items-center justify-between px-4 sm:px-6 md:flex lg:px-8">
        <div className="flex min-w-0 items-center">
          <Link
            href="/"
            aria-label="Pari Labs homepage"
            className="relative inline-flex items-center rounded-md p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]/40"
          >
            <span className="navbar-logo relative block h-9 w-[168px] overflow-hidden">
              <Image src="/media/logonew.png" alt="Pari Labs logo" width={328} height={72} priority className="logo-image" />
            </span>
          </Link>
        </div>

        <nav className="nav-links hidden items-center xl:flex" aria-label="Primary">
          {desktopNavItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative inline-flex h-11 items-center whitespace-nowrap rounded-md px-3 text-[0.95rem] font-medium leading-none tracking-[0.01em] text-[var(--color-secondary)] transition-all duration-200 hover:text-[var(--color-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]/40"
            >
              <span>{item.label}</span>
              <span className="absolute inset-x-3 bottom-1 h-0.5 origin-left scale-x-0 rounded-full bg-current opacity-70 transition-transform duration-200 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <div className="nav-right ml-auto flex items-center justify-end">
          <button
            type="button"
            aria-label="Search"
            className="hidden h-10 w-10 items-center justify-center rounded-md text-[var(--color-secondary)] transition-all duration-200 hover:bg-white hover:text-[var(--color-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]/40 lg:inline-flex"
          >
            <SearchIcon />
          </button>

          <button
            type="button"
            className="hidden h-10 items-center gap-1 rounded-md px-3 text-sm font-medium leading-none tracking-[0.01em] text-[var(--color-secondary)] transition-all duration-200 hover:bg-white hover:text-[var(--color-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]/40 lg:inline-flex"
          >
            EN
            <ChevronDownIcon />
          </button>

          <a
            href="#contact"
            className="inline-flex h-11 items-center rounded-xl bg-[var(--color-accent)] px-4 text-sm font-semibold leading-none tracking-[0.01em] text-[var(--color-button-text)] shadow-lg shadow-emerald-600/20 transition-all duration-200 hover:scale-[1.02] hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]/60 sm:px-5"
          >
            <span className="hidden md:inline">Request Consultation</span>
            <span className="md:hidden">Consult</span>
          </a>

        </div>
      </div>

      <div className="mx-auto flex h-[4.25rem] w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 md:hidden">
        <Link
          href="/"
          aria-label="Pari Labs homepage"
          className="relative inline-flex min-w-0 flex-1 items-center rounded-md py-1 pr-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]/40"
        >
          <span className="navbar-logo relative block h-8 w-[142px] max-w-full overflow-hidden">
            <Image src="/media/logonew.png" alt="Pari Labs logo" width={328} height={72} priority className="logo-image logo-image-mobile" />
          </span>
        </Link>

        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-300/80 text-lg text-[var(--color-secondary)] transition-colors hover:bg-white"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] bg-white md:hidden"
          >
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.26, ease: "easeOut" }}
              className="flex h-full flex-col overflow-y-auto px-6 pb-8 pt-5"
              aria-label="Mobile"
            >
              <div className="mb-8 flex items-center justify-between">
                <Link href="/" onClick={() => setIsOpen(false)} aria-label="Pari Labs homepage" className="relative inline-flex items-center rounded-md p-1">
                  <span className="navbar-logo relative block h-8 w-[142px] overflow-hidden">
                    <Image src="/media/logonew.png" alt="Pari Labs logo" width={328} height={72} priority className="logo-image logo-image-mobile" />
                  </span>
                </Link>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-300/80 text-lg text-[var(--color-secondary)] transition-colors hover:bg-slate-50"
                  aria-label="Close navigation menu"
                >
                  ✕
                </button>
              </div>

              <div className="grid w-full gap-2">
              {mobileNavItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="w-full rounded-xl px-4 py-4 text-xl font-semibold text-[var(--color-text-primary)] transition-colors hover:bg-slate-50 hover:text-[var(--color-accent)]"
                >
                  {item.label}
                </a>
              ))}
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
