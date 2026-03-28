import type { ReactNode } from "react";

export function HowWeWorkSection() {
  return (
    <section id="how-we-work" className="section-tight py-16 sm:py-20 lg:py-24">
      <div className="mobile-shell mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-600 sm:text-sm">
            How It Works
          </p>
          <h2 className="mt-3 text-[1.65rem] font-semibold leading-tight tracking-tight text-slate-900 sm:text-4xl">
            A clean path from planning to production.
          </h2>
        </div>

        <div className="mt-8 grid gap-4 md:mt-10 md:grid-cols-3 md:gap-5">
          <WorkCard
            title="Discover & Plan"
            text="Audit workflows and define the shortest reliable route to production."
            icon={
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M12 2l2.4 6.8L22 12l-7.6 3.2L12 22l-2.4-6.8L2 12l7.6-3.2L12 2z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinejoin="round"
                />
              </svg>
            }
          />
          <WorkCard
            title="Build & Automate"
            text="Implement APIs, infrastructure, and automation that runs reliably."
            icon={
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M8 7h12M8 12h12M8 17h12"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
                <path
                  d="M4 7h.01M4 12h.01M4 17h.01"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            }
          />
          <WorkCard
            title="Scale & Optimize"
            text="Tune performance, harden deployments, and improve observability."
            icon={
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M4 19l6-6 4 4 6-10"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20 7h-5"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            }
          />
        </div>
      </div>
    </section>
  );
}

function WorkCard({
  title,
  text,
  icon,
}: {
  title: string;
  text: string;
  icon: ReactNode;
}) {
  return (
    <article className="mobile-card rounded-3xl border border-slate-200 bg-white/70 p-6 shadow-[0_10px_30px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(15,23,42,0.12)]">
      <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
        {icon}
      </div>
      <h3 className="mt-4 text-xl font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-base leading-relaxed text-slate-600">{text}</p>
    </article>
  );
}
