"use client";

import { motion } from "framer-motion";
import { SectionShell } from "@/components/ui/section-shell";
import { Reveal } from "@/components/ui/reveal";

const modules = [
  { title: "Billing & Inventory Management", icon: "💳", detail: "Track sales, stock movement, and invoicing from one connected system." },
  { title: "HR Management Automation", icon: "👥", detail: "Manage attendance, leave, onboarding, and payroll workflows with fewer manual steps." },
  { title: "Internal Workflow Software", icon: "🗂️", detail: "Route internal tasks with approvals, ownership, and status tracking across departments." },
  { title: "Customer Management Systems", icon: "🤝", detail: "Capture leads, manage customer interactions, and follow up consistently from one place." },
  { title: "Reporting Dashboards", icon: "📊", detail: "Give managers clear dashboards for operations, finance, and performance trends." },
  { title: "Document Automation", icon: "📄", detail: "Generate, validate, and process business documents with templates and approval logic." },
];

export function ModulesSection() {
  return (
    <SectionShell
      id="modules"
      eyebrow="Business Software Modules"
      title="Common modules we build to modernize operations."
      description="These modules can be delivered individually or combined into a full business platform based on your priorities."
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {modules.map((module, index) => (
          <Reveal key={module.title} delay={index * 0.06}>
            <motion.article
              className="h-full rounded-3xl border border-slate-200/80 bg-white/95 dark:bg-slate-900 p-6 dark:border-slate-700 "
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 130, damping: 22 }}
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500/20 to-violet-500/20 text-lg">
                {module.icon}
              </div>
              <h3 className="mt-3 text-xl font-semibold text-slate-900 dark:text-slate-100">{module.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{module.detail}</p>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
