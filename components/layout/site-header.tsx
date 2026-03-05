"use client";

import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const navItems = [
  { href: "#capabilities", label: "Capabilities" },
  { href: "#infrastructure", label: "Infrastructure" },
  { href: "#projects", label: "Case Studies" },
  { href: "#automation", label: "Automation SaaS" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-950/75">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-6 py-4 lg:px-10">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo-mark.svg" alt="Karthikeyan M logo" width={36} height={36} priority />
          <div>
            <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Karthikeyan M</p>
            <p className="text-xs text-slate-600 dark:text-slate-400">Backend Systems Engineer</p>
          </div>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex dark:text-slate-300">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-emerald-600 dark:hover:text-emerald-300">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a href="#contact" className="rounded-full bg-emerald-600 px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-emerald-600/20 transition hover:bg-emerald-500">
            Schedule Intro
          </a>
        </div>
      </div>
    </header>
  );
}
