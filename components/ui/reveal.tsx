"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  x?: number;
  className?: string;
};

export function Reveal({ children, delay = 0, y = 26, x = 0, className }: RevealProps) {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)");
    const onChange = () => setMobile(media.matches);
    onChange();
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: mobile ? Math.min(10, y) : y, x: mobile ? Math.min(8, x) : x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: mobile ? 0.35 : 0.55, delay: mobile ? Math.min(delay, 0.08) : delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
