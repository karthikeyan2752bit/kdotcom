export function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-20 overflow-hidden" aria-hidden="true">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/media/SaaS_Automation_Background_Video_Generation.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/media/logo.jpg"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/72 via-slate-900/62 to-slate-950/78" />
    </div>
  );
}
