"use client";

import { motion } from "framer-motion";
import { SectionShell } from "@/components/ui/section-shell";

type Service = {
  title: string;
  description: string;
  icon: string;
};

const services: Service[] = [
  {
    title: "Platform backend engineering",
    description: "API and service design focused on reliability, performance, and clear operational boundaries.",
    icon: "◫",
  },
  {
    title: "Cloud & infrastructure",
    description: "Production environments with containerization, observability, and secure deployment workflows.",
    icon: "▣",
  },
  {
    title: "Automation pipelines",
    description: "Resilient document and browser automation systems with queues, retries, and monitoring.",
    icon: "✶",
  },
  {
    title: "Architecture advisory",
    description: "Pragmatic technical guidance for scaling teams and reducing delivery risk.",
    icon: "◎",
  },
];

export function ServicesSection() {
  return (
    <SectionShell
      id="services"
      eyebrow="Services"
      title="Capabilities built for enterprise outcomes."
      description="From architecture to operations, each engagement is structured for measurable business impact."
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {services.map((service, index) => (
          <motion.article
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.35, delay: index * 0.05 }}
            whileHover={{ y: -4 }}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-md shadow-slate-200/60 transition dark:border-slate-800 dark:bg-slate-900 dark:shadow-black/20"
          >
            <div className="flex items-start gap-4">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 text-lg text-white shadow-sm">
                {service.icon}
              </span>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{service.description}</p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </SectionShell>
  );
}
