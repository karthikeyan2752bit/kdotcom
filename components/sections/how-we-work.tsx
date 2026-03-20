const steps = [
  { title: "Understand Your Business", description: "We audit your workflows, bottlenecks, and team priorities." },
  { title: "Design The System", description: "We map your operations into clear software and automation flows." },
  { title: "Build and Deploy", description: "We develop, test, and launch your solution with zero guesswork." },
  { title: "Ongoing Support", description: "We maintain, improve, and scale your system as your business grows." },
];

export function HowWeWorkSection() {
  return (
    <section id="how-we-work" className="py-24">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-indigo-600">How We Work</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">A clear process from consultation to long-term support.</h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, index) => (
            <article key={step.title} className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(15,23,42,0.14)]">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-sm font-semibold text-white">{index + 1}</span>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{step.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
