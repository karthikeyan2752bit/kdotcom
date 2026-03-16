"use client";

import { motion } from "framer-motion";
import { SectionShell } from "@/components/ui/section-shell";
import { Reveal } from "@/components/ui/reveal";

const useCases = [
  {
    industry: "Clinics and Hospitals",
    description: "Reduce front-desk pressure and improve patient service with organized appointment, billing, and record systems.",
    items: ["Appointment booking and reminders", "Faster billing and payment tracking", "Patient records and visit history in one place"],
  },
  {
    industry: "Laundry Businesses",
    description: "Track every order from pickup to delivery, reduce missed items, and keep customers informed automatically.",
    items: ["Order tracking by stage", "Auto billing and invoice generation", "Customer updates and repeat order history"],
  },
  {
    industry: "Retail Shops and Supermarkets",
    description: "Keep stock accurate, speed up billing, and get a daily view of what is selling and what needs restocking.",
    items: ["Billing connected to inventory", "Low-stock alerts and purchase planning", "Simple sales and profit reports"],
  },
  {
    industry: "Car and Bike Showrooms",
    description: "Manage leads, bookings, test drives, deliveries, and follow-ups without losing customer details.",
    items: ["Lead tracking and follow-up reminders", "Booking and delivery workflow", "Sales team performance dashboards"],
  },
  {
    industry: "Growing Offices (20–100 Employees)",
    description: "Create smoother internal operations with better process visibility, approvals, and reporting.",
    items: ["Employee request and approval systems", "Task and workflow tracking", "Management dashboards for operations"],
  },
];

export function ProjectsSection() {
  return (
    <SectionShell
      id="use-cases"
      eyebrow="Industries We Help"
      title="Built for real businesses, not just tech teams."
      description="We design each solution around your daily business operations so your team can work faster with fewer errors."
      align="center"
      entry="right"
    >
      <div className="grid gap-5 lg:grid-cols-2">
        {useCases.map((useCase, index) => (
          <Reveal key={useCase.industry} delay={index * 0.08} y={18}>
            <motion.article
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 120, damping: 19 }}
              className="h-full rounded-3xl border border-slate-200/70 bg-white/95 dark:bg-slate-900 p-7 dark:border-slate-700 "
            >
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">{useCase.industry}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{useCase.description}</p>
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
