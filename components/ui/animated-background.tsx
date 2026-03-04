"use client";

import { motion } from "framer-motion";

export function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.16),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(6,182,212,0.12),transparent_36%),radial-gradient(circle_at_50%_90%,rgba(14,116,144,0.14),transparent_46%)]" />

      <motion.div
        className="absolute -left-20 top-10 h-96 w-96 rounded-full bg-emerald-400/20 blur-3xl dark:bg-emerald-500/15"
        animate={{ x: [0, 60, 0], y: [0, 30, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-0 top-32 h-[28rem] w-[28rem] rounded-full bg-cyan-300/20 blur-3xl dark:bg-cyan-500/10"
        animate={{ x: [0, -40, 0], y: [0, -20, 0] }}
        transition={{ duration: 17, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(15,23,42,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.08)_1px,transparent_1px)] [background-size:64px_64px] dark:opacity-30 dark:[background-image:linear-gradient(rgba(148,163,184,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.12)_1px,transparent_1px)]" />

      {Array.from({ length: 12 }).map((_, index) => (
        <motion.span
          key={index}
          className="absolute h-1.5 w-1.5 rounded-full bg-emerald-500/80 shadow-[0_0_12px_rgba(16,185,129,0.7)] dark:bg-emerald-300/90"
          style={{
            left: `${8 + index * 8}%`,
            top: `${10 + ((index * 9) % 80)}%`,
          }}
          animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.4, 0.8] }}
          transition={{ duration: 3 + (index % 4), repeat: Infinity, delay: index * 0.25 }}
        />
      ))}
    </div>
  );
}
