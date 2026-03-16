"use client";

import { motion } from "framer-motion";
import { SectionShell } from "@/components/ui/section-shell";
import { Reveal } from "@/components/ui/reveal";

const modules = [
  { title: "Business automation systems", icon: "⚙️", detail: "Automate routine tasks, approvals, and status updates so your operations run smoothly every day." },
  { title: "Custom software development", icon: "🧩", detail: "Build software around your exact business model instead of forcing your team into generic tools." },
  { title: "Secure office systems", icon: "🔐", detail: "Set up dependable access, data protection, and internal systems for your staff and managers." },
  { title: "Customer and sales management", icon: "🤝", detail: "Track customer interactions, leads, follow-ups, and service quality in one organized system." },
  { title: "Data dashboards and reporting", icon: "📊", detail: "Give owners and managers a clear view of sales, operations, and performance without manual reports." },
  { title: "Reliable infrastructure", icon: "🛠️", detail: "Keep business software stable with proper server setup, backups, and ongoing technical support." },
];

export function ModulesSection() {
  return (
    <SectionShell
      id="modules"
      eyebrow="Our Expertise"
      title="What we can build and manage for your business."
      description="Our expertise combines software, automation, and dependable IT systems to support business growth."
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
