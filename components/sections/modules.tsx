"use client";

import { useReducedMotion } from "framer-motion";
import { SectionShell } from "@/components/ui/section-shell";

const modules = [
  { title: "Billing & Inventory Management", icon: "💳", detail: "Track sales, stock movement, and invoicing from one connected system." },
  { title: "HR Management Automation", icon: "👥", detail: "Manage attendance, leave, onboarding, and payroll workflows with fewer manual steps." },
  { title: "Internal Workflow Software", icon: "🗂️", detail: "Route internal tasks with approvals, ownership, and status tracking across departments." },
  { title: "Customer Management Systems", icon: "🤝", detail: "Capture leads, manage customer interactions, and follow up consistently from one place." },
  { title: "Reporting Dashboards", icon: "📊", detail: "Give managers clear dashboards for operations, finance, and performance trends." },
  { title: "Document Automation", icon: "📄", detail: "Generate, validate, and process business documents with templates and approval logic." },
];

const carouselItems = [...modules, ...modules];

export function ModulesSection() {
  const reduceMotion = useReducedMotion();

  return (
    <SectionShell
      id="modules"
      eyebrow="Business Software Modules"
      title="Common modules we build to modernize operations."
      description="These modules can be delivered individually or combined into a full business platform based on your priorities."
      entry="rotate"
    >
      <div className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/60 p-4 dark:border-slate-700 dark:bg-slate-900/40">
        <div className={`flex w-max gap-4 ${reduceMotion ? "" : "animate-[marquee_34s_linear_infinite] group-hover:[animation-play-state:paused]"}`}>
          {carouselItems.map((module, index) => (
            <article
              key={`${module.title}-${index}`}
              className="w-[18.5rem] shrink-0 rounded-2xl border border-slate-200/80 bg-white/90 p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900/85"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500/20 to-violet-500/20 text-lg">
                {module.icon}
              </div>
              <h3 className="mt-3 text-lg font-semibold text-slate-900 dark:text-slate-100">{module.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{module.detail}</p>
            </article>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent dark:from-slate-900" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent dark:from-slate-900" />
      </div>
      <p className="mt-4 text-xs text-slate-500 dark:text-slate-400">Hover over the carousel to pause movement.</p>
    </SectionShell>
  );
}
