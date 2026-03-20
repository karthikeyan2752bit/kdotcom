"use client";

import { motion } from "framer-motion";
import { AutomationGlobe3D } from "@/components/ui/automation-globe-3d";

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
          <span className="inline-flex rounded-full border border-emerald-300/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-100 backdrop-blur-sm">
            SaaS Infrastructure Partner
          </span>
          <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-[64px] lg:leading-[1.04]">
            Build the Software Your Business Actually Needs
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-slate-300 sm:text-xl">
            From billing and inventory to dashboards and workflow automation, Pari Labs builds custom SaaS systems that help teams move faster with less operational friction.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-xl bg-emerald-500 px-7 py-3.5 text-sm font-semibold text-slate-950 shadow-xl shadow-emerald-900/30 transition duration-300 hover:scale-[1.02] hover:bg-emerald-400"
            >
              Book a Demo
            </a>
            <a
              href="#solutions"
              className="rounded-xl border border-cyan-400/30 bg-slate-900/65 px-7 py-3.5 text-sm font-semibold text-cyan-100 shadow-sm transition duration-300 hover:scale-[1.02] hover:border-cyan-300 hover:text-white"
            >
              Explore Solutions
            </a>
          </div>
        </motion.div>

        <AutomationGlobe3D />
      </div>
    </section>
  );
}
