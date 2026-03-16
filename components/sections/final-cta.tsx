export function FinalCtaSection() {
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto w-full max-w-5xl px-6 lg:px-10">
        <div className="rounded-3xl bg-indigo-600 px-8 py-14 text-center shadow-[0_28px_80px_-34px_rgba(79,70,229,0.6)] sm:px-12">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Ready to automate your business operations?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-indigo-100 sm:text-lg">
            Talk to us about your business and we will help design the right system for your workflow, team, and growth goals.
          </p>
          <a
            href="mailto:contact@parilabs.com"
            className="mt-8 inline-flex rounded-xl bg-white px-6 py-3 text-sm font-semibold text-indigo-700 transition hover:-translate-y-0.5 hover:bg-indigo-50"
          >
            Discuss Your Business Needs
          </a>
        </div>
      </div>
    </section>
  );
}
