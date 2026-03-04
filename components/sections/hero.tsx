"use client";

import { motion } from "framer-motion";

const metrics = [
  { label: "API Platforms", value: "50+" },
  { label: "Automation Flows", value: "120+" },
  { label: "Uptime Focus", value: "99.9%" },
];

export function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-28 top-8 h-72 w-72 rounded-full bg-emerald-300/30 blur-3xl dark:bg-emerald-500/10" />
        <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-teal-300/30 blur-3xl dark:bg-teal-500/10" />
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:px-8 lg:py-28">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
          <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-100/60 px-3 py-1 text-xs font-semibold text-emerald-700 dark:border-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300">
            Enterprise-grade backend engineering
          </span>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-slate-50">
            Build reliable systems that scale like a SaaS product.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            I help teams design, ship, and harden backend platforms with strong observability, predictable deployments, and automation-first operations.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#contact" className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 transition hover:-translate-y-0.5 hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200">
              Start a project
            </a>
            <a href="#projects" className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-emerald-400 hover:text-emerald-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-emerald-500 dark:hover:text-emerald-300">
              View case work
            </a>
          </div>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-xl shadow-slate-200/50 backdrop-blur dark:border-slate-800 dark:bg-slate-900/80 dark:shadow-black/30"
        >
          <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Systems impact snapshot</p>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Delivery designed for reliability, speed, and enterprise trust.</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {metrics.map((metric) => (
              <div key={metric.label} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950">
                <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">{metric.label}</p>
                <p className="mt-1 text-2xl font-semibold text-slate-900 dark:text-slate-100">{metric.value}</p>
              </div>
            ))}
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
