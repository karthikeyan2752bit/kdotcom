export function SiteFooter() {
  return (
    <footer className="section-tight border-t border-slate-200 bg-[var(--color-surface)] py-10 text-center text-sm tracking-[0.01em] text-[var(--color-text-secondary)]">
      <div className="mobile-shell mx-auto flex max-w-7xl flex-col items-center gap-3 px-4 sm:px-6 lg:px-10">
        <p>© 2026 Pari Labs. All rights reserved.</p>
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm">
          <a href="#solutions" className="hover:text-slate-900">Solutions</a>
          <a href="#industries" className="hover:text-slate-900">Industries</a>
          <a href="#contact" className="hover:text-slate-900">Contact</a>
        </div>
      </div>
    </footer>
  );
}
