"use client";

import { motion } from "framer-motion";
import { SectionShell } from "@/components/ui/section-shell";
import { Reveal } from "@/components/ui/reveal";

const infrastructurePillars = [
  {
    title: "Office server setup",
    text: "We set up reliable servers and business systems so your team can work without slowdowns or frequent downtime.",
    chips: ["Right-sized setup", "Stable performance", "Future-ready"],
  },
  {
    title: "Secure business access",
    text: "We protect important business data and ensure only authorized team members can access the right information.",
    chips: ["User permissions", "Safe login", "Risk reduction"],
  },
  {
    title: "Backups and recovery",
    text: "Your business data is backed up regularly so you can recover quickly if something goes wrong.",
    chips: ["Regular backups", "Recovery planning", "Business continuity"],
  },
  {
    title: "Ongoing system health",
    text: "We monitor system performance and fix issues early so your software stays dependable as your business grows.",
    chips: ["Early alerts", "Performance checks", "Support"],
  },
];

export function InfrastructureSection() {
  return (
    <SectionShell
      id="infrastructure"
      eyebrow="Infrastructure & IT Setup"
      title="Reliable systems behind your daily business operations."
      description="We make sure your software runs on dependable, secure, and well-managed infrastructure that supports business growth."
      align="center"
      entry="left"
    >
      <div className="grid gap-5 lg:grid-cols-2">
        {infrastructurePillars.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.08}>
            <motion.article
              className="rounded-3xl border border-slate-200/80 bg-[var(--color-surface)] p-6 "
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 110, damping: 18 }}
            >
              <h3 className="text-xl font-semibold text-[var(--color-text-primary)]">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-secondary)]">{item.text}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {item.chips.map((chip) => (
                  <span key={chip} className="rounded-full border border-slate-200 bg-[var(--color-bg)] px-3 py-1 text-xs font-medium text-[var(--color-secondary)]">
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
