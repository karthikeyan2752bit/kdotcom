const features = [
  { title: "Custom Solutions", description: "Every system is designed around your specific business model." },
  { title: "Direct Developer Support", description: "You work directly with the team building your software." },
  { title: "Affordable for Growing Businesses", description: "Enterprise-level outcomes without enterprise-level pricing." },
  { title: "Reliable Technology", description: "Built on secure, scalable platforms with modern best practices." },
];

export function WhyChooseUsSection() {
  return (
    <section id="why-choose-us" className="section-tight bg-slate-50 py-16 sm:py-20 lg:py-24">
      <div className="mobile-shell mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-indigo-600 sm:text-sm">Why Choose Us</p>
          <h2 className="mt-3 text-[1.65rem] font-semibold leading-tight tracking-tight text-slate-900 sm:text-4xl">A business-first partner for automation and software delivery.</h2>
        </div>
        <div className="mt-8 grid gap-4 md:mt-10 md:grid-cols-2 md:gap-5">
          {features.map((feature) => (
            <article key={feature.title} className="mobile-card rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(15,23,42,0.14)]">
              <h3 className="text-xl font-semibold text-slate-900">{feature.title}</h3>
              <p className="mt-2 text-base leading-relaxed text-slate-600">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
