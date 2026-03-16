export function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[-30] overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#F8FAFC_0%,#EEF2FF_100%)]" />
      <div className="hero-grid absolute inset-0 opacity-35" />
      <div className="hero-glow absolute left-1/2 top-0 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.13)_0%,rgba(99,102,241,0)_72%)]" />
    </div>
  );
}
