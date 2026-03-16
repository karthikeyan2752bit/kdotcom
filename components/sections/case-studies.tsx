"use client";
import { motion } from "framer-motion";
import { SectionShell } from "@/components/ui/section-shell";

type CaseStudy = {
  title: string;
  context: string;
  challenge: string;
  approach: string;
  outcome: string;
};

const caseStudies: CaseStudy[] = [
  {
    title: "Stabilizing a document pipeline under growth",
    context:
      "A growing business relied on manual document creation that started to break down as volume increased.",
    challenge:
      "Existing scripts were fragile, slow, and hard to observe, leading to missed SLAs and manual firefighting.",
    approach:
      "Re-architected the flow into a queue-backed HTML-to-PDF service using Puppeteer, Docker, and a centralized logging layer.",
    outcome:
      "Improved throughput and reliability while making incident debugging much faster through structured logs and metrics.",
  },
  {
    title: "Hardening a multi-service SaaS backend",
    context:
      "A SaaS product needed to prepare for more customers and higher expectations around reliability.",
    challenge:
      "Services were deployed inconsistently, with limited monitoring and unclear failure modes.",
    approach:
      "Containerized key services, introduced resource controls with cgroups, and layered in monitoring and alerting.",
    outcome:
      "Reduced unplanned downtime and provided clear operational visibility, enabling confident onboarding of new tenants.",
  },
];

export function CaseStudiesSection() {
  return (
    <SectionShell
      id="case-studies"
      eyebrow="Case Studies"
      title="Reliability work in real environments."
      description="A closer look at how backend, infrastructure, and automation changes translated into concrete improvements for teams."
    >
      <motion.div
        className="mt-6 space-y-5"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        {caseStudies.map((cs) => (
          <article
            key={cs.title}
            className="group rounded-2xl border border-slate-200 bg-[var(--color-surface)] p-5 shadow-sm shadow-slate-300/20 transition-transform duration-200 hover:-translate-y-1 hover:border-[var(--color-primary)]/40 hover:shadow-[0_20px_60px_rgba(15,23,42,0.12)]"
          >
            <h3 className="text-sm font-medium text-[var(--color-text-primary)]">{cs.title}</h3>
            <div className="mt-3 grid gap-3 text-xs text-[var(--color-text-secondary)] sm:grid-cols-3">
              <div>
                <p className="text-[11px] uppercase tracking-wide text-[var(--color-secondary)]">
                  Context
                </p>
                <p className="mt-1 text-[var(--color-text-secondary)]">{cs.context}</p>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wide text-[var(--color-secondary)]">
                  Challenge
                </p>
                <p className="mt-1 text-[var(--color-text-secondary)]">{cs.challenge}</p>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wide text-[var(--color-secondary)]">
                  Approach
                </p>
                <p className="mt-1 text-[var(--color-text-secondary)]">{cs.approach}</p>
              </div>
            </div>
            <div className="mt-3 rounded-xl border border-[var(--color-accent)]/25 bg-[var(--color-accent)]/10 p-3 text-xs text-[var(--color-secondary)]">
              <p className="text-[11px] uppercase tracking-wide text-[var(--color-accent)]">
                Outcome
              </p>
              <p className="mt-1">{cs.outcome}</p>
            </div>
          </article>
        ))}
      </motion.div>
    </SectionShell>
  );
}

