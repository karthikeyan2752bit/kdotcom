const trustedCompanies = ["Northlane", "Velora", "PrismIQ", "Atlas Retail", "CoreSphere", "AvenueOps"];

export function TrustedBySection() {
  return (
    <section aria-label="Trusted by" className="border-y border-slate-200/70 bg-white/70 py-10">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
        <p className="text-center text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Trusted by growing businesses</p>
        <div className="mt-6 grid gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {trustedCompanies.map((company) => (
            <div
              key={company}
              className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-center text-sm font-semibold tracking-wide text-slate-500 shadow-sm"
            >
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
