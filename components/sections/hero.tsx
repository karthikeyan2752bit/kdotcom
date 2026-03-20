"use client";

import { motion } from "framer-motion";
import AutomationGlobe3D from "@/components/AutomationGlobe3D";

export function HeroSection() {
  return (
    <section id="hero" className="hero-section relative isolate overflow-hidden">
      <div className="hero-content mx-auto w-full max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="space-y-6"
          >
            <span className="inline-flex rounded-full border border-emerald-200 bg-emerald-50/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700 backdrop-blur-sm">
              SaaS Infrastructure Partner
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl lg:leading-[1.04]">
              Build the Software Your Business Actually Needs
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
              SaaS + automation that helps teams ship dependable systems faster—API backends, infrastructure, and reliable workflows with fewer operational surprises.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-xl bg-emerald-600 px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-emerald-600/20 transition duration-200 hover:-translate-y-0.5 hover:bg-emerald-500"
              >
                Book a Demo
              </a>
              <a
                href="#solutions"
                className="rounded-xl border border-slate-200 bg-white/70 px-7 py-3.5 text-sm font-semibold text-slate-700 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-emerald-200 hover:bg-white"
              >
                Our Solutions
              </a>
            </div>
          </motion.div>

          <div className="relative flex flex-col gap-6">
            <AutomationGlobe3D />
            <div className="rounded-2xl border border-slate-200 bg-white/70 p-4 shadow-[0_18px_40px_-24px_rgba(15,23,42,0.3)] backdrop-blur">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                    Billing Systems
                  </p>
                  <p className="mt-1 text-sm font-semibold text-slate-900">
                    Invoices + Payments pipeline
                  </p>
                </div>
                <div className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                  68%
                </div>
              </div>
              <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-emerald-100/70">
                <div className="h-full w-[68%] rounded-full bg-emerald-500/90" />
              </div>
              <p className="mt-2 text-xs text-slate-600">
                Processing automation with alerts, retries, and audit logs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
