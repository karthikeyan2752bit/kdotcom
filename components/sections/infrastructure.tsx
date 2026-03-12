"use client";

import { motion } from "framer-motion";
import { SectionShell } from "@/components/ui/section-shell";
import { Reveal } from "@/components/ui/reveal";

const infrastructurePillars = [
  {
    title: "Cloud servers",
    text: "We provision dependable cloud environments sized for your current workload and future growth.",
    chips: ["AWS / Azure / GCP", "Managed services", "Cost-aware setup"],
  },
  {
    title: "Secure deployments",
    text: "We implement release controls, environment separation, and access policies to reduce operational risk.",
    chips: ["CI/CD", "Access controls", "Rollback safety"],
  },
  {
    title: "Monitoring and backups",
    text: "We set up proactive alerts and backup strategies so issues are identified early and recovery is fast.",
    chips: ["Alerts", "Audit logs", "Recovery plans"],
  },
  {
    title: "Scalable architecture",
    text: "We design systems that can handle increasing users, transactions, and integrations without disruption.",
    chips: ["Load handling", "Service scaling", "Data reliability"],
  },
];

export function InfrastructureSection() {
  return (
    <SectionShell
      id="infrastructure"
      eyebrow="Infrastructure & Server Setup"
      title="Reliable technical foundations for business-critical software."
      description="Pari Labs helps organizations run software on secure, observable, and scalable infrastructure with business continuity in mind."
      align="center"
    >
      <div className="grid gap-5 lg:grid-cols-2">
        {infrastructurePillars.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.08}>
            <motion.article
              className="rounded-3xl border border-slate-200/80 bg-white/80 p-6 dark:border-slate-700 dark:bg-slate-900/70"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 110, damping: 18 }}
            >
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{item.text}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {item.chips.map((chip) => (
                  <span key={chip} className="rounded-full border border-slate-300/80 bg-gradient-to-r from-cyan-50 to-emerald-50 px-3 py-1 text-xs font-medium text-slate-700 dark:border-slate-600 dark:from-cyan-950/40 dark:to-emerald-950/40 dark:text-slate-200">
                    {chip}
                  </span>
                ))}
              </div>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
