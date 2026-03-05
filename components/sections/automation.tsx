"use client";

import { motion } from "framer-motion";
import { SectionShell } from "@/components/ui/section-shell";
import { Reveal } from "@/components/ui/reveal";

const automationCards = [
  {
    title: "Workflow automation",
    description: "Automate repetitive tasks from customer intake to fulfillment with tracked status at every step.",
    points: ["Task routing", "Rules engine", "Approval checkpoints"],
  },
  {
    title: "Document pipelines",
    description: "Capture, validate, transform, and deliver business documents with consistent quality controls.",
    points: ["OCR + extraction", "Validation", "System delivery"],
  },
  {
    title: "System integrations",
    description: "Connect CRM, ERP, internal APIs, and support tooling to remove data silos and manual sync work.",
    points: ["Bidirectional sync", "Audit logs", "Error recovery"],
  },
];

export function AutomationSection() {
  return (
    <SectionShell
      id="automation"
      eyebrow="End-to-End Business Automation SaaS"
      title="Automation services built around real business workflows."
      description="From inbound requests to completed transactions, each pipeline is designed to be reliable, observable, and easy for teams to adopt."
    >
      <div className="grid gap-5 lg:grid-cols-3">
        {automationCards.map((card, index) => (
          <Reveal key={card.title} delay={index * 0.1}>
            <motion.article
              className="h-full rounded-3xl border border-slate-200/80 bg-white/80 p-6 dark:border-slate-700 dark:bg-slate-900/75"
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 130, damping: 22 }}
            >
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">{card.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{card.description}</p>
              <ul className="mt-5 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                {card.points.map((point) => (
                  <li key={point} className="flex items-center gap-2">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
