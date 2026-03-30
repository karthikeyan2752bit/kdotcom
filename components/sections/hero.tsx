"use client";

import { motion } from "framer-motion";
import AutomationGlobe3D from "@/components/AutomationGlobe3D";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="hero-section relative isolate overflow-visible"
    >
      <div className="hero-content mobile-shell mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-14 lg:px-10 lg:py-24">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="space-y-5"
          >
            <span className="inline-flex rounded-full border border-emerald-200 bg-emerald-50/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700 backdrop-blur-sm">
              SaaS Infrastructure Partner
            </span>

            <h1 className="max-w-[18ch] text-[2.05rem] font-bold leading-[1.05] tracking-tight text-slate-900 sm:text-[2.5rem] lg:text-6xl lg:leading-[1.02]">
              Build software your business can run and scale with.
            </h1>

            <p className="max-w-[34ch] text-base leading-relaxed text-slate-600 sm:text-lg">
              We design dependable SaaS workflows, automation, and backend
              systems so teams move faster with less operational overhead.
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
                className="inline-flex h-12 w-full items-center justify-center rounded-xl border border-slate-200 bg-white/80 px-7 text-base font-semibold text-slate-700 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-emerald-200 hover:bg-white sm:w-auto sm:text-sm"
              >
                Our Solutions
              </a>
            </div>
          </motion.div>

          <div className="relative order-last flex min-w-0 flex-col overflow-visible lg:order-none lg:min-h-[760px]">
            <div className="relative h-[380px] overflow-visible sm:h-[520px] lg:h-[760px]">
              <div className="absolute -right-12 top-1/2 h-[380px] w-[380px] -translate-y-1/2 overflow-visible sm:-right-16 sm:h-[560px] sm:w-[560px] lg:-right-24 lg:h-[760px] lg:w-[760px]">
                <AutomationGlobe3D />
              </div>
            </div>

            <div className="mobile-card relative z-10 mx-auto mt-[-40px] w-full max-w-[560px] rounded-3xl border border-slate-200/90 bg-white/90 p-5 shadow-[0_24px_60px_-30px_rgba(15,23,42,0.28)] backdrop-blur-xl sm:mt-[-60px] lg:absolute lg:bottom-6 lg:left-0 lg:right-0">
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

              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Processing automation with alerts, retries, approval flows, and
                audit logs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}