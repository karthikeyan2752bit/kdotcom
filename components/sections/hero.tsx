"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const stats = [
  { label: "Production systems migrated", value: "40+" },
  { label: "Automation jobs/day", value: "250k" },
  { label: "SLA reliability", value: "99.95%" },
];

export function HeroSection() {
  return (
    <section id="hero" className="relative mx-auto grid max-w-7xl gap-14 px-6 pb-20 pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-10 lg:pt-28">
      <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <span className="inline-flex rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-300">
          Backend Systems Engineer • SaaS Infrastructure
        </span>
        <h1 className="mt-7 text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl dark:text-slate-50">
          Architecting resilient SaaS backends with premium operational UX.
        </h1>
        <p className="mt-7 max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl dark:text-slate-300">
          I design cloud-native backend systems, automation pipelines, and reliability platforms that transform complex operations into elegant product experiences.
        </p>
        <div className="mt-9 flex flex-wrap gap-4">
          <a href="#projects" className="rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-emerald-500/20 transition hover:-translate-y-1">
            Explore Work
          </a>
          <a href="#contact" className="rounded-full border border-slate-300/80 bg-white/80 px-7 py-3.5 text-sm font-semibold text-slate-700 backdrop-blur transition hover:border-cyan-400 hover:text-cyan-700 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200 dark:hover:border-cyan-500 dark:hover:text-cyan-300">
            Let&apos;s Build
          </a>
        </div>
      </motion.div>

      <motion.aside
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="rounded-3xl border border-white/40 bg-white/70 p-6 shadow-2xl shadow-cyan-900/10 backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-900/70"
      >
        <div className="relative overflow-hidden rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-slate-950 to-slate-900 p-5 text-slate-100">
          <Image src="/infrastructure-diagram.svg" alt="Cloud infrastructure architecture diagram" width={720} height={380} className="h-auto w-full opacity-90" priority />
        </div>
        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 4 + index, repeat: Infinity, ease: "easeInOut" }}
              className="rounded-2xl border border-slate-200/80 bg-white/80 p-4 dark:border-slate-700 dark:bg-slate-900"
            >
              <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">{stat.label}</p>
              <p className="mt-1 text-2xl font-semibold text-slate-900 dark:text-slate-100">{stat.value}</p>
            </motion.div>
          ))}
        </div>
      </motion.aside>
    </section>
  );
}
