"use client";

import { motion } from "framer-motion";
import { SectionShell } from "@/components/ui/section-shell";

export function ContactSection() {
  return (
    <SectionShell
      id="contact"
      eyebrow="Contact"
      title="Let’s plan your next platform milestone."
      description="Share your context and goals. I’ll respond with a practical path forward."
    >
      <div className="grid gap-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/50 md:grid-cols-[0.9fr_1.1fr] dark:border-slate-800 dark:bg-slate-900 dark:shadow-black/30">
        <div>
          <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">What clients usually ask</h3>
          <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
            <li>• Stabilizing backend reliability issues</li>
            <li>• Upgrading infrastructure and deployment pipelines</li>
            <li>• Designing automation workflows with clear ROI</li>
          </ul>
        </div>

        <motion.form
          action="https://formspree.io/f/xlgwqkok"
          method="POST"
          className="grid gap-4"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Name" name="name" />
            <Field label="Company" name="company" />
          </div>
          <Field label="Email" name="email" type="email" />
          <Field label="Project details" name="message" as="textarea" />
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button type="submit" className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200">
              Send inquiry
            </button>
            <a href="mailto:karthikeyan27522752@gmail.com" className="text-sm font-medium text-emerald-700 hover:underline dark:text-emerald-300">
              Email directly
            </a>
          </div>
        </motion.form>
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
        className="mt-1 w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-2.5 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:focus:ring-emerald-700/40"
      />
    </label>
  );
}
