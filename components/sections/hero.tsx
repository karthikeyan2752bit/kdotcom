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
      <div className="hero-overlay" aria-hidden="true" />

      <div className="hero-content mx-auto grid min-h-screen max-w-7xl items-center gap-14 px-6 pb-20 pt-24 lg:grid-cols-[1fr_1fr] lg:px-10 lg:pt-30">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} className="hero-text">
          <span className="inline-flex rounded-full border border-[var(--color-primary)]/20 bg-[var(--color-primary)]/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
            Business Software • Automation • Office IT Setup
          </span>
          <h1 className="mt-7 text-5xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-6xl lg:text-7xl">
            Software and IT systems that help your business scale.
          </h1>
          <p className="mt-5 text-base font-medium text-[var(--color-secondary)] sm:text-lg">
            Built for clinics, retail stores, showrooms, and growing businesses.
          </p>
          <div className="mt-6 space-y-2 text-lg leading-relaxed text-[var(--color-text-secondary)] sm:text-xl">
            <p>We build software that automates your business.</p>
            <p className="font-medium text-[var(--color-text-primary)]/90">Billing • Inventory • CRM • Appointments</p>
            <p className="text-base sm:text-lg">Custom systems for clinics, stores, showrooms, and growing offices.</p>
          </div>
          <div className="mt-9 flex flex-wrap gap-4">
            <a href="#contact" className="rounded-full bg-[var(--color-accent)] px-7 py-3.5 text-sm font-semibold text-[var(--color-button-text)] shadow-xl shadow-emerald-500/30 transition hover:-translate-y-0.5 hover:bg-emerald-700">
              Discuss Your Business Needs
            </a>
            <a href="#solutions" className="rounded-full border border-[var(--color-primary)]/30 bg-white/70 px-7 py-3.5 text-sm font-semibold text-[var(--color-primary)] backdrop-blur-sm transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]">
              See what we can build for you
            </a>
          </div>
        </motion.div>

        <div className="hero-visual flex items-center justify-center">
          <div className="hero-logo-wrapper">
            <div className="hero-logo hero-card">
              <picture>
                <source srcSet="/media/logo.png" type="image/png" />
                <img src="/media/logonew.png" alt="Pari Labs Logo" loading="eager" className="hero-logo-image h-auto w-full" />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
