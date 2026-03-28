const trustedCompanies = ["Northlane", "Velora", "PrismIQ", "Atlas Retail", "CoreSphere", "AvenueOps"];

export function TrustedBySection() {
  return (
    <section aria-label="Trusted by" className="section-tight py-12 sm:py-16">
      <div className="mobile-shell mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="rounded-3xl border border-slate-200/80 bg-white/80 px-5 py-6 shadow-[0_14px_32px_-24px_rgba(15,23,42,0.3)] backdrop-blur-sm sm:px-10 sm:py-8">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 sm:text-sm">Trusted by growing businesses</p>
          <div className="mt-7 grid gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {trustedCompanies.map((company) => (
              <div
                key={company}
                className="rounded-xl border border-slate-200/80 bg-white px-4 py-3 text-center text-sm font-semibold tracking-[0.08em] text-slate-500 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md"
              >
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
