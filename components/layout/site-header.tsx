	"use client";
	import Link from "next/link";
	import { motion } from "framer-motion";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#case-studies", label: "Case Studies" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-zinc-800/80 bg-black/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <motion.div
            className="h-8 w-8 rounded-xl bg-gradient-to-br from-zinc-100 via-zinc-400 to-zinc-900 shadow-lg shadow-zinc-900/50"
            whileHover={{ rotate: 6, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
          />
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold tracking-tight text-zinc-100">
              Karthikeyan M
            </span>
            <span className="text-xs text-zinc-400">
              Backend & Systems Engineer
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-xs font-medium text-zinc-300 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative transition-colors hover:text-zinc-100"
            >
              <span>{item.label}</span>
              <span className="absolute inset-x-0 -bottom-1 h-px origin-left scale-x-0 bg-zinc-500 transition-transform duration-200 ease-out group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <motion.a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/80 px-4 py-1.5 text-[11px] font-medium text-zinc-100 shadow-sm shadow-zinc-900/60 transition hover:border-zinc-400 hover:bg-zinc-900"
          whileHover={{ y: -2 }}
        >
          <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(74,222,128,0.9)]" />
          Open for projects
        </motion.a>
      </div>
    </header>
  );
}

