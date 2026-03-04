"use client";
import { ReactNode } from "react";
import { motion } from "framer-motion";

type SectionShellProps = {
  id: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  align?: "left" | "center";
  children: ReactNode;
};

const fadeInVariants = {
  hidden: { opacity: 0, y: 24 },
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
  const isCentered = align === "center";

  return (
    <section
      id={id}
      className="relative border-zinc-800/80 bg-gradient-to-b from-black/0 via-black/40 to-black/0 py-20 sm:py-24"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-800/60 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-zinc-800/60 to-transparent" />

      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-zinc-900/10 via-transparent to-transparent" />

      <motion.div
        className="relative mx-auto max-w-6xl px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        transition={{ staggerChildren: 0.06 }}
      >
        {(eyebrow || title || description) && (
          <motion.div
            className={
              isCentered
                ? "mx-auto max-w-2xl text-center"
                : "max-w-2xl sm:max-w-3xl"
            }
            variants={fadeInVariants}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {eyebrow && (
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="mt-3 text-balance text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl md:text-[32px] md:leading-tight">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-3 text-sm text-zinc-400 sm:text-[15px] sm:leading-relaxed">
                {description}
              </p>
            )}
          </motion.div>
        )}

        <motion.div
          className={isCentered ? "mt-10" : "mt-10 sm:mt-12"}
          variants={fadeInVariants}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      </motion.div>
    </section>
  );
}

