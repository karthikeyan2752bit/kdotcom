"use client";

import { SectionShell } from "@/components/ui/section-shell";
import { Reveal } from "@/components/ui/reveal";

const reasons = [
  {
    title: "Custom solutions for your business",
    detail: "We design every system around your workflow, team size, and growth goals rather than using one-size-fits-all software.",
  },
  {
    title: "Direct support from the build team",
    detail: "You work with the same people who plan and build your system, so communication is faster and clearer.",
  },
  {
    title: "Affordable for small and growing companies",
    detail: "Our solutions are cost-effective compared to large software vendors while still delivering strong reliability.",
  },
  {
    title: "Fast and practical delivery",
    detail: "We focus on launching useful features quickly so your team sees value early and keeps improving over time.",
  },
  {
    title: "Reliable technology with long-term support",
    detail: "Your business gets stable software, secure systems, and ongoing updates as your operations grow.",
  },
];

export function AboutSection() {
  return (
    <SectionShell
      id="process"
      eyebrow="Why Businesses Choose Us"
      title="A trusted software partner for business owners."
      description="We help you automate operations with clear communication, practical solutions, and dependable support."
    >
      <div className="grid gap-4">
        {reasons.map((reason, index) => (
          <Reveal key={reason.title} delay={index * 0.08} x={index % 2 === 0 ? -28 : 28} y={0}>
            <article className="rounded-3xl border border-white/25 bg-slate-950/45 p-6 backdrop-blur-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">Reason {index + 1}</p>
              <h3 className="mt-2 text-2xl font-semibold text-slate-50">{reason.title}</h3>
              <p className="mt-2 text-base text-slate-300">{reason.detail}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
