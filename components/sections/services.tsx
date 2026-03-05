"use client";

import { motion } from "framer-motion";
import { SectionShell } from "@/components/ui/section-shell";
import { Reveal } from "@/components/ui/reveal";

const capabilities = [
  {
    title: "Distributed API platforms",
    description: "Service boundaries, event contracts, and resilient APIs for high-concurrency SaaS traffic.",
    metric: "7x throughput",
  },
  {
    title: "Cloud reliability engineering",
    description: "Observability, SLOs, and incident-ready infrastructure to keep customer-facing systems stable.",
    metric: "62% incident reduction",
  },
  {
    title: "Automation systems",
    description: "Queue-driven workers and orchestration for browser and document workflows with auditability.",
    metric: "250k jobs/day",
  },
  {
    title: "Platform modernization",
    description: "Containerization, CI/CD hardening, and migration plans that reduce deployment risk.",
    metric: "4x faster releases",
  },
];

export function ServicesSection() {
  return (
    <SectionShell
      id="capabilities"
      eyebrow="Capabilities"
      title="Engineering capabilities for resilient SaaS products."
      description="Engagements focus on clear architecture decisions, reliable operations, and measurable business outcomes."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {capabilities.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.08} y={20}>
            <motion.article
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 120, damping: 18 }}
              className="h-full rounded-3xl border border-slate-200/80 bg-white/80 p-7 shadow-lg shadow-slate-300/20 backdrop-blur dark:border-slate-700/70 dark:bg-slate-900/70"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-300">{item.metric}</p>
              <h3 className="mt-3 text-2xl font-semibold text-slate-900 dark:text-slate-100">{item.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-slate-600 dark:text-slate-300">{item.description}</p>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
