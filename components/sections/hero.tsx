 "use client";
import { motion, Variants } from "framer-motion";

const container: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
      staggerChildren: 0.08,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden border-b border-zinc-800/80 bg-gradient-to-b from-zinc-950 via-black to-zinc-950"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-10 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute right-0 top-40 h-72 w-72 rounded-full bg-zinc-500/10 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-700/60 to-transparent" />
      </div>

      <motion.div
        className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6 py-24 lg:flex-row lg:items-center lg:justify-between lg:px-8 lg:py-28"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="max-w-xl space-y-7" variants={item}>
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/70 px-3 py-1 text-[11px] font-medium text-zinc-300 shadow-sm shadow-zinc-900/70 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(74,222,128,0.9)]" />
            Engineering reliable backend & infrastructure
          </div>

          <motion.h1
            className="text-balance text-4xl font-semibold tracking-tight text-zinc-50 sm:text-5xl md:text-6xl"
            variants={item}
          >
            Engineering{" "}
            <span className="bg-gradient-to-r from-zinc-50 via-zinc-200 to-emerald-300 bg-clip-text text-transparent">
              Reliable Systems
            </span>{" "}
            for Businesses
          </motion.h1>

          <motion.p
            className="max-w-lg text-balance text-[15px] leading-relaxed text-zinc-400 sm:text-lg"
            variants={item}
          >
            Backend systems, infrastructure, and automation solutions for
            startups and organizations. From APIs and databases to deployment,
            monitoring, and workflow automation.
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center gap-4"
            variants={item}
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-zinc-100 px-5 py-2.5 text-sm font-medium text-black shadow-[0_18px_40px_rgba(24,24,27,0.9)] transition hover:-translate-y-0.5 hover:bg-zinc-200"
            >
              Discuss a project
              <span aria-hidden>↗</span>
            </a>

            <a
              href="#projects"
              className="inline-flex items-center text-sm font-medium text-zinc-300 transition hover:text-zinc-100"
            >
              View selected work
            </a>
          </motion.div>

          <motion.div
            className="mt-7 grid gap-4 text-xs text-zinc-300 sm:grid-cols-3"
            variants={item}
          >
            <div className="rounded-2xl border border-zinc-800/80 bg-zinc-900/60 p-4 shadow-inner shadow-zinc-950/60">
              <p className="text-[11px] uppercase tracking-wide text-zinc-500">
                Focus
              </p>
              <p className="mt-1 font-medium text-zinc-100">
                SaaS backends & infrastructure
              </p>
              <p className="mt-1 text-xs text-zinc-500">
                APIs, services, observability, and reliability by design.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-800/80 bg-zinc-900/60 p-4 shadow-inner shadow-zinc-950/60">
              <p className="text-[11px] uppercase tracking-wide text-zinc-500">
                Stack
              </p>
              <p className="mt-1 font-medium text-zinc-100">
                Java · Linux · Docker · SQL
              </p>
              <p className="mt-1 text-xs text-zinc-500">
                PostgreSQL, MySQL, containerized services, tuned for Linux.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-800/80 bg-zinc-900/60 p-4 shadow-inner shadow-zinc-950/60">
              <p className="text-[11px] uppercase tracking-wide text-zinc-500">
                Automation
              </p>
              <p className="mt-1 font-medium text-zinc-100">
                Browser & document workflows
              </p>
              <p className="mt-1 text-xs text-zinc-500">
                Puppeteer pipelines, HTML-to-PDF, and workflow automation.
              </p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex w-full max-w-md flex-col gap-4 rounded-3xl border border-zinc-800/80 bg-zinc-950/80 p-4 shadow-[0_18px_60px_rgba(0,0,0,0.9)] sm:p-5 md:p-6"
          variants={item}
        >
          <div className="flex items-center justify-between">
            <div className="text-xs text-zinc-400">
              <p className="text-[11px] uppercase tracking-wide text-zinc-500">
                Systems snapshot
              </p>
              <p className="mt-1 text-sm font-medium text-zinc-100">
                Production-ready by default
              </p>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-zinc-900/80 px-3 py-1 text-[11px] font-medium text-zinc-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(74,222,128,0.9)]" />
              Uptime & reliability
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs">
            <Stat label="APIs shipped" value="50+" />
            <Stat label="Services containerized" value="30+" />
            <Stat label="Doc pipelines" value="High-volume" />
            <Stat label="Regions deployed" value="Multi-region" />
          </div>

          <div className="mt-1 space-y-2 rounded-2xl border border-zinc-800/80 bg-zinc-900/50 p-3 text-xs text-zinc-300">
            <p className="text-[11px] uppercase tracking-wide text-zinc-500">
              What I help with
            </p>
            <ul className="space-y-1.5 text-xs text-zinc-300">
              <li>· Designing resilient backend architectures for SaaS</li>
              <li>· Hardening Linux servers and containerized workloads</li>
              <li>· Building automation for documents and browser flows</li>
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

interface StatProps {
  label: string;
  value: string;
}

function Stat({ label, value }: StatProps) {
  return (
    <div className="rounded-2xl border border-zinc-800/80 bg-zinc-950/60 p-3">
      <p className="text-[11px] uppercase tracking-wide text-zinc-500">
        {label}
      </p>
      <p className="mt-1 text-sm font-semibold text-zinc-100">{value}</p>
    </div>
  );
}

