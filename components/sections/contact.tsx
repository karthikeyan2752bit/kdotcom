"use client";

import { motion } from "framer-motion";
import { SectionShell } from "@/components/ui/section-shell";
import { Reveal } from "@/components/ui/reveal";

const expertise = [
  "Infrastructure as code strategy",
  "Platform observability architecture",
  "Automation and workflow acceleration",
  "Backend modernization roadmaps",
];

export function ContactSection() {
  return (
    <SectionShell
      id="automation"
      eyebrow="Automation Expertise"
      title="Automation that feels effortless, even at enterprise scale."
      description="I design automation ecosystems that improve speed and quality while keeping control and visibility in your hands."
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
        <Reveal>
          <div className="rounded-3xl border border-slate-200/80 bg-white/80 p-7 dark:border-slate-700 dark:bg-slate-900/70">
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">Interactive command demo</h3>
            <p className="mt-2 text-base text-slate-600 dark:text-slate-300">A miniature terminal snapshot demonstrating infra automation posture.</p>
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="mt-5 rounded-2xl border border-cyan-400/30 bg-slate-950 p-5 font-mono text-sm text-emerald-300"
            >
              <p>$ terraform plan --target=module.api_cluster</p>
              <p className="mt-2 text-cyan-300">Plan: +2 nodes, +1 queue, ~3 service updates</p>
              <p className="mt-2 text-slate-300">Status: policy checks passed • deployment safe</p>
            </motion.div>
            <ul className="mt-6 space-y-2 text-sm text-slate-600 dark:text-slate-300">
              {expertise.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div id="contact" className="rounded-3xl border border-slate-200/80 bg-white/85 p-7 dark:border-slate-700 dark:bg-slate-900/75">
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">Start a conversation</h3>
            <p className="mt-2 text-base text-slate-600 dark:text-slate-300">Share your roadmap and I&apos;ll propose a high-leverage backend strategy.</p>
            <form action="https://formspree.io/f/xlgwqkok" method="POST" className="mt-6 grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Name" name="name" />
                <Field label="Company" name="company" />
              </div>
              <Field label="Email" name="email" type="email" />
              <Field label="Current challenge" name="message" as="textarea" />
              <button type="submit" className="mt-2 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5">
                Send inquiry
              </button>
            </form>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}

interface FieldProps {
  label: string;
  name: string;
  type?: string;
  as?: "input" | "textarea";
}

function Field({ label, name, type = "text", as = "input" }: FieldProps) {
  const InputTag = as === "textarea" ? "textarea" : "input";

  return (
    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
      {label}
      <InputTag
        name={name}
        type={as === "input" ? type : undefined}
        rows={as === "textarea" ? 4 : undefined}
        className="mt-1.5 w-full rounded-xl border border-slate-300/80 bg-white/85 px-3.5 py-2.5 text-sm text-slate-900 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:focus:ring-cyan-700/40"
      />
    </label>
  );
}
