"use client";

import { motion, type Transition } from "framer-motion";

const stats = [
  { label: "Automation hours saved", value: "18k+/month" },
  { label: "Business systems delivered", value: "60+" },
  { label: "Platform uptime target", value: "99.95%" },
];

const spring: Transition = { type: "spring", stiffness: 90, damping: 18 };

export function HeroSection() {
  return (
    <section id="hero" className="relative mx-auto grid min-h-screen max-w-7xl snap-start scroll-mt-24 items-center gap-14 px-6 pb-20 pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:pt-28">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
        <span className="inline-flex rounded-full border border-emerald-600/25 bg-emerald-600/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
          SaaS Platforms • Backend Systems • Automation
        </span>
        <h1 className="mt-7 text-5xl font-bold tracking-tight text-slate-100 sm:text-6xl lg:text-7xl">
          AI-powered business software and automation platforms built for modern organizations.
        </h1>
        <p className="mt-7 max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl">
          Pari Labs builds reliable software platforms, automation systems, and SaaS solutions that help organizations run and scale operations efficiently.
        </p>
        <p className="mt-4 max-w-2xl text-base text-slate-300">
          Our engineering team works with business owners and operations leaders to design practical systems that reduce manual work, improve visibility, and support growth.
        </p>
        <div className="mt-9 flex flex-wrap gap-4">
          <a href="#contact" className="rounded-full bg-emerald-600 px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-emerald-500/20 transition hover:-translate-y-0.5">
            Request Consultation
          </a>
          <a href="#solutions" className="rounded-full border border-slate-600/80 bg-white/95 dark:bg-slate-900 px-7 py-3.5 text-sm font-semibold text-slate-100 transition hover:border-cyan-400 hover:text-cyan-200">
            Explore Solutions
          </a>
        </div>
      </motion.div>

      <motion.aside
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.55, delay: 0.1 }}
        className="rounded-3xl border border-slate-700/80 bg-white/95 dark:bg-slate-900 p-6 shadow-2xl shadow-slate-950/40"
      >
        <div className="grid gap-3 rounded-2xl border border-cyan-500/25 bg-slate-950/95 p-5 text-slate-100">
          {[
            "Understand your operations and bottlenecks",
            "Design software workflows with clear approvals",
            "Deploy secure systems with monitoring and support",
          ].map((step, index) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ ...spring, delay: index * 0.08 }}
              className="rounded-xl border border-slate-700 bg-slate-900/70 p-3 text-sm"
            >
              <span className="mr-2 rounded bg-cyan-500/20 px-2 py-0.5 text-xs text-cyan-300">Step {index + 1}</span>
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
              className="rounded-2xl border border-slate-700 bg-white/95 dark:bg-slate-900 p-4"
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
