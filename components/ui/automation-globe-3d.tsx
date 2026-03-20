"use client";

import { Html, OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

type GlobeNode = {
  id: string;
  position: THREE.Vector3;
  color: "cyan" | "emerald";
};

type ArcLink = {
  from: GlobeNode;
  to: GlobeNode;
  curve: THREE.CatmullRomCurve3;
  speed: number;
  offset: number;
};

const NODE_COORDS = [
  { id: "north-america", lat: 40, lon: -100, color: "cyan" as const },
  { id: "south-america", lat: -20, lon: -58, color: "emerald" as const },
  { id: "europe", lat: 50, lon: 10, color: "cyan" as const },
  { id: "africa", lat: 7, lon: 20, color: "emerald" as const },
  { id: "asia", lat: 35, lon: 95, color: "cyan" as const },
  { id: "india", lat: 21, lon: 77, color: "emerald" as const },
  { id: "australia", lat: -27, lon: 133, color: "cyan" as const },
  { id: "middle-east", lat: 24, lon: 45, color: "emerald" as const },
  { id: "japan", lat: 36, lon: 138, color: "cyan" as const },
  { id: "uk", lat: 54, lon: -2, color: "emerald" as const },
  { id: "canada", lat: 56, lon: -106, color: "cyan" as const },
  { id: "brazil", lat: -10, lon: -55, color: "emerald" as const },
];

const LABELS = [
  { text: "CRM", nodeId: "europe" },
  { text: "Workflow", nodeId: "south-america" },
  { text: "Billing", nodeId: "australia" },
];

const ARC_PAIRS = [
  [0, 2],
  [0, 4],
  [1, 3],
  [2, 4],
  [3, 5],
  [6, 4],
  [8, 2],
  [10, 1],
  [11, 5],
] as const;

const CYAN = "#22d3ee";
const EMERALD = "#34d399";

function latLonToVector3(lat: number, lon: number, radius: number) {
  const phi = THREE.MathUtils.degToRad(90 - lat);
  const theta = THREE.MathUtils.degToRad(lon + 180);

  return new THREE.Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta),
  );
}

function createGlobeTexture() {
  const size = 1024;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size / 2;
  const ctx = canvas.getContext("2d");
  if (!ctx) return null;

  const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  gradient.addColorStop(0, "#040914");
  gradient.addColorStop(0.5, "#07131f");
  gradient.addColorStop(1, "#030914");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.globalAlpha = 0.14;
  ctx.fillStyle = "#4a5d66";
  for (let i = 0; i < 16; i += 1) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const w = 70 + Math.random() * 160;
    const h = 30 + Math.random() * 90;
    ctx.beginPath();
    ctx.ellipse(x, y, w, h, Math.random() * Math.PI, 0, Math.PI * 2);
    ctx.fill();
  }

  ctx.globalAlpha = 0.08;
  ctx.fillStyle = "#89cfd8";
  for (let i = 0; i < 3000; i += 1) {
    ctx.fillRect(Math.random() * canvas.width, Math.random() * canvas.height, 1, 1);
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.needsUpdate = true;
  return texture;
}

function GlobeScene({ mobile }: { mobile: boolean }) {
  const globeRef = useRef<THREE.Group>(null);
  const particleRefs = useRef<Array<THREE.Mesh | null>>([]);
  const nodes = useMemo<GlobeNode[]>(() => {
    const activeCoords = mobile ? NODE_COORDS.slice(0, 8) : NODE_COORDS;
    return activeCoords.map((coord) => ({
      id: coord.id,
      color: coord.color,
      position: latLonToVector3(coord.lat, coord.lon, 1.3),
    }));
  }, [mobile]);

  const labels = useMemo(() => {
    return LABELS
      .map((label) => ({ ...label, node: nodes.find((node) => node.id === label.nodeId) }))
      .filter((label): label is { text: string; nodeId: string; node: GlobeNode } => Boolean(label.node));
  }, [nodes]);

  const arcs = useMemo<ArcLink[]>(() => {
    const activePairs = mobile ? ARC_PAIRS.slice(0, 5) : ARC_PAIRS;
    return activePairs.map(([fromIndex, toIndex], index) => {
      const from = nodes[fromIndex % nodes.length];
      const to = nodes[toIndex % nodes.length];
      const mid = from.position.clone().add(to.position).multiplyScalar(0.5).normalize().multiplyScalar(1.8 + (index % 3) * 0.1);
      const curve = new THREE.CatmullRomCurve3([from.position, mid, to.position]);
      return {
        from,
        to,
        curve,
        speed: 0.12 + (index % 4) * 0.04,
        offset: index * 0.13,
      };
    });
  }, [mobile, nodes]);

  const globeTexture = useMemo(() => createGlobeTexture(), []);

  useFrame((state, delta) => {
    if (globeRef.current) {
      globeRef.current.rotation.y += delta * 0.08;
    }

    particleRefs.current.forEach((particle, index) => {
      const link = arcs[index];
      if (!particle || !link) return;
      const progress = (state.clock.elapsedTime * link.speed + link.offset) % 1;
      const point = link.curve.getPoint(progress);
      particle.position.copy(point);
    });
  });

  return (
    <>
      <ambientLight intensity={0.45} color="#60a5fa" />
      <directionalLight position={[3, 2, 2]} intensity={1.25} color="#b7fff2" />
      <pointLight position={[-2, 0.5, 2]} intensity={1.4} color="#22d3ee" />

      <group ref={globeRef}>
        <mesh>
          <sphereGeometry args={[1.3, mobile ? 36 : 52, mobile ? 36 : 52]} />
          <meshStandardMaterial
            map={globeTexture ?? undefined}
            color="#081520"
            metalness={0.25}
            roughness={0.85}
            transparent
            opacity={0.88}
            emissive="#0b1724"
            emissiveIntensity={0.45}
          />
        </mesh>

        <mesh>
          <sphereGeometry args={[1.37, 48, 48]} />
          <meshBasicMaterial color="#4ade80" transparent opacity={0.08} />
        </mesh>

        {arcs.map((link, index) => {
          const points = link.curve.getPoints(64);
          const arcColor = index % 2 === 0 ? CYAN : EMERALD;
          return (
            <group key={`${link.from.id}-${link.to.id}`}>
              <line>
                <bufferGeometry>
                  <bufferAttribute
                    attach="attributes-position"
                    count={points.length}
                    array={new Float32Array(points.flatMap((point) => [point.x, point.y, point.z]))}
                    itemSize={3}
                  />
                </bufferGeometry>
                <lineBasicMaterial color={arcColor} transparent opacity={0.35} />
              </line>
              <mesh ref={(el) => {
                particleRefs.current[index] = el;
              }}>
                <sphereGeometry args={[0.018, 10, 10]} />
                <meshBasicMaterial color={arcColor} />
              </mesh>
            </group>
          );
        })}

        {nodes.map((node) => (
          <mesh key={node.id} position={node.position}>
            <sphereGeometry args={[0.03, 16, 16]} />
            <meshBasicMaterial color={node.color === "cyan" ? CYAN : EMERALD} />
          </mesh>
        ))}

        {labels.map((label, index) => {
          const labelPosition = label.node.position.clone().multiplyScalar(1.16);
          return (
            <Html
              key={label.text}
              position={[labelPosition.x, labelPosition.y, labelPosition.z]}
              center
              transform
              distanceFactor={8.5}
              style={{ pointerEvents: "none" }}
            >
              <motion.div
                initial={{ opacity: 0, y: 2 }}
                animate={{ opacity: 0.9, y: 0 }}
                transition={{ delay: 0.35 + index * 0.12, duration: 0.55 }}
                className="rounded-full border border-emerald-300/30 bg-slate-950/75 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-[0.15em] text-cyan-100"
              >
                {label.text}
              </motion.div>
            </Html>
          );
        })}
      </group>

      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minPolarAngle={Math.PI * 0.25}
        maxPolarAngle={Math.PI * 0.75}
        rotateSpeed={0.52}
        enableDamping
        dampingFactor={0.08}
      />
    </>
  );
}

export function AutomationGlobe3D() {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 768px)");
    const onChange = () => setMobile(media.matches);
    onChange();
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, delay: 0.12 }}
      className="relative isolate overflow-hidden rounded-[30px] border border-cyan-300/20 bg-gradient-to-br from-slate-900/95 via-slate-950/90 to-slate-950/95 p-3 shadow-[0_24px_80px_rgba(2,6,23,0.72)]"
    >
      <div className="pointer-events-none absolute inset-0 rounded-[28px] border border-emerald-300/10" />
      <div className="pointer-events-none absolute inset-[8%] rounded-[26px] border border-cyan-300/15 bg-[radial-gradient(circle_at_26%_18%,rgba(52,211,153,0.14),transparent_50%),radial-gradient(circle_at_78%_70%,rgba(34,211,238,0.16),transparent_44%)] shadow-[inset_0_0_55px_rgba(34,211,238,0.08)]" />

      <div className="relative h-[360px] w-full sm:h-[430px]">
        <Canvas camera={{ position: [0, 0, 4.15], fov: 38 }} dpr={[1, 1.8]} gl={{ antialias: true, alpha: true }}>
          <fog attach="fog" args={["#030712", 4.4, 8]} />
          <GlobeScene mobile={mobile} />
        </Canvas>
      </div>

      <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full border border-emerald-300/30 bg-slate-900/70 px-4 py-1 text-[11px] uppercase tracking-[0.22em] text-emerald-100/80">
        Drag to rotate
      </div>
    </motion.div>
  );
}
