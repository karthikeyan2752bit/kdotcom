"use client";

import { motion } from "framer-motion";

const ORBITS = [
  { size: 78, duration: 26, direction: 1, color: "rgba(16,185,129,0.32)", dotColor: "rgba(94,234,212,0.92)", delay: 0 },
  { size: 92, duration: 32, direction: -1, color: "rgba(45,212,191,0.24)", dotColor: "rgba(16,185,129,0.88)", delay: -7 },
  { size: 108, duration: 40, direction: 1, color: "rgba(6,182,212,0.2)", dotColor: "rgba(125,211,252,0.8)", delay: -13 },
];

export function AnimatedLogoOrbit() {
  return (
    <div className="pointer-events-none absolute inset-1/2 h-[7.2rem] w-[7.2rem] -translate-x-1/2 -translate-y-1/2" aria-hidden="true">
      {ORBITS.map((orbit) => (
        <motion.div
          key={orbit.size}
          className="absolute left-1/2 top-1/2"
          style={{ width: orbit.size, height: orbit.size, marginLeft: -orbit.size / 2, marginTop: -orbit.size / 2 }}
          animate={{ rotate: orbit.direction > 0 ? 360 : -360 }}
          transition={{ duration: orbit.duration, repeat: Infinity, ease: "linear" }}
        >
          <svg viewBox="0 0 100 100" className="h-full w-full overflow-visible">
            <circle cx="50" cy="50" r="48" fill="none" stroke={orbit.color} strokeWidth="1" />
            <motion.circle
              cx="50"
              cy="2"
              r="2"
              fill={orbit.dotColor}
              animate={{ scale: [0.85, 1.1, 0.85], opacity: [0.55, 0.95, 0.55] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: orbit.delay }}
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}
