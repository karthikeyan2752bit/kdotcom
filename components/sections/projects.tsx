"use client";
import { motion } from "framer-motion";
import { SectionShell } from "@/components/ui/section-shell";

type Project = {
  name: string;
  problem: string;
  solution: string;
  technologies: string;
};

const projects: Project[] = [
  {
    name: "High Performance HTML to PDF System",
    problem:
      "Business-critical documents were generated manually or via slow, fragile scripts that could not keep up with growing volume.",
    solution:
      "Designed a queue-backed HTML-to-PDF service using headless Chrome, with batching, retries, and observability so failures were visible and recoverable.",
    technologies: "Java, Puppeteer, Docker, PostgreSQL, Linux, queues, logging/metrics",
  },
  {
    name: "Browser Automation Pipeline",
    problem:
      "Operations teams spent hours performing repetitive browser tasks for reporting and data collection.",
    solution:
      "Built a resilient automation pipeline that orchestrated Puppeteer workers, handled auth flows, and produced structured outputs ready for downstream systems.",
    technologies: "Puppeteer, headless Chrome, job orchestration, monitoring, Linux",
  },
  {
    name: "Containerized SaaS Deployment",
    problem:
      "A SaaS product was running on ad-hoc servers with inconsistent environments, making deployments risky and observability limited.",
    solution:
      "Containerized core services, introduced resource isolation with cgroups, and wired them into monitored environments across cloud infrastructure.",
    technologies: "Docker, Linux (Debian/Ubuntu), cgroups, monitoring/alerting, CI/CD",
  },
  {
    name: "Scalable Backend APIs on Cloud IaaS",
    problem:
      "Backend APIs needed to support more tenants and higher traffic while running on IaaS platforms with strict reliability expectations.",
    solution:
      "Designed and implemented API architectures with clear versioning, database access patterns, and horizontal scaling deployed on cloud IaaS like AWS.",
    technologies: "Java, REST APIs, PostgreSQL/MySQL, AWS and other IaaS platforms",
  },
];

export function ProjectsSection() {
  return (
    <SectionShell
      id="projects"
      eyebrow="Projects"
      title="Engineering work across backend, automation, and infrastructure."
      description="A snapshot of systems where reliability, performance, and operations mattered—from document pipelines to cloud-hosted SaaS backends."
    >
      <div className="mt-6 grid gap-5 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1.2fr)]">
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          {projects.map((project) => (
            <motion.article
              key={project.name}
              className="group rounded-2xl border border-zinc-800 bg-gradient-to-b from-zinc-950 via-zinc-950/90 to-black/90 p-5 shadow-sm shadow-black/60 transition-transform duration-200 hover:-translate-y-1 hover:border-zinc-500/70 hover:shadow-[0_20px_60px_rgba(0,0,0,0.9)]"
              whileHover={{ y: -6, scale: 1.01 }}
            >
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-sm font-medium text-zinc-100">
                  {project.name}
                </h3>
              </div>
              <div className="mt-3 grid gap-3 text-xs text-zinc-300 sm:grid-cols-2">
                <div>
                  <p className="text-[11px] uppercase tracking-wide text-zinc-500">
                    Problem
                  </p>
                  <p className="mt-1 text-zinc-300">{project.problem}</p>
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-wide text-zinc-500">
                    Solution
                  </p>
                  <p className="mt-1 text-zinc-300">{project.solution}</p>
                </div>
              </div>
              <p className="mt-3 text-xs text-zinc-500">
                Technologies:{" "}
                <span className="text-zinc-300">{project.technologies}</span>
              </p>
            </motion.article>
          ))}
        </motion.div>

        <motion.aside
          className="flex flex-col gap-4 rounded-2xl border border-zinc-800 bg-zinc-950/70 p-5 text-xs text-zinc-300 shadow-sm shadow-black/60"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.45, ease: "easeOut", delay: 0.06 }}
        >
          <p className="text-[11px] uppercase tracking-[0.18em] text-zinc-500">
            How I approach projects
          </p>
          <p className="text-zinc-300">
            I tend to work best with teams that value clear communication,
            realistic trade-offs, and long-term reliability.
          </p>
          <ul className="space-y-1.5 text-zinc-300">
            <li>· Start from requirements and constraints, not just tools.</li>
            <li>
              · Design for observability and failure scenarios from day one.
            </li>
            <li>· Keep interfaces small, explicit, and well-documented.</li>
            <li>· Iterate with safety nets: tests, metrics, and alerts.</li>
          </ul>
          <p className="mt-2 text-zinc-500">
            The goal is a system that doesn&apos;t just pass tests, but behaves
            predictably in production.
          </p>
        </motion.aside>
      </div>
    </SectionShell>
  );
}

