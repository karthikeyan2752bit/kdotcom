"use client";

import { motion, useReducedMotion } from "framer-motion";

export function AnimatedBackground() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-clip">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(16,185,129,0.14),transparent_42%),radial-gradient(circle_at_85%_5%,rgba(20,184,166,0.1),transparent_38%),radial-gradient(circle_at_75%_85%,rgba(99,102,241,0.1),transparent_42%),radial-gradient(circle_at_50%_90%,rgba(15,23,42,0.12),transparent_45%)] dark:bg-[radial-gradient(circle_at_15%_15%,rgba(16,185,129,0.16),transparent_40%),radial-gradient(circle_at_85%_5%,rgba(15,118,110,0.16),transparent_38%),radial-gradient(circle_at_75%_85%,rgba(129,140,248,0.18),transparent_40%),radial-gradient(circle_at_50%_90%,rgba(15,23,42,0.5),transparent_45%)]" />

      <motion.div
        className="absolute left-1/2 top-[8vh] h-[24rem] w-[24rem] -translate-x-[62%] rounded-full bg-emerald-500/14 blur-3xl will-change-transform md:h-[28rem] md:w-[28rem]"
        animate={reduceMotion ? undefined : { x: [0, 28, 0], y: [0, 18, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-1/2 top-[30vh] h-[20rem] w-[20rem] -translate-x-[8%] rounded-full bg-cyan-400/12 blur-3xl will-change-transform md:h-[24rem] md:w-[24rem] dark:bg-cyan-500/12"
        animate={reduceMotion ? undefined : { x: [0, -20, 0], y: [0, -14, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(15,23,42,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.08)_1px,transparent_1px)] [background-size:60px_60px] dark:opacity-25 dark:[background-image:linear-gradient(rgba(148,163,184,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.12)_1px,transparent_1px)]" />
    </div>
  );
}
