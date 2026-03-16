export function FinalCtaSection() {
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto w-full max-w-5xl px-6 lg:px-10">
        <div className="rounded-3xl bg-indigo-600 px-8 py-14 text-center shadow-[0_28px_80px_-34px_rgba(79,70,229,0.6)] sm:px-12">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Ready to automate your business operations?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-indigo-100 sm:text-lg">
            Talk to us about your business and we will help design the right system for your workflow, team, and growth goals.
          </p>

          <form
            action="https://formspree.io/f/xlgwqkok"
            method="POST"
            acceptCharset="UTF-8"
            className="mx-auto mt-8 grid w-full max-w-3xl gap-4 rounded-2xl bg-white/95 p-6 text-left shadow-xl shadow-indigo-900/10 sm:p-8"
          >
            <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-indigo-300 focus:ring-2 focus:ring-indigo-200"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-indigo-300 focus:ring-2 focus:ring-indigo-200"
              />
            </div>
            <input
              type="text"
              name="business"
              placeholder="Business / Company Name"
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-indigo-300 focus:ring-2 focus:ring-indigo-200"
            />
            <textarea
              name="message"
              placeholder="Describe your business needs"
              rows={5}
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-indigo-300 focus:ring-2 focus:ring-indigo-200"
            />
            <button
              type="submit"
              className="mt-2 inline-flex items-center justify-center rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-indigo-700"
            >
              Discuss Your Business Needs
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
