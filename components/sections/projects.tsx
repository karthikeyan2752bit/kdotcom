"use client";

import { motion } from "framer-motion";
import { SectionShell } from "@/components/ui/section-shell";
import { Reveal } from "@/components/ui/reveal";

const useCases = [
  {
    industry: "Healthcare & Hospitals",
    items: [
      "Patient record workflows with role-based access",
      "Appointment booking from website or WhatsApp",
      "Automated reminders for visits and follow-ups",
      "Digital billing, claims, and report generation",
      "Doctor and staff scheduling visibility",
    ],
  },
  {
    industry: "Small Businesses",
    items: [
      "Simple sales and billing management",
      "Automated stock and reorder notifications",
      "Owner-friendly reports for daily decisions",
      "Integrated customer follow-up messages",
      "Task tracking across small teams",
    ],
  },
  {
    industry: "Retail Shops",
    items: [
      "Point-of-sale and inventory sync",
      "Centralized product and pricing controls",
      "Automated purchase and supplier workflows",
      "Promotions and customer loyalty tracking",
      "Multi-branch reporting dashboards",
    ],
  },
  {
    industry: "Service Businesses & Professional Offices",
    items: [
      "Lead capture and client onboarding automation",
      "Appointment and service delivery scheduling",
      "Invoice automation and payment tracking",
      "Client document collection and approvals",
      "Operational dashboards for managers",
    ],
  },
];

export function ProjectsSection() {
  return (
    <SectionShell
      id="use-cases"
      eyebrow="Industry Use Cases"
      title="Built around real business scenarios, not generic templates."
      description="We tailor each software platform to the way your team already operates, then improve speed, control, and visibility."
      align="center"
      entry="right"
    >
      <div className="grid gap-5 lg:grid-cols-2">
        {useCases.map((useCase, index) => (
          <Reveal key={useCase.industry} delay={index * 0.08} y={18}>
            <motion.article
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 120, damping: 19 }}
              className="h-full rounded-3xl border border-slate-200/70 bg-white/80 p-7 dark:border-slate-700 dark:bg-slate-900/75"
            >
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">{useCase.industry}</h3>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {useCase.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-cyan-500" />
                    <span>{item}</span>
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
