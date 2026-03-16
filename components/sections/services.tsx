"use client";

import { motion } from "framer-motion";
import { SectionShell } from "@/components/ui/section-shell";
import { Reveal } from "@/components/ui/reveal";

const solutions = [
  {
    title: "Business Software",
    description:
      "We build day-to-day software that helps owners and staff manage sales, stock, customers, and reporting in one place. Your team gets a clear system instead of scattered spreadsheets and manual updates.",
    points: ["Inventory management systems", "Billing software connected with stock", "CRM and business dashboards"],
    icon: "💼",
  },
  {
    title: "Business Automation",
    description:
      "We automate repetitive work so your team can serve customers faster and make fewer mistakes. Every workflow is designed around how your business already operates.",
    points: ["Clinic appointment and follow-up automation", "Laundry pickup-to-delivery workflow tracking", "Retail and showroom process automation"],
    icon: "⚙️",
  },
  {
    title: "Infrastructure & IT Setup",
    description:
      "We set up reliable office systems so your software runs smoothly every day. You get secure access, dependable backups, and practical support for your team.",
    points: ["Office server setup and configuration", "Secure systems for business data", "Internal employee tools and access setup"],
    icon: "🛡️",
  },
];

export function ServicesSection() {
  return (
    <SectionShell
      id="solutions"
      eyebrow="What We Do"
      title="Software solutions that solve real business problems."
      description="From inventory and billing to appointments and reporting, we build systems that make daily operations simpler, faster, and easier to manage."
    >
      <div className="grid gap-5 md:grid-cols-3">
        {solutions.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.08} y={20}>
            <motion.article
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 120, damping: 18 }}
              className="h-full rounded-3xl border border-slate-200/80 bg-white/95 dark:bg-slate-900 p-7 shadow-lg shadow-slate-300/20 backdrop-blur dark:border-slate-700/70 "
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 text-xl">
                {item.icon}
              </div>
              <h3 className="mt-4 text-2xl font-semibold text-slate-900 dark:text-slate-100">{item.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-slate-600 dark:text-slate-300">{item.description}</p>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {item.points.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    <span>{point}</span>
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
