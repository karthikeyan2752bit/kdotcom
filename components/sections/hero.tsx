"use client";

import { motion } from "framer-motion";
import AutomationGlobe3D from "@/components/AutomationGlobe3D";

export function HeroSection() {
  return (
    <section id="hero" className="hero-section relative isolate overflow-hidden">
      <div className="hero-content mobile-shell mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-24">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="space-y-5"
          >
            <span className="inline-flex rounded-full border border-emerald-200 bg-emerald-50/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700 backdrop-blur-sm">
              SaaS Infrastructure Partner
            </span>
            <h1 className="max-w-[18ch] text-[2.05rem] font-bold leading-[1.08] tracking-tight text-slate-900 sm:text-[2.35rem] lg:text-6xl lg:leading-[1.04]">
              Build software your business can run and scale with.
            </h1>
            <p className="max-w-[34ch] text-base leading-relaxed text-slate-600 sm:text-lg">
              We design dependable SaaS workflows, automation, and backend systems so teams move faster with less operational overhead.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <a
                href="#contact"
                className="inline-flex h-12 w-full items-center justify-center rounded-xl bg-emerald-600 px-7 text-base font-semibold text-white shadow-xl shadow-emerald-600/20 transition duration-200 hover:-translate-y-0.5 hover:bg-emerald-500 sm:w-auto sm:text-sm"
              >
                Request Consultation
              </a>
              <a
                href="#solutions"
                className="inline-flex h-12 w-full items-center justify-center rounded-xl border border-slate-200 bg-white/70 px-7 text-base font-semibold text-slate-700 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-emerald-200 hover:bg-white sm:w-auto sm:text-sm"
              >
                Our Solutions
              </a>
            </div>
          </motion.div>

          <div className="relative order-last flex flex-col gap-4 lg:order-none lg:gap-6">
            <AutomationGlobe3D />
            <div className="mobile-card rounded-3xl border border-slate-200 bg-white/70 p-5 shadow-[0_18px_40px_-24px_rgba(15,23,42,0.3)] backdrop-blur">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                    Billing Systems
                  </p>
                  <p className="mt-1 text-base font-semibold text-slate-900">
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
              <p className="mt-2 text-sm text-slate-600">
                Processing automation with alerts, retries, and audit logs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
