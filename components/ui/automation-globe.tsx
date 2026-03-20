"use client";

import { motion, useAnimationFrame } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

type Node = {
  x: number;
  y: number;
  depth: number;
};

const GLOBE_SIZE = 380;
const CENTER = GLOBE_SIZE / 2;
const RADIUS = 130;

function createNodes(count: number): Node[] {
  return Array.from({ length: count }, (_, index) => {
    const theta = Math.acos(1 - (2 * (index + 0.5)) / count);
    const phi = Math.PI * (1 + Math.sqrt(5)) * index;

    return {
      x: RADIUS * Math.cos(phi) * Math.sin(theta),
      y: RADIUS * Math.sin(phi) * Math.sin(theta),
      depth: RADIUS * Math.cos(theta),
    };
  });
}

function rotateNode(node: Node, rotX: number, rotY: number): Node {
  const cosY = Math.cos(rotY);
  const sinY = Math.sin(rotY);
  const x1 = node.x * cosY + node.depth * sinY;
  const z1 = -node.x * sinY + node.depth * cosY;

  const cosX = Math.cos(rotX);
  const sinX = Math.sin(rotX);
  const y2 = node.y * cosX - z1 * sinX;
  const z2 = node.y * sinX + z1 * cosX;

  return { x: x1, y: y2, depth: z2 };
}

export function AutomationGlobe() {
  const [dragging, setDragging] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [rotation, setRotation] = useState({ x: 0.3, y: 0.2 });
  const dragStart = useRef({ x: 0, y: 0 });
  const baseRotation = useRef({ x: 0.3, y: 0.2 });

  useEffect(() => {
    const media = window.matchMedia("(max-width: 768px)");
    const update = () => setMobile(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  const nodes = useMemo(() => createNodes(mobile ? 34 : 64), [mobile]);

  useAnimationFrame((time, delta) => {
    if (dragging) return;
    setRotation((prev) => ({
      x: baseRotation.current.x + (0.2 + Math.sin(time * 0.001) * 0.07) * 0.12,
      y: prev.y + delta * 0.00017,
    }));
  });

  const projected = nodes
    .map((node) => rotateNode(node, rotation.x, rotation.y))
    .map((node) => ({
      x: CENTER + node.x,
      y: CENTER + node.y,
      alpha: 0.35 + ((node.depth + RADIUS) / (2 * RADIUS)) * 0.65,
      size: 2 + ((node.depth + RADIUS) / (2 * RADIUS)) * 2,
      depth: node.depth,
    }))
    .sort((a, b) => a.depth - b.depth);

  const arcs = projected.slice(0, mobile ? 16 : 24).map((node, index) => {
    const target = projected[(index * 7 + 13) % projected.length];
    const mx = (node.x + target.x) / 2 + (index % 2 === 0 ? 18 : -18);
    const my = (node.y + target.y) / 2 - 20;
    return { node, target, mx, my, alpha: Math.min(node.alpha, target.alpha) * 0.45 };
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="relative overflow-hidden rounded-[30px] border border-emerald-400/20 bg-slate-950/80 p-2 shadow-[0_26px_80px_rgba(2,6,23,0.7)]"
      onPointerDown={(event) => {
        setDragging(true);
        dragStart.current = { x: event.clientX, y: event.clientY };
      }}
      onPointerUp={() => {
        setDragging(false);
        baseRotation.current = rotation;
      }}
      onPointerLeave={() => setDragging(false)}
      onPointerMove={(event) => {
        if (!dragging) return;
        const deltaX = event.clientX - dragStart.current.x;
        const deltaY = event.clientY - dragStart.current.y;
        setRotation({
          y: baseRotation.current.y + deltaX * 0.005,
          x: baseRotation.current.x + deltaY * 0.0035,
        });
      }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.2),transparent_45%),radial-gradient(circle_at_75%_70%,rgba(34,211,238,0.16),transparent_42%)]" />

      <div className="relative flex h-[360px] w-full items-center justify-center sm:h-[420px]">
        <svg viewBox={`0 0 ${GLOBE_SIZE} ${GLOBE_SIZE}`} className="h-full w-full max-w-[420px]" role="img" aria-label="Automation systems globe animation">
          <defs>
            <radialGradient id="glow" cx="50%" cy="50%" r="60%">
              <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.28" />
              <stop offset="100%" stopColor="#020617" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx={CENTER} cy={CENTER} r={RADIUS + 26} fill="url(#glow)" />
          <circle cx={CENTER} cy={CENTER} r={RADIUS + 8} fill="none" stroke="rgba(52, 211, 153, 0.28)" strokeWidth="1" />

          {arcs.map((arc, index) => (
            <path
              key={`arc-${index}`}
              d={`M ${arc.node.x} ${arc.node.y} Q ${arc.mx} ${arc.my} ${arc.target.x} ${arc.target.y}`}
              stroke="rgba(34, 211, 238, 0.6)"
              strokeOpacity={arc.alpha}
              strokeWidth="1.2"
              fill="none"
            />
          ))}

          {projected.map((node, index) => (
            <circle
              key={`node-${index}`}
              cx={node.x}
              cy={node.y}
              r={node.size}
              fill={index % 2 === 0 ? "#34d399" : "#22d3ee"}
              fillOpacity={node.alpha}
            />
          ))}
        </svg>
      </div>
      <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full border border-emerald-300/30 bg-slate-900/65 px-4 py-1 text-[11px] uppercase tracking-[0.22em] text-emerald-200/85">
        Drag to rotate
      </div>
    </motion.div>
  );
}
