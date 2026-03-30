"use client";

import { Html, OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

const CYAN = "#22d3ee";
const EMERALD = "#34d399";
const SOFT_BLUE = "#60a5fa";

type ModuleLabel = {
  name: string;
  color: string;
  anchor: string;
};

type Node = {
  id: string;
  lat: number;
  lon: number;
  kind: "key" | "standard";
};

type Route = {
  id: string;
  from: string;
  to: string;
  color: string;
  thickness: number;
  lift: number;
  speed: number;
  pulseCount: number;
};

const LABELS: ModuleLabel[] = [
  { name: "CRM", color: CYAN, anchor: "europe" },
  { name: "Billing", color: EMERALD, anchor: "north-america" },
  { name: "ERP", color: SOFT_BLUE, anchor: "india" },
  { name: "Automation", color: CYAN, anchor: "japan" },
  { name: "Hospital", color: EMERALD, anchor: "middle-east" },
];

const NODES: Node[] = [
  { id: "north-america", lat: 40, lon: -100, kind: "key" },
  { id: "south-america", lat: -20, lon: -60, kind: "standard" },
  { id: "europe", lat: 52, lon: 12, kind: "key" },
  { id: "africa", lat: 8, lon: 22, kind: "standard" },
  { id: "middle-east", lat: 28, lon: 46, kind: "standard" },
  { id: "india", lat: 22, lon: 78, kind: "key" },
  { id: "japan", lat: 36, lon: 138, kind: "standard" },
  { id: "australia", lat: -27, lon: 134, kind: "standard" },
  { id: "uk", lat: 54, lon: -2, kind: "standard" },
  { id: "brazil", lat: -12, lon: -54, kind: "standard" },
];

const ROUTES: Route[] = [
  { id: "1", from: "north-america", to: "europe", color: CYAN, thickness: 0.006, lift: 1.28, speed: 0.08, pulseCount: 2 },
  { id: "2", from: "europe", to: "india", color: EMERALD, thickness: 0.006, lift: 1.26, speed: 0.1, pulseCount: 2 },
  { id: "3", from: "india", to: "japan", color: SOFT_BLUE, thickness: 0.005, lift: 1.22, speed: 0.12, pulseCount: 1 },
  { id: "4", from: "india", to: "australia", color: EMERALD, thickness: 0.005, lift: 1.18, speed: 0.11, pulseCount: 1 },
  { id: "5", from: "north-america", to: "brazil", color: CYAN, thickness: 0.004, lift: 1.18, speed: 0.14, pulseCount: 1 },
  { id: "6", from: "brazil", to: "africa", color: SOFT_BLUE, thickness: 0.005, lift: 1.25, speed: 0.09, pulseCount: 2 },
  { id: "7", from: "middle-east", to: "india", color: EMERALD, thickness: 0.004, lift: 1.16, speed: 0.15, pulseCount: 1 },
  { id: "8", from: "uk", to: "india", color: CYAN, thickness: 0.005, lift: 1.24, speed: 0.1, pulseCount: 2 },
];

function latLonToVector(lat: number, lon: number, radius: number) {
  const phi = THREE.MathUtils.degToRad(90 - lat);
  const theta = THREE.MathUtils.degToRad(lon + 180);

  return new THREE.Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta),
  );
}

function createTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 2048;
  canvas.height = 1024;

  const ctx = canvas.getContext("2d");
  if (!ctx) return null;

  const bg = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  bg.addColorStop(0, "#04111f");
  bg.addColorStop(0.5, "#072235");
  bg.addColorStop(1, "#04111f");
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.strokeStyle = "rgba(103,232,249,0.12)";
  ctx.lineWidth = 1;

  for (let y = 0; y < canvas.height; y += 40) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(canvas.width, y);
    ctx.stroke();
  }

  const continents = [
    [[-168, 71], [-145, 73], [-132, 65], [-118, 48], [-102, 28], [-90, 18], [-80, 28], [-86, 44], [-106, 58], [-140, 70]],
    [[-82, 12], [-72, -4], [-60, -24], [-50, -44], [-42, -52], [-48, -30], [-60, -10], [-70, 2]],
    [[-10, 36], [10, 52], [40, 58], [80, 54], [120, 46], [155, 56], [140, 26], [100, 10], [70, 22], [40, 38]],
    [[-16, 34], [8, 30], [28, 18], [30, -10], [18, -28], [0, -34], [-12, -18], [-15, 0]],
    [[112, -10], [128, -20], [146, -30], [152, -18], [132, -10]],
  ];

  ctx.fillStyle = "rgba(10,35,52,0.92)";
  ctx.strokeStyle = "rgba(52,211,153,0.22)";
  continents.forEach((points) => {
    const first = points[0];
    ctx.beginPath();
    ctx.moveTo(((first[0] + 180) / 360) * canvas.width, ((90 - first[1]) / 180) * canvas.height);

    points.slice(1).forEach(([lon, lat]) => {
      ctx.lineTo(((lon + 180) / 360) * canvas.width, ((90 - lat) / 180) * canvas.height);
    });

    ctx.closePath();
    ctx.fill();
    ctx.stroke();
  });

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 8;
  return texture;
}

function GlobeScene({ mobile }: { mobile: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  const lineRefs = useRef<Array<THREE.Line | null>>([]);
  const pulseRefs = useRef<THREE.Mesh[]>([]);

  const radius = mobile ? 1.5 : 1.72;

  const nodes = useMemo(() => {
    const map = new Map<string, THREE.Vector3>();
    NODES.forEach((node) => {
      map.set(node.id, latLonToVector(node.lat, node.lon, radius));
    });
    return map;
  }, [radius]);

  const routes = useMemo(() => {
    return ROUTES.map((route) => {
      const from = nodes.get(route.from)!;
      const to = nodes.get(route.to)!;

      const mid = from.clone().add(to).multiplyScalar(0.5).normalize().multiplyScalar(radius * route.lift);
      const curve = new THREE.QuadraticBezierCurve3(from, mid, to);

      return {
        ...route,
        curve,
        points: curve.getPoints(90),
      };
    });
  }, [nodes, radius]);

  const texture = useMemo(() => createTexture(), []);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.18;
      groupRef.current.rotation.x = -0.08;
    }

    routes.forEach((route, index) => {
      const line = lineRefs.current[index];
      if (line) {
        const progress = ((state.clock.elapsedTime * route.speed) % 1);
        line.geometry.setDrawRange(0, Math.max(2, Math.floor(route.points.length * progress)));
      }

      const pulse = pulseRefs.current[index];
      if (pulse) {
        const t = (state.clock.elapsedTime * route.speed + index * 0.12) % 1;
        pulse.position.copy(route.curve.getPoint(t));
      }
    });
  });

  return (
    <>
      <ambientLight intensity={0.45} color="#d1fae5" />
      <directionalLight position={[4, 3, 4]} intensity={1.4} color="#ffffff" />
      <pointLight position={[-3, 0, 3]} intensity={1.2} color={CYAN} />

      <group ref={groupRef}>
        <mesh>
          <sphereGeometry args={[radius, 80, 80]} />
          <meshStandardMaterial
            map={texture ?? undefined}
            color="#082033"
            emissive="#0a2537"
            emissiveIntensity={0.35}
            roughness={0.68}
            metalness={0.18}
          />
        </mesh>

        <mesh scale={1.06}>
          <sphereGeometry args={[radius, 64, 64]} />
          <meshBasicMaterial
            color="#67e8f9"
            transparent
            opacity={0.08}
            blending={THREE.AdditiveBlending}
          />
        </mesh>

        {routes.map((route, index) => (
          <group key={route.id}>
            <line
              ref={(el) => {
                if (el) {
                  lineRefs.current[index] = el as unknown as THREE.Line;
                }
              }}
            >
              <bufferGeometry>
                <bufferAttribute
                  attach="attributes-position"
                  args={[new Float32Array(route.points.flatMap((p) => [p.x, p.y, p.z])), 3]}
                />
              </bufferGeometry>
              <lineBasicMaterial color={route.color} transparent opacity={0.85} />
            </line>

            <mesh
              ref={(el) => {
                if (el) pulseRefs.current[index] = el;
              }}
            >
              <sphereGeometry args={[0.02, 12, 12]} />
              <meshBasicMaterial color={route.color} />
            </mesh>
          </group>
        ))}

        {Array.from(nodes.entries()).map(([id, position]) => (
          <mesh key={id} position={position}>
            <sphereGeometry args={[0.03, 12, 12]} />
            <meshBasicMaterial color={EMERALD} />
          </mesh>
        ))}

        {LABELS.map((label) => {
          const pos = nodes.get(label.anchor)?.clone().multiplyScalar(1.22);
          if (!pos) return null;

          return (
            <Html key={label.name} position={[pos.x, pos.y, pos.z]} center distanceFactor={9}>
              <div
                className="rounded-full border px-2 py-1 text-[11px] font-semibold uppercase tracking-[0.08em]"
                style={{
                  background: "rgba(255,255,255,0.92)",
                  color: "#0f172a",
                  borderColor: `${label.color}66`,
                  boxShadow: "0 10px 30px rgba(2,6,23,0.18)",
                  whiteSpace: "nowrap",
                }}
              >
                {label.name}
              </div>
            </Html>
          );
        })}
      </group>

      <OrbitControls
        enablePan={false}
        enableZoom={false}
        autoRotate={false}
        rotateSpeed={0.45}
        minPolarAngle={Math.PI * 0.25}
        maxPolarAngle={Math.PI * 0.75}
      />
    </>
  );
}

export default function AutomationGlobe3D() {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 768px)");
    const update = () => setMobile(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return (
    <div className="relative h-[360px] w-full overflow-visible sm:h-[620px] lg:h-[680px]">
      <div className="absolute -right-8 top-1/2 h-[360px] w-[360px] -translate-y-1/2 overflow-visible sm:h-[620px] sm:w-[620px] lg:h-[680px] lg:w-[680px]">
        <Canvas
          camera={{ position: [0, 0, 5.2], fov: 34 }}
          dpr={[1, 2]}
          gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
          className="overflow-visible"
        >
          <Suspense fallback={null}>
            <GlobeScene mobile={mobile} />
          </Suspense>
        </Canvas>

        <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full border border-cyan-300/30 bg-slate-950/60 px-4 py-1 text-[10px] uppercase tracking-[0.18em] text-cyan-100/80">
          Drag to rotate
        </div>
      </div>
    </div>
  );
}