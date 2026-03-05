"use client";

import { motion } from "framer-motion";
import { SectionShell } from "@/components/ui/section-shell";
import { Reveal } from "@/components/ui/reveal";

const projects = [
  {
    name: "Revenue-critical billing backbone",
    summary: "Replaced synchronous billing steps with an event-driven workflow and delivery guarantees.",
    outcome: "Reduced billing latency by 58% while improving traceability across failures.",
  },
  {
    name: "Document automation platform",
    summary: "Delivered a distributed rendering system that scales workers based on queue pressure.",
    outcome: "Handled 6x burst traffic with self-healing retries and lower manual intervention.",
  },
  {
    name: "Multi-tenant reliability program",
    summary: "Introduced reusable infrastructure templates and release guardrails for tenant isolation.",
    outcome: "Supported enterprise onboarding with stronger SLAs and zero cross-tenant incidents.",
  },
];

export function ProjectsSection() {
  return (
    <SectionShell
      id="projects"
      eyebrow="Case Studies"
      title="Selected backend and automation outcomes."
      description="Examples where architecture and workflow design produced durable product and operations improvements."
      align="center"
    >
      <div className="grid gap-5 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Reveal key={project.name} delay={index * 0.08} y={18}>
            <motion.article
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 120, damping: 19 }}
              className="h-full rounded-3xl border border-slate-200/70 bg-white/80 p-7 dark:border-slate-700 dark:bg-slate-900/75"
            >
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">{project.name}</h3>
              <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-300">{project.summary}</p>
              <p className="mt-5 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-sm text-emerald-800 dark:text-emerald-200">{project.outcome}</p>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
