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
    <section id="industries" className="bg-slate-50 py-20">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-indigo-600">Industries</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Trusted by operational teams across multiple sectors.</h2>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {industries.map((industry) => (
            <Link
              key={industry.title}
              href={industry.href}
              className="group rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-md"
            >
              <div className="text-2xl">{industry.icon}</div>
              <h3 className="mt-3 text-base font-semibold text-slate-900">{industry.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{industry.description}</p>
              <span className="mt-3 inline-block text-sm font-medium text-indigo-600 opacity-0 transition group-hover:opacity-100">
                Explore solutions →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
