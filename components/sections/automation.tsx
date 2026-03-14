"use client";

import { motion } from "framer-motion";
import { SectionShell } from "@/components/ui/section-shell";
import { Reveal } from "@/components/ui/reveal";

const automationCards = [
  {
    title: "Automated workflows",
    description: "Set rules that automatically route requests, approvals, and updates between teams and systems.",
    points: ["Trigger-based actions", "Approvals", "SLA reminders"],
  },
  {
    title: "Intelligent data processing",
    description: "Use AI-assisted extraction and classification to process forms, invoices, and business records faster.",
    points: ["Form extraction", "Data validation", "Error flags"],
  },
  {
    title: "Repetitive task automation",
    description: "Reduce manual copy-paste and repetitive back-office activities with reliable automation pipelines.",
    points: ["System sync", "Batch updates", "Task completion logs"],
  },
  {
    title: "AI-assisted analytics",
    description: "Summarize key trends and operational signals so managers can make decisions quickly.",
    points: ["Trend summaries", "Exception alerts", "Performance insights"],
  },
];

export function AutomationSection() {
  return (
    <SectionShell
      id="automation"
      eyebrow="AI-Powered Automation"
      title="Practical AI features that improve daily operations."
      description="We focus on dependable automation and measurable outcomes, not hype. Every AI feature is tied to a clear business workflow."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {automationCards.map((card, index) => (
          <Reveal key={card.title} delay={index * 0.1}>
            <motion.article
              className="h-full rounded-3xl border border-slate-200/80 bg-white/95 dark:bg-slate-900 p-6 dark:border-slate-700 "
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 130, damping: 22 }}
            >
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">{card.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{card.description}</p>
              <ul className="mt-5 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                {card.points.map((point) => (
                  <li key={point} className="flex items-center gap-2">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-violet-500" />
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
