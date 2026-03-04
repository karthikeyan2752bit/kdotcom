"use client";
import { motion } from "framer-motion";
import { SectionShell } from "@/components/ui/section-shell";

type Service = {
  title: string;
  description: string;
  icon: string;
};

const services: Service[] = [
  {
    title: "SaaS Backend Development",
    description:
      "Design and build API-first backends for SaaS products with clear boundaries, observability, and production-ready reliability.",
    icon: "grid",
  },
  {
    title: "Linux Infrastructure Setup",
    description:
      "Provision and harden Linux servers, Dockerized workloads, and monitoring so your services run predictably in production.",
    icon: "terminal",
  },
  {
    title: "Automation Systems",
    description:
      "Automate document-heavy and browser-based workflows using Puppeteer, queues, and robust error handling.",
    icon: "sparkles",
  },
  {
    title: "System Architecture Consulting",
    description:
      "Review, stress-test, and evolve your architecture for scale, reliability, and maintainable operations.",
    icon: "nodes",
  },
];

export function ServicesSection() {
  return (
    <SectionShell
      id="services"
      eyebrow="Services"
      title="From backend architecture to automation systems."
      description="I partner with teams that care about reliability, clarity, and long-term maintainability—whether you're building a new product or evolving an existing one."
    >
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
        <p className="max-w-xs text-xs text-zinc-500">
          Engagements typically start with a focused discovery call and systems
          review, followed by a clear, practical plan.
        </p>
      </div>

      <motion.div
        className="mt-8 grid gap-5 sm:grid-cols-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {services.map((service) => (
          <motion.article
            key={service.title}
            className="group flex flex-col rounded-2xl border border-zinc-800 bg-gradient-to-b from-zinc-950 via-zinc-950/90 to-black/90 p-5 shadow-sm shadow-black/60 transition-transform duration-200 hover:-translate-y-1 hover:border-zinc-500/70 hover:shadow-[0_20px_60px_rgba(0,0,0,0.9)]"
            whileHover={{ y: -6, scale: 1.01 }}
          >
            <div className="flex items-start gap-3">
              <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-900/70 text-xs text-zinc-100 shadow-inner shadow-black/60 transition-colors group-hover:border-zinc-500/70 group-hover:bg-zinc-900">
                {service.icon === "grid" && (
                  <span className="inline-block h-4 w-4 rounded-[6px] border border-zinc-500/70 bg-gradient-to-br from-zinc-200/80 via-zinc-500/40 to-zinc-900/80" />
                )}
                {service.icon === "terminal" && (
                  <span className="inline-flex h-4 w-5 items-center justify-start text-[11px] text-emerald-300">
                    $
                  </span>
                )}
                {service.icon === "sparkles" && (
                  <span className="inline-block text-[13px] text-emerald-300">
                    ✶
                  </span>
                )}
                {service.icon === "nodes" && (
                  <span className="inline-block h-4 w-4">
                    <span className="block h-1 w-1 rounded-full bg-zinc-300" />
                    <span className="mt-1 block h-0.5 w-full rounded-full bg-zinc-700" />
                    <span className="mt-1 block h-1 w-1 rounded-full bg-zinc-300" />
                  </span>
                )}
              </div>
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-zinc-100">
                  {service.title}
                </h3>
                <p className="text-xs text-zinc-400">{service.description}</p>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </SectionShell>
  );
}

