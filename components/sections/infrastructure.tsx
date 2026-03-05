"use client";

import { motion } from "framer-motion";
import { SectionShell } from "@/components/ui/section-shell";
import { Reveal } from "@/components/ui/reveal";

const visuals = [
  {
    title: "Backend systems",
    text: "Core services process requests, protect data, and keep performance stable as demand grows.",
    chips: ["APIs", "Queues", "Databases"],
  },
  {
    title: "SaaS infrastructure",
    text: "Cloud foundations with monitoring, deployment safety checks, and straightforward recovery plans.",
    chips: ["Cloud", "Monitoring", "Release Controls"],
  },
  {
    title: "Automation pipelines",
    text: "Business tasks move through clear steps so teams get faster turnaround with fewer manual handoffs.",
    chips: ["Ingest", "Process", "Deliver"],
  },
];

export function InfrastructureSection() {
  return (
    <SectionShell
      id="infrastructure"
      eyebrow="How It Works"
      title="Simple visuals for complex backend and automation systems."
      description="Each workflow is represented as a clear sequence so non-technical stakeholders can understand how the platform delivers value."
      align="center"
    >
      <div className="grid gap-5 lg:grid-cols-3">
        {visuals.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.08}>
            <motion.article
              className="rounded-3xl border border-slate-200/80 bg-white/80 p-6 dark:border-slate-700 dark:bg-slate-900/70"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 110, damping: 18 }}
            >
              <div className="mb-5 flex h-32 items-center justify-center rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/10 via-slate-100 to-slate-200 dark:from-emerald-500/15 dark:via-slate-900 dark:to-slate-800">
                <motion.div
                  className="flex items-center gap-2"
                  animate={{ x: [0, 8, 0] }}
                  transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
                >
                  {item.chips.map((chip) => (
                    <span key={chip} className="rounded-full border border-slate-300/80 bg-white/80 px-3 py-1 text-xs font-medium text-slate-700 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-200">
                      {chip}
                    </span>
                  ))}
                </motion.div>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{item.text}</p>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
