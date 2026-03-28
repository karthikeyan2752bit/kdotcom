export function FinalCtaSection() {
  return (
    <section id="contact" className="section-tight bg-[var(--color-bg-secondary)] py-16 sm:py-20 lg:py-24">
      <div className="mobile-shell mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-10">
        <div className="rounded-3xl border border-emerald-100 bg-white px-5 py-10 text-center shadow-[0_28px_80px_-34px_rgba(16,185,129,0.24)] sm:px-12 sm:py-14">
          <h2 className="text-[1.7rem] font-semibold tracking-tight text-[var(--color-text-primary)] sm:text-4xl">Ready to automate your business operations?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-[var(--color-text-secondary)] sm:text-lg">
            Talk to us about your business and we will help design the right system for your workflow, team, and growth goals.
          </p>

          <form
            action="https://formspree.io/f/xlgwqkok"
            method="POST"
            acceptCharset="UTF-8"
            className="mx-auto mt-7 grid w-full max-w-3xl gap-4 rounded-2xl bg-[var(--color-bg-secondary)] p-5 text-left shadow-xl shadow-emerald-900/10 sm:mt-8 sm:p-8"
          >
            <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-emerald-300 focus:ring-2 focus:ring-emerald-100"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-emerald-300 focus:ring-2 focus:ring-emerald-100"
              />
            </div>
            <input
              type="text"
              name="business"
              placeholder="Business / Company Name"
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-emerald-300 focus:ring-2 focus:ring-emerald-100"
            />
            <textarea
              name="message"
              placeholder="Describe your business needs"
              rows={5}
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-emerald-300 focus:ring-2 focus:ring-emerald-100"
            />
            <button type="submit" className="mt-2 inline-flex h-12 w-full items-center justify-center rounded-xl bg-[var(--color-accent)] px-6 text-base font-semibold text-white shadow-lg shadow-emerald-900/20 transition duration-300 hover:scale-[1.02] hover:bg-emerald-600 sm:w-auto sm:text-sm">
              Discuss Your Business Needs
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
