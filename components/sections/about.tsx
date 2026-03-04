"use client";
import { motion } from "framer-motion";
import { SectionShell } from "@/components/ui/section-shell";

export function AboutSection() {
  return (
    <SectionShell
      id="about"
      eyebrow="About"
      title="Backend-focused engineer with a systems mindset."
      description="I build reliable systems that keep products running smoothly—even under load, failures, and changing requirements."
    >
      <div className="mx-auto flex flex-col gap-10 lg:flex-row">
        <div className="max-w-md space-y-4 text-sm text-zinc-400 sm:text-[15px] sm:leading-relaxed">
          <p>
            I&apos;m Karthikeyan M, a backend software engineer based in Tamil
            Nadu, India. My work typically spans API design, service
            orchestration, database modeling, Linux server setup, Dockerization,
            performance tuning, and automation pipelines for businesses that
            need their systems to just work.
          </p>
          <p>
            I care deeply about clear boundaries, predictable behavior in
            production, and giving teams the operational visibility they need to
            move quickly without surprises.
          </p>
        </div>

        <motion.div
          className="grid flex-1 gap-4 sm:grid-cols-2"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <AboutCard
            title="Backend engineering"
            items={[
              "Java, REST APIs, SaaS architectures",
              "Designs focused on reliability and clarity",
              "Production-grade logging and monitoring",
            ]}
          />
          <AboutCard
            title="Systems & infrastructure"
            items={[
              "Linux (Debian/Ubuntu), Docker, cgroups",
              "Server hardening and observability",
              "Capacity planning & performance tuning",
            ]}
          />
          <AboutCard
            title="Automation & workflows"
            items={[
              "Puppeteer-based browser automation",
              "HTML-to-PDF and document pipelines",
              "Workflow automation for operations teams",
            ]}
          />
          <AboutCard
            title="Consulting & guidance"
            items={[
              "Architecture and infrastructure reviews",
              "Scaling paths for SaaS products",
              "Long-term reliability roadmaps",
            ]}
          />
        </motion.div>
      </div>
    </SectionShell>
  );
}

interface AboutCardProps {
  title: string;
  items: string[];
}

function AboutCard({ title, items }: AboutCardProps) {
  return (
    <motion.article
      className="group rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4 shadow-sm shadow-black/60 transition-transform duration-200 hover:border-zinc-500/70"
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
    >
      <h3 className="text-sm font-medium text-zinc-100">{title}</h3>
      <ul className="mt-3 space-y-1.5 text-xs text-zinc-400">
        {items.map((item) => (
          <li key={item}>· {item}</li>
        ))}
      </ul>
    </motion.article>
  );
}

