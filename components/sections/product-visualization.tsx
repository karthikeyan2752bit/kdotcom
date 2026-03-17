const productHighlights = [
  {
    title: "Executive Analytics",
    description: "Track revenue, churn, order value, and team throughput in a single dashboard.",
    metric: "+34%",
    label: "Operational efficiency",
  },
  {
    title: "Automation Flows",
    description: "Trigger billing reminders, fulfillment tasks, and customer follow-ups automatically.",
    metric: "12h",
    label: "Saved weekly per team",
  },
  {
    title: "Unified Management",
    description: "Control inventory, CRM activity, appointments, and approval queues from one system.",
    metric: "99.9%",
    label: "System availability",
  },
];

export function ProductVisualizationSection() {
  return (
    <section className="py-24">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-10">
        <div className="space-y-5">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-indigo-600">Product Visualization</p>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">See your operations on one intelligent control layer.</h2>
          <p className="max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Every platform we build ships with analytics, workflow automation, and business management modules so owners and operators always know what to act on next.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {productHighlights.map((item) => (
              <article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
                <p className="mt-5 text-2xl font-semibold text-indigo-700">{item.metric}</p>
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-slate-500">{item.label}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_24px_60px_-32px_rgba(30,58,138,0.45)]">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <div className="grid gap-4">
              <div className="rounded-xl bg-white p-4 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Revenue overview</p>
                <div className="mt-3 grid grid-cols-3 gap-2">
                  <div className="rounded-lg bg-emerald-50 p-3 text-emerald-700">
                    <p className="text-xs font-medium">MRR</p>
                    <p className="text-lg font-semibold">$248k</p>
                  </div>
                  <div className="rounded-lg bg-indigo-50 p-3 text-indigo-700">
                    <p className="text-xs font-medium">Orders</p>
                    <p className="text-lg font-semibold">1,284</p>
                  </div>
                  <div className="rounded-lg bg-amber-50 p-3 text-amber-700">
                    <p className="text-xs font-medium">Fulfilled</p>
                    <p className="text-lg font-semibold">97.2%</p>
                  </div>
                </div>
              </div>
              <div className="rounded-xl bg-white p-4 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Automation queue</p>
                <div className="mt-3 space-y-2">
                  {["Invoice reminders", "Stock low alerts", "Customer onboarding"].map((flow, index) => (
                    <div key={flow} className="flex items-center justify-between rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700">
                      <span>{flow}</span>
                      <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-700">{index + 4} active</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
