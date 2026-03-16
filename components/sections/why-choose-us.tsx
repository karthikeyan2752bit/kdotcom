const features = [
  { title: "Custom Solutions", description: "Every system is designed around your specific business model." },
  { title: "Direct Developer Support", description: "You work directly with the team building your software." },
  { title: "Affordable for Growing Businesses", description: "Enterprise-level outcomes without enterprise-level pricing." },
  { title: "Reliable Technology", description: "Built on secure, scalable platforms with modern best practices." },
];

export function WhyChooseUsSection() {
  return (
    <section id="why-choose-us" className="bg-slate-50 py-20">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-indigo-600">Why Choose Us</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">A business-first partner for automation and software delivery.</h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {features.map((feature) => (
            <article key={feature.title} className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-slate-900">{feature.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
