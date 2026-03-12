"use client";

import { motion } from "framer-motion";
import { SectionShell } from "@/components/ui/section-shell";
import { Reveal } from "@/components/ui/reveal";

const solutions = [
  {
    title: "Business Automation Platforms",
    description: "We design platforms that automate repetitive operational tasks, approvals, and handoffs so your team can focus on high-value work.",
    icon: "⚙️",
  },
  {
    title: "Custom SaaS Applications",
    description: "We build secure web applications tailored to your business model, with clean dashboards for teams, managers, and customers.",
    icon: "🧩",
  },
  {
    title: "Infrastructure & Server Setup",
    description: "We set up cloud infrastructure, secure deployments, and monitoring so your software remains stable and dependable.",
    icon: "☁️",
  },
  {
    title: "AI-Assisted Workflow Systems",
    description: "We apply AI to data-heavy and repetitive workflows such as form handling, document review, and reporting support.",
    icon: "🤖",
  },
];

export function ServicesSection() {
  return (
    <SectionShell
      id="solutions"
      eyebrow="Solutions"
      title="Software and automation systems designed for business operations."
      description="Pari Labs helps organizations modernize workflows with practical software that is easy for teams to adopt and scale."
      entry="left"
    >
      <div className="grid gap-5 md:grid-cols-2">
        {solutions.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.08} y={20}>
            <motion.article
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 120, damping: 18 }}
              className="h-full rounded-3xl border border-slate-200/80 bg-white/80 p-7 shadow-lg shadow-slate-300/20 backdrop-blur dark:border-slate-700/70 dark:bg-slate-900/70"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 text-xl">
                {item.icon}
              </div>
              <h3 className="mt-4 text-2xl font-semibold text-slate-900 dark:text-slate-100">{item.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-slate-600 dark:text-slate-300">{item.description}</p>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
