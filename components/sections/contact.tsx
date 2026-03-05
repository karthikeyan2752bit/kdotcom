"use client";

import { SectionShell } from "@/components/ui/section-shell";
import { Reveal } from "@/components/ui/reveal";

const expertise = [
  "Backend architecture and scaling strategy",
  "Reliability and observability improvements",
  "Workflow and document automation",
  "Modernization plans for cloud platforms",
];

export function ContactSection() {
  return (
    <SectionShell
      id="contact"
      eyebrow="Contact"
      title="Plan your next backend and automation milestone."
      description="Share your goals and constraints. I can help map a practical path from current state to a dependable SaaS platform."
    >
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <div className="rounded-3xl border border-slate-200/80 bg-white/80 p-7 dark:border-slate-700 dark:bg-slate-900/70">
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">What we can discuss</h3>
            <ul className="mt-5 space-y-3 text-sm text-slate-600 dark:text-slate-300">
              {expertise.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-3xl border border-slate-200/80 bg-white/85 p-7 dark:border-slate-700 dark:bg-slate-900/75">
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">Start a conversation</h3>
            <p className="mt-2 text-base text-slate-600 dark:text-slate-300">Tell me about your roadmap and I&apos;ll reply with a focused implementation approach.</p>
            <form
              action="https://formspree.io/f/xlgwqkok"
              method="POST"
              acceptCharset="UTF-8"
              className="mt-6 grid gap-4"
            >
              <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Name" name="name" autoComplete="name" required minLength={2} maxLength={80} />
                <Field label="Company" name="company" autoComplete="organization" maxLength={120} />
              </div>
              <Field label="Email" name="email" type="email" autoComplete="email" required maxLength={120} />
              <Field label="Current challenge" name="message" as="textarea" required minLength={20} maxLength={3000} />
              <button type="submit" className="mt-2 rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-emerald-500">
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
  autoComplete?: string;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
}

function Field({
  label,
  name,
  type = "text",
  as = "input",
  autoComplete,
  required = false,
  minLength,
  maxLength,
}: FieldProps) {
  const InputTag = as === "textarea" ? "textarea" : "input";

  return (
    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
      {label}
      <InputTag
        name={name}
        type={as === "input" ? type : undefined}
        autoComplete={autoComplete}
        required={required}
        minLength={minLength}
        maxLength={maxLength}
        rows={as === "textarea" ? 4 : undefined}
        className="mt-1.5 w-full rounded-xl border border-slate-300/80 bg-white/85 px-3.5 py-2.5 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:focus:ring-emerald-700/40"
      />
    </label>
  );
}
