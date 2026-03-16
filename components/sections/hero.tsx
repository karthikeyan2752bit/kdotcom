"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const SLIDE_INTERVAL_MS = 5500;

export function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % 2);
    }, SLIDE_INTERVAL_MS);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="hero-section relative isolate overflow-hidden">
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
          className="hero-visual"
        >
          <div className="hero-preview">
            <div className="slider" aria-live="polite">
              <div className={`slide ${activeSlide === 0 ? "active" : ""}`}>
                <Image src="/media/logonew.png" alt="Pari Labs" width={640} height={320} priority />
              </div>

              <div className={`slide ${activeSlide === 1 ? "active" : ""}`}>
                <video autoPlay muted loop playsInline preload="metadata" aria-label="Pari Labs product preview">
                  <source src="/media/SaaS_Automation_Background_Video_Generation.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
