"use client";

import { motion, type Transition } from "framer-motion";

const stats = [
  { label: "Businesses supported", value: "60+" },
  { label: "Hours of manual work reduced", value: "18k+/month" },
  { label: "Support response time", value: "< 24 hours" },
];

const spring: Transition = { type: "spring", stiffness: 90, damping: 18 };

export function HeroSection() {
  return (
    <section id="hero" className="relative mx-auto grid min-h-screen max-w-7xl snap-start scroll-mt-24 items-center gap-14 px-6 pb-20 pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:pt-28">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
        <span className="inline-flex rounded-full border border-[var(--color-primary)]/20 bg-[var(--color-primary)]/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
          Business Software • Automation • Office IT Setup
        </span>
        <h1 className="mt-7 text-5xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-6xl lg:text-7xl">
          Software and IT systems that run your business better.
        </h1>
        <p className="mt-7 max-w-2xl text-lg leading-relaxed text-[var(--color-text-secondary)] sm:text-xl">
          We build software that automates your daily operations, from billing and inventory to appointments, customer follow-ups, and team workflows.
        </p>
        <p className="mt-4 max-w-2xl text-base text-[var(--color-text-secondary)]">
          Custom solutions for clinics, stores, showrooms, and growing offices that need reliable systems without technical complexity.
        </p>
        <div className="mt-9 flex flex-wrap gap-4">
          <a href="#contact" className="rounded-full bg-[var(--color-accent)] px-7 py-3.5 text-sm font-semibold text-[var(--color-button-text)] shadow-xl shadow-emerald-500/20 transition hover:-translate-y-0.5 hover:bg-emerald-700">
            Talk to us about your business
          </a>
          <a href="#solutions" className="rounded-full border border-[var(--color-primary)]/35 bg-[var(--color-surface)] px-7 py-3.5 text-sm font-semibold text-[var(--color-primary)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]">
            See what we can build for you
          </a>
        </div>
      </motion.div>

      <motion.aside
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.55, delay: 0.1 }}
        className="rounded-3xl border border-slate-200 bg-[var(--color-surface)] p-6 shadow-xl shadow-slate-300/20"
      >
        <div className="grid gap-3 rounded-2xl border border-[var(--color-primary)]/20 bg-[var(--color-bg)] p-5 text-[var(--color-text-primary)]">
          {[
            "We understand how your current operations work",
            "We build software around your exact business process",
            "We launch, train your team, and provide ongoing support",
          ].map((step, index) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ ...spring, delay: index * 0.08 }}
              className="rounded-xl border border-slate-200 bg-[var(--color-surface)] p-3 text-sm"
            >
              <span className="mr-2 rounded bg-[var(--color-primary)]/10 px-2 py-0.5 text-xs text-[var(--color-primary)]">Step {index + 1}</span>
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
              className="rounded-2xl border border-slate-200 bg-[var(--color-surface)] p-4"
            >
              <p className="text-xs uppercase tracking-wide text-[var(--color-text-secondary)]">{stat.label}</p>
              <p className="mt-1 text-2xl font-semibold text-[var(--color-text-primary)]">{stat.value}</p>
            </motion.div>
          ))}
        </div>
      </motion.aside>
    </section>
  );
}
