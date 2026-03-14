"use client";

import { SectionShell } from "@/components/ui/section-shell";
import { Reveal } from "@/components/ui/reveal";

const phases = [
  {
    title: "Understand the business workflow",
    detail: "We map your current process, identify delays, and define what should be automated or improved first.",
  },
  {
    title: "Design the system architecture",
    detail: "Our team designs a secure, scalable solution with clear modules, user roles, and integration points.",
  },
  {
    title: "Develop and deploy the software",
    detail: "We build, test, and launch the platform with phased rollouts to keep operations stable.",
  },
  {
    title: "Maintain and improve the platform",
    detail: "We provide ongoing monitoring, updates, and iterative improvements as your business grows.",
  },
];

export function AboutSection() {
  return (
    <SectionShell
      id="process"
      eyebrow="Our Process"
      title="A clear step-by-step delivery model for business software projects."
      description="From discovery to long-term support, Pari Labs works as a technical partner focused on operational outcomes."
    >
      <div className="grid gap-4">
        {phases.map((phase, index) => (
          <Reveal key={phase.title} delay={index * 0.08} x={index % 2 === 0 ? -28 : 28} y={0}>
            <article className="rounded-3xl border border-white/25 bg-slate-950/45 p-6 backdrop-blur-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">Step {index + 1}</p>
              <h3 className="mt-2 text-2xl font-semibold text-slate-50">{phase.title}</h3>
              <p className="mt-2 text-base text-slate-300">{phase.detail}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
