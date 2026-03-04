"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

type SectionShellProps = {
  id: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  align?: "left" | "center";
  children: ReactNode;
};

const fadeIn = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export function SectionShell({
  id,
  eyebrow,
  title,
  description,
  align = "left",
  children,
}: SectionShellProps) {
  const centered = align === "center";

  return (
    <section id={id} className="relative py-20 sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent dark:via-slate-800" />

      <motion.div
        className="mx-auto max-w-6xl px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.08 }}
      >
        {(eyebrow || title || description) && (
          <motion.div
            variants={fadeIn}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}
          >
            {eyebrow && (
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-700 dark:text-emerald-300">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-slate-50">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
                {description}
              </p>
            )}
          </motion.div>
        )}

        <motion.div variants={fadeIn} transition={{ duration: 0.45, ease: "easeOut" }} className="mt-12">
          {children}
        </motion.div>
      </motion.div>
    </section>
  );
}
