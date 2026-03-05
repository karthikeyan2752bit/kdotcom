"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "Backend platforms delivered", value: "40+" },
  { label: "Automation runs/day", value: "250k" },
  { label: "System uptime", value: "99.95%" },
];

const spring = { type: "spring" as const, stiffness: 90, damping: 18 };

export function HeroSection() {
  return (
    <section id="hero" className="relative mx-auto grid max-w-7xl gap-14 px-6 pb-20 pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-10 lg:pt-28">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
        <span className="inline-flex rounded-full border border-emerald-600/25 bg-emerald-600/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-300">
          Backend Systems • SaaS Infrastructure • Automation
        </span>
        <h1 className="mt-7 text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl dark:text-slate-50">
          Building reliable backend systems and automation platforms for modern SaaS teams.
        </h1>
        <p className="mt-7 max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl dark:text-slate-300">
          I help product and operations teams ship dependable APIs, infrastructure, and workflow automation that scale without increasing operational overhead.
        </p>
        <p className="mt-4 max-w-2xl text-base text-slate-600 dark:text-slate-300">
          Over 4 years of hands-on delivery across backend systems and automation services in production environments.
        </p>
        <div className="mt-9 flex flex-wrap gap-4">
          <a href="#projects" className="rounded-full bg-emerald-600 px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-emerald-500/20 transition hover:-translate-y-0.5">
            View Case Studies
          </a>
          <a href="#contact" className="rounded-full border border-slate-300/80 bg-white/80 px-7 py-3.5 text-sm font-semibold text-slate-700 backdrop-blur transition hover:border-emerald-400 hover:text-emerald-700 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200 dark:hover:border-emerald-500 dark:hover:text-emerald-300">
            Discuss Your Platform
          </a>
        </div>
      </motion.div>

      <motion.aside
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.55, delay: 0.1 }}
        className="rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-2xl shadow-slate-300/20 backdrop-blur dark:border-slate-700/60 dark:bg-slate-900/70"
      >
        <div className="grid gap-3 rounded-2xl border border-emerald-500/20 bg-slate-950/95 p-5 text-slate-100">
          {[
            "Customer events reach API gateway",
            "Workflows route to queue and workers",
            "Services update systems and send alerts",
          ].map((step, index) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ ...spring, delay: index * 0.08 }}
              className="rounded-xl border border-slate-700 bg-slate-900/70 p-3 text-sm"
            >
              <span className="mr-2 rounded bg-emerald-500/20 px-2 py-0.5 text-xs text-emerald-300">Step {index + 1}</span>
              {step}
            </motion.div>
          ))}
        </div>
        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ y: -4 }}
              transition={{ ...spring, delay: index * 0.03 }}
              className="rounded-2xl border border-slate-200/80 bg-white/90 p-4 dark:border-slate-700 dark:bg-slate-900"
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
