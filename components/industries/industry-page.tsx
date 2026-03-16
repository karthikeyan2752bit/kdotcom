import Link from "next/link";

interface ContentItem {
  title: string;
  description: string;
}

interface IndustryPageProps {
  industry: string;
  heroTitle: string;
  heroDescription: string;
  problems: ContentItem[];
  solutions: ContentItem[];
  systems: string[];
  ctaText: string;
}

export function IndustryPage({
  industry,
  heroTitle,
  heroDescription,
  problems,
  solutions,
  systems,
  ctaText,
}: IndustryPageProps) {
  return (
    <main className="bg-slate-50">
      <section className="relative overflow-hidden border-b border-slate-200 bg-white py-18">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-indigo-600">Industry Solutions</p>
          <h1 className="mt-3 max-w-4xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">{heroTitle}</h1>
          <p className="mt-5 max-w-3xl text-lg text-slate-600">{heroDescription}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/#contact" className="rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700">
              Discuss your business needs
            </Link>
            <Link href="/#industries" className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-indigo-300 hover:text-indigo-700">
              See all industries
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid w-full max-w-7xl gap-6 px-6 lg:grid-cols-2 lg:px-10">
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900">Common problems</h2>
            <div className="mt-5 space-y-4">
              {problems.map((item) => (
                <article key={item.title}>
                  <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{item.description}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900">Automation solutions</h2>
            <div className="mt-5 space-y-4">
              {solutions.map((item) => (
                <article key={item.title}>
                  <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900">Example systems for {industry}</h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {systems.map((item) => (
                <li key={item} className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto w-full max-w-4xl px-6 lg:px-10">
          <div className="rounded-3xl bg-indigo-600 px-8 py-12 text-center shadow-[0_24px_60px_-32px_rgba(79,70,229,0.7)]">
            <h2 className="text-3xl font-semibold text-white">{ctaText}</h2>
            <p className="mx-auto mt-3 max-w-xl text-indigo-100">We build practical software systems tailored to your workflows, team capacity, and growth stage.</p>
            <Link href="/#contact" className="mt-7 inline-flex rounded-xl bg-white px-5 py-3 text-sm font-semibold text-indigo-700 transition hover:bg-indigo-50">
              Start your project
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
