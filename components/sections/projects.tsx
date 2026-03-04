"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SectionShell } from "@/components/ui/section-shell";
import { Reveal } from "@/components/ui/reveal";

const projects = [
  {
    name: "Revenue-critical billing backbone",
    summary: "Refactored synchronous billing tasks into an event-driven pipeline with guaranteed delivery semantics.",
    outcome: "Dropped billing processing latency by 58% while improving observability across failure states.",
  },
  {
    name: "Autonomous document automation grid",
    summary: "Built a distributed rendering architecture that can elastically scale workers across spikes.",
    outcome: "Delivered 6x burst capacity and self-healing retries without manual intervention.",
  },
  {
    name: "Multi-tenant reliability program",
    summary: "Introduced golden-path infrastructure templates and release guardrails for tenant isolation.",
    outcome: "Enabled enterprise onboarding with stronger SLAs and zero cross-tenant incidents.",
  },
];

export function ProjectsSection() {
  return (
    <SectionShell
      id="projects"
      eyebrow="Projects"
      title="Signature backend transformations with premium execution quality."
      description="Selected engagements where architecture, automation, and systems design drove product-level outcomes."
      align="center"
    >
      <Reveal>
        <div className="mb-7 overflow-hidden rounded-3xl border border-cyan-500/20 bg-slate-900">
          <Image src="/automation-pipeline.svg" alt="Automation pipeline flow illustration" width={1200} height={420} className="h-auto w-full" />
        </div>
      </Reveal>
      <div className="grid gap-5 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Reveal key={project.name} delay={index * 0.08} y={20}>
            <motion.article whileHover={{ y: -8 }} className="h-full rounded-3xl border border-slate-200/70 bg-white/80 p-7 dark:border-slate-700 dark:bg-slate-900/75">
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
