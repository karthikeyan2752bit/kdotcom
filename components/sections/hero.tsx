"use client";

import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section id="hero" className="hero-section relative isolate overflow-hidden">
      <div className="hero-content mx-auto grid min-h-[96vh] w-full max-w-7xl items-center gap-14 px-6 py-18 lg:grid-cols-2 lg:px-10 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <span className="inline-flex rounded-full border border-indigo-200 bg-indigo-50/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-indigo-700 backdrop-blur-sm">
            SaaS Infrastructure Partner
          </span>
          <h1 className="text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl lg:text-[64px] lg:leading-[1.04]">
            Build the Software Your Business Actually Needs
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-slate-700 sm:text-xl">
            From billing and inventory to dashboards and workflow automation, Pari Labs builds custom SaaS systems that help teams move faster with less operational friction.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-xl bg-emerald-600 px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-emerald-600/20 transition duration-300 hover:scale-[1.02] hover:bg-emerald-700"
            >
              Book a Demo
            </a>
            <a
              href="#solutions"
              className="rounded-xl border border-slate-300 bg-white/70 px-7 py-3.5 text-sm font-semibold text-slate-700 shadow-sm transition duration-300 hover:scale-[1.02] hover:border-indigo-300 hover:text-indigo-700"
            >
              Explore Solutions
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="hero-visual"
        >
          <div className="hero-preview">
            <div className="hero-preview-bar">
              <span />
              <span />
              <span />
            </div>
            <div className="product-screen" aria-live="polite">
              <video autoPlay muted loop playsInline preload="metadata" aria-label="Pari Labs product dashboard preview">
                <source src="/media/SaaS_Automation_Background_Video_Generation.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
