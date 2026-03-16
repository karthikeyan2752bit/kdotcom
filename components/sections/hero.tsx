"use client";

import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="hero snap-start scroll-mt-24"
    >
      <video className="hero-bg-video" autoPlay muted loop playsInline preload="metadata" aria-hidden="true">
        <source src="/media/SaaS_Automation_Background_Video_Generation.mp4" type="video/mp4" />
      </video>

      <div className="hero-content mx-auto grid min-h-screen max-w-7xl items-center gap-14 px-6 pb-20 pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:pt-28">
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

        <div className="flex items-center justify-center">
          <div className="hero-logo max-w-[420px]">
            <img src="/media/logonew.png" alt="Pari Labs Logo" loading="eager" className="h-auto w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
