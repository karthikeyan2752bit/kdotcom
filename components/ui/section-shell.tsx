"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

type SectionShellProps = {
  id: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  align?: "left" | "center";
  entry?: "left" | "right" | "up" | "down" | "rotate";
  children: ReactNode;
};

const entryVariants = {
  left: { x: -42, y: 0, rotate: 0 },
  right: { x: 42, y: 0, rotate: 0 },
  up: { x: 0, y: 28, rotate: 0 },
  down: { x: 0, y: -28, rotate: 0 },
  rotate: { x: 0, y: 20, rotate: -2 },
};

export function SectionShell({
  id,
  eyebrow,
  title,
  description,
  align = "left",
  entry = "up",
  children,
}: SectionShellProps) {
  const centered = align === "center";

  return (
    <section id={id} className="relative flex min-h-screen snap-start scroll-mt-24 items-center py-18 sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent dark:via-cyan-900" />
      <motion.div
        className="mx-auto max-w-7xl px-6 lg:px-10"
        initial={{ opacity: 0, ...entryVariants[entry] }}
        whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        {(eyebrow || title || description) && (
          <div className={centered ? "mx-auto max-w-4xl text-center" : "max-w-4xl"}>
            {eyebrow && <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300">{eyebrow}</p>}
            {title && <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-100 sm:text-5xl lg:text-6xl">{title}</h2>}
            {description && <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-300">{description}</p>}
          </div>
        )}
        <div className="mt-12">{children}</div>
      </motion.div>
    </section>
  );
}
