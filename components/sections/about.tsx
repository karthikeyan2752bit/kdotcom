"use client";

import { SectionShell } from "@/components/ui/section-shell";
import { Reveal } from "@/components/ui/reveal";

const phases = [
  {
    title: "Map system constraints",
    detail: "Trace critical data paths, identify coupling hotspots, and baseline reliability gaps.",
  },
  {
    title: "Design scalable core",
    detail: "Create service boundaries and automation patterns that support growth and team velocity.",
  },
  {
    title: "Operationalize excellence",
    detail: "Instrument metrics, rollout guardrails, and runbooks for sustainable reliability.",
  },
];

export function AboutSection() {
  return (
    <SectionShell
      id="architecture"
      eyebrow="Architecture Approach"
      title="A systems architecture method focused on clarity, resilience, and velocity."
      description="I apply a practical architecture process that turns backend complexity into scalable, maintainable systems."
    >
      <div className="grid gap-4">
        {phases.map((phase, index) => (
          <Reveal key={phase.title} delay={index * 0.08} x={index % 2 === 0 ? -28 : 28} y={0}>
            <article className="rounded-3xl border border-slate-200/70 bg-white/75 p-6 dark:border-slate-700 dark:bg-slate-900/70">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-300">Phase {index + 1}</p>
              <h3 className="mt-2 text-2xl font-semibold text-slate-900 dark:text-slate-100">{phase.title}</h3>
              <p className="mt-2 text-base text-slate-600 dark:text-slate-300">{phase.detail}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
