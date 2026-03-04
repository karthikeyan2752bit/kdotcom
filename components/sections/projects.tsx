"use client";

import { motion } from "framer-motion";
import { SectionShell } from "@/components/ui/section-shell";

type Project = {
  name: string;
  summary: string;
  impact: string;
  stack: string;
};

const projects: Project[] = [
  {
    name: "High-volume document platform",
    summary: "Rebuilt document generation into a queue-backed service with structured observability.",
    impact: "Faster generation, fewer failures, and easier incident response for operations teams.",
    stack: "Java · Puppeteer · Docker · PostgreSQL",
  },
  {
    name: "Automation delivery pipeline",
    summary: "Designed browser workflow workers for repetitive ops tasks and reporting.",
    impact: "Reduced manual effort and improved consistency across recurring operational processes.",
    stack: "Puppeteer · Job orchestration · Linux",
  },
  {
    name: "Containerized SaaS modernization",
    summary: "Moved ad-hoc services into standardized container environments with monitoring.",
    impact: "Safer deployments and stronger reliability as tenant usage expanded.",
    stack: "Docker · cgroups · Monitoring",
  },
];

export function ProjectsSection() {
  return (
    <SectionShell
      id="projects"
      eyebrow="Projects"
      title="Selected platform and infrastructure work."
      description="A concise view of systems delivered for performance, reliability, and operational confidence."
    >
      <div className="grid gap-5 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.article
            key={project.name}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
            whileHover={{ y: -4 }}
            className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-md shadow-slate-200/60 dark:border-slate-800 dark:bg-slate-900 dark:shadow-black/20"
          >
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{project.name}</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{project.summary}</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-700 dark:text-slate-200">{project.impact}</p>
            <p className="mt-5 text-xs font-medium uppercase tracking-wide text-emerald-700 dark:text-emerald-300">{project.stack}</p>
          </motion.article>
        ))}
      </div>
    </SectionShell>
  );
}
