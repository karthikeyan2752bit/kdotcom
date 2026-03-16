"use client";

import { motion } from "framer-motion";
import { SectionShell } from "@/components/ui/section-shell";
import { Reveal } from "@/components/ui/reveal";

const automationCards = [
  {
    title: "Daily workflow automation",
    description: "Automate routine steps like approvals, updates, and notifications so work moves faster between teams.",
    points: ["Automatic task routing", "Approval reminders", "Status updates"],
  },
  {
    title: "Faster data handling",
    description: "Reduce manual data entry and keep records more accurate with smart processing for forms and business documents.",
    points: ["Form data capture", "Data checks", "Error reduction"],
  },
  {
    title: "Back-office efficiency",
    description: "Cut repetitive office work and help staff focus on customers, sales, and service quality.",
    points: ["System-to-system updates", "Batch processing", "Activity logs"],
  },
  {
    title: "Business insights for owners",
    description: "Get clear summaries and alerts so you can make decisions quickly without waiting for manual reports.",
    points: ["Trend summaries", "Issue alerts", "Performance insights"],
  },
];

export function AutomationSection() {
  return (
    <SectionShell
      id="automation"
      eyebrow="Business Automation"
      title="Automation that saves time and reduces mistakes."
      description="We focus on practical automation that improves day-to-day operations and delivers measurable business results."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {automationCards.map((card, index) => (
          <Reveal key={card.title} delay={index * 0.1}>
            <motion.article
              className="h-full rounded-3xl border border-slate-200/80 bg-[var(--color-surface)] p-6 "
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 130, damping: 22 }}
            >
              <h3 className="text-xl font-semibold text-[var(--color-text-primary)]">{card.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-secondary)]">{card.description}</p>
              <ul className="mt-5 space-y-2 text-sm text-[var(--color-text-secondary)]">
                {card.points.map((point) => (
                  <li key={point} className="flex items-center gap-2">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
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
