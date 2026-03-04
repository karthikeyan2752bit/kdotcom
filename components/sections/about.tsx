"use client";

import { motion } from "framer-motion";
import { SectionShell } from "@/components/ui/section-shell";

const pillars = [
  "Reliability-first architecture",
  "Operational visibility and incident readiness",
  "Simple, maintainable systems that scale",
];

export function AboutSection() {
  return (
    <SectionShell
      id="about"
      eyebrow="About"
      title="Engineering partner for teams building serious products."
      description="I specialize in backend and infrastructure decisions that help SaaS teams ship faster while reducing production risk."
    >
      <div className="grid gap-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/50 lg:grid-cols-[1.3fr_1fr] dark:border-slate-800 dark:bg-slate-900 dark:shadow-black/30">
        <div>
          <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300">
            I work across API design, platform architecture, Linux operations, and workflow automation.
            My approach emphasizes clear interfaces, observability, and predictable production behavior.
          </p>
        </div>
        <motion.ul
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          className="space-y-3"
        >
          {pillars.map((pillar) => (
            <li key={pillar} className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200">
              {pillar}
            </li>
          ))}
        </motion.ul>
      </div>
    </SectionShell>
  );
}
