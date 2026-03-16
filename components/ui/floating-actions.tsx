"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SECTION_IDS = ["hero", "solutions", "use-cases", "modules", "infrastructure", "automation", "process", "contact"];

export function FloatingActions() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [chatOpen, setChatOpen] = useState(false);

  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visible?.target?.id) return;
        const index = SECTION_IDS.indexOf(visible.target.id);
        if (index >= 0) setCurrentIndex(index);
      },
      { threshold: [0.35, 0.6, 0.8], rootMargin: "-12% 0px -30% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const nextSectionId = useMemo(() => {
    if (currentIndex >= SECTION_IDS.length - 1) return SECTION_IDS[0];
    return SECTION_IDS[currentIndex + 1];
  }, [currentIndex]);

  const goToNext = () => {
    document.getElementById(nextSectionId)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      <AnimatePresence>
        {chatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 14, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.97 }}
            transition={{ duration: 0.18 }}
            className="w-[18rem] rounded-2xl border border-slate-200/80 bg-white/95 dark:bg-slate-900 p-4 shadow-xl shadow-slate-900/10 backdrop-blur dark:border-slate-700"
          >
            <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Pari Labs Assistant</p>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              Hello, this is the Pari Labs assistant. Ask how we can automate your business operations and set up reliable systems.
            </p>
            <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-2 text-xs text-slate-500 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-400">
              Chat backend integration coming soon.
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        onClick={goToNext}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.96 }}
        className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-300/80 bg-white/95 dark:bg-slate-900 text-lg text-slate-700 shadow-lg shadow-slate-900/10 backdrop-blur transition hover:text-emerald-600 dark:border-slate-700 dark:text-slate-200 dark:hover:text-emerald-300"
        aria-label="Go to next section"
        title="Next section"
      >
        ↓
      </motion.button>

      <motion.button
        type="button"
        onClick={() => setChatOpen((open) => !open)}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.96 }}
        className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500 text-lg text-white shadow-lg shadow-emerald-700/20"
        aria-label="Toggle chatbot placeholder"
        title="AI assistant"
      >
        💬
      </motion.button>
    </div>
  );
}
