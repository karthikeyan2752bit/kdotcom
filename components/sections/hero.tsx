"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section id="hero" className="relative isolate overflow-hidden">
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      >
        <source src="/media/SaaS_Automation_Background_Video_Generation.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay" />

      <div className="hero-content mx-auto grid w-full max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-2 lg:px-10 lg:py-30">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-7"
        >
          <span className="inline-flex rounded-full border border-indigo-200 bg-indigo-50/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-indigo-700 backdrop-blur-sm">
            SaaS Automation Partner
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Software and IT systems that run your business better.
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-slate-700">
            Automate billing, inventory, appointments, and daily operations with custom platforms designed for business owners.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-xl bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-600/25 transition hover:-translate-y-0.5 hover:bg-emerald-700"
            >
              Discuss Your Business Needs
            </a>
            <a
              href="#solutions"
              className="rounded-xl border border-slate-300 bg-white/90 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-indigo-300 hover:text-indigo-700"
            >
              See What We Can Build
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="rounded-3xl border border-slate-200 bg-white/95 p-8 shadow-[0_30px_80px_-45px_rgba(15,23,42,0.45)]"
        >
          <div className="rounded-2xl bg-gradient-to-br from-indigo-50 via-white to-emerald-50 p-8">
            <Image
              src="/media/logonew.png"
              alt="Pari Labs logo"
              width={640}
              height={320}
              priority
              className="mx-auto w-full max-w-sm object-contain"
            />
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-600">Faster Operations</div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-600">Clear Reporting</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
