"use client";

import { motion } from "framer-motion";

const solutions = [
  {
    icon: "💼",
    title: "Business Software",
    description: "Custom billing, inventory, and CRM platforms tailored to your workflow.",
  },
  {
    icon: "⚙️",
    title: "Automation Systems",
    description: "Appointment flows, customer follow-ups, and task routing to reduce manual effort.",
  },
  {
    icon: "📊",
    title: "Business Dashboards",
    description: "Live analytics and reporting tools that help owners make faster decisions.",
  },
  {
    icon: "🛡️",
    title: "IT Infrastructure",
    description: "Secure office server setup and reliable internal systems for growing teams.",
  },
];

export function SolutionsSection() {
  return (
    <section id="solutions" className="py-24">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(300px,0.82fr)]">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-indigo-600">Solutions</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Systems built around your business operations.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              We design dependable workflows and SaaS products that remove repetitive tasks while keeping your teams connected through one operational backbone.
            </p>
          </div>

          <motion.article
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.5 }}
            className="solution-video-card"
          >
            <div className="solution-video-bar">
              <span />
              <span />
              <span />
            </div>
            <div className="solution-video-frame">
              <video autoPlay muted loop playsInline preload="metadata" aria-label="Pari Labs product dashboard preview">
                <source src="/media/SaaS_Automation_Background_Video_Generation.mp4" type="video/mp4" />
              </video>
            </div>
          </motion.article>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {solutions.map((solution) => (
            <article
              key={solution.title}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(15,23,42,0.14)]"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-lg">{solution.icon}</div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{solution.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{solution.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
