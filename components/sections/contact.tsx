"use client";

import { SectionShell } from "@/components/ui/section-shell";
import { Reveal } from "@/components/ui/reveal";

const discussionTopics = [
  "What process is taking too much manual work today",
  "Which software your team currently uses",
  "What you want to automate first",
  "How quickly you want to launch",
];

export function ContactSection() {
  return (
    <SectionShell
      id="contact"
      eyebrow="Contact"
      title="Have an idea for your business? Let’s build the right system for it."
      description="Tell us about your business and the challenges you want to solve. We will recommend a practical software or IT setup that fits your needs."
    >
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <div className="rounded-3xl border border-slate-200/80 bg-[var(--color-surface)] p-7 ">
            <h3 className="text-2xl font-semibold text-[var(--color-text-primary)]">What we can discuss</h3>
            <ul className="mt-5 space-y-3 text-sm text-[var(--color-text-secondary)]">
              {discussionTopics.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-3xl border border-slate-200/80 bg-[var(--color-surface)] p-7 ">
            <h3 className="text-2xl font-semibold text-[var(--color-text-primary)]">Discuss your business needs</h3>
            <p className="mt-2 text-base text-[var(--color-text-secondary)]">Share your details and goals. We&apos;ll get back to you with next steps and a clear plan.</p>
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
              <Field label="What would you like to improve?" name="message" as="textarea" required minLength={20} maxLength={3000} />
              <button type="submit" className="mt-2 rounded-full bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-[var(--color-button-text)] transition hover:-translate-y-0.5 hover:bg-emerald-700">
                Discuss Your Business Needs
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
    <label className="text-sm font-medium text-[var(--color-secondary)]">
      {label}
      <InputTag
        name={name}
        type={as === "input" ? type : undefined}
        autoComplete={autoComplete}
        required={required}
        minLength={minLength}
        maxLength={maxLength}
        rows={as === "textarea" ? 4 : undefined}
        className="mt-1.5 w-full rounded-xl border border-slate-300/80 bg-[var(--color-surface)] px-3.5 py-2.5 text-sm text-[var(--color-text-primary)] outline-none transition focus:border-[var(--color-accent)] focus:ring-2 focus:ring-emerald-200/70"
      />
    </label>
  );
}
