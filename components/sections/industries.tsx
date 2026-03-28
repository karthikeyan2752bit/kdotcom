import Link from "next/link";

const industries = [
  {
    icon: "🏥",
    title: "Clinics and Hospitals",
    description: "Patient flow, appointments, and billing systems.",
    href: "/industries/clinic",
  },
  {
    icon: "🧺",
    title: "Laundry Businesses",
    description: "Pickup scheduling, tracking, and payment automation.",
    href: "/industries/laundry",
  },
  {
    icon: "🛒",
    title: "Retail Stores and Supermarkets",
    description: "Inventory sync, billing counters, and reporting.",
    href: "/industries/retail",
  },
  {
    icon: "🚗",
    title: "Car and Bike Showrooms",
    description: "Lead pipelines, service reminders, and dashboard insights.",
    href: "/industries/showroom",
  },
  {
    icon: "🏢",
    title: "Growing Offices",
    description: "Internal workflow software and team productivity tools.",
    href: "/industries/offices",
  },
];

export function IndustriesSection() {
  return (
    <section id="industries" className="section-tight bg-slate-50 py-16 sm:py-20 lg:py-24">
      <div className="mobile-shell mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-indigo-600 sm:text-sm">Industries</p>
          <h2 className="mt-3 text-[1.65rem] font-semibold leading-tight tracking-tight text-slate-900 sm:text-4xl">Trusted by operational teams across multiple sectors.</h2>
        </div>
        <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {industries.map((industry) => (
            <Link
              key={industry.title}
              href={industry.href}
              className="mobile-card group rounded-3xl border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-md"
            >
              <div className="text-2xl">{industry.icon}</div>
              <h3 className="mt-3 text-lg font-semibold text-slate-900">{industry.title}</h3>
              <p className="mt-1 text-base text-slate-600">{industry.description}</p>
              <span className="mt-3 inline-block text-base font-medium text-indigo-600 opacity-90 transition sm:opacity-0 group-hover:opacity-100">
                Explore solutions →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
