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
    <section id="solutions" className="py-20">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-indigo-600">Solutions</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Systems built around your business operations.</h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {solutions.map((solution) => (
            <article key={solution.title} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
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
