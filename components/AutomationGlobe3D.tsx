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
  tooltip: string;
  color: string;
};

type NetworkNode = {
  id: string;
  lat: number;
  lon: number;
  kind: "key" | "standard";
};

type ArcDefinition = {
  route: [string, string];
  thickness: number;
  lift: number;
  speed: number;
  particles: number;
  color: string;
};

const MODULES: ModuleLabel[] = [
  { name: "CRM", tooltip: "Customer operations", color: CYAN },
  { name: "Billing", tooltip: "Billing automation", color: EMERALD },
  { name: "ERP", tooltip: "Unified enterprise data", color: SOFT_BLUE },
  { name: "Hospital", tooltip: "Hospital appointment system", color: CYAN },
  { name: "Automation", tooltip: "Workflow automation", color: EMERALD },
];

const NODES: NetworkNode[] = [
  { id: "crm", lat: 20, lon: -35, kind: "key" },
  { id: "billing", lat: -5, lon: -80, kind: "key" },
  { id: "inventory", lat: 8, lon: 60, kind: "standard" },
  { id: "hrms", lat: 50, lon: 95, kind: "standard" },
  { id: "erp", lat: 34, lon: 22, kind: "key" },
  { id: "hospital", lat: 5, lon: 95, kind: "key" },
  { id: "appointment", lat: 13, lon: 118, kind: "standard" },
  { id: "whatsapp", lat: -10, lon: 130, kind: "standard" },
  { id: "automation", lat: -20, lon: 15, kind: "key" },
  { id: "analytics", lat: 42, lon: -120, kind: "standard" },
  { id: "server", lat: -38, lon: -30, kind: "key" },
  { id: "cloud", lat: 56, lon: -10, kind: "key" },
  { id: "ops-east", lat: -45, lon: 88, kind: "standard" },
  { id: "ops-west", lat: -30, lon: -128, kind: "standard" },
  { id: "ops-eu", lat: 62, lon: 42, kind: "standard" },
  { id: "ops-apac", lat: 30, lon: 145, kind: "standard" },
];

const ARC_ROUTES: ArcDefinition[] = [
  { route: ["hospital", "appointment"], thickness: 0.008, lift: 1.9, speed: 0.16, particles: 2, color: EMERALD },
  { route: ["appointment", "whatsapp"], thickness: 0.006, lift: 1.82, speed: 0.2, particles: 2, color: CYAN },
  { route: ["billing", "inventory"], thickness: 0.009, lift: 1.92, speed: 0.14, particles: 3, color: SOFT_BLUE },
  { route: ["inventory", "analytics"], thickness: 0.007, lift: 1.85, speed: 0.11, particles: 2, color: CYAN },
  { route: ["erp", "hrms"], thickness: 0.008, lift: 1.9, speed: 0.12, particles: 2, color: EMERALD },
  { route: ["hrms", "cloud"], thickness: 0.007, lift: 1.88, speed: 0.15, particles: 2, color: SOFT_BLUE },
  { route: ["crm", "server"], thickness: 0.01, lift: 2.02, speed: 0.1, particles: 3, color: CYAN },
  { route: ["server", "automation"], thickness: 0.008, lift: 1.9, speed: 0.14, particles: 2, color: EMERALD },
  { route: ["cloud", "analytics"], thickness: 0.006, lift: 1.86, speed: 0.1, particles: 1, color: SOFT_BLUE },
  { route: ["erp", "server"], thickness: 0.007, lift: 1.95, speed: 0.12, particles: 1, color: CYAN },
  { route: ["ops-eu", "ops-apac"], thickness: 0.005, lift: 2.0, speed: 0.09, particles: 1, color: SOFT_BLUE },
  { route: ["ops-west", "ops-east"], thickness: 0.005, lift: 1.98, speed: 0.08, particles: 1, color: EMERALD },
];

function latLonToPosition(lat: number, lon: number, radius: number) {
  const phi = THREE.MathUtils.degToRad(90 - lat);
  const theta = THREE.MathUtils.degToRad(lon + 180);
  return new THREE.Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta),
  );
}

function createGlobeTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 1024;
  canvas.height = 512;
  const ctx = canvas.getContext("2d");
  if (!ctx) return null;

  const bg = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  bg.addColorStop(0, "#0b1f3d");
  bg.addColorStop(0.45, "#112f54");
  bg.addColorStop(1, "#0a223f");
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.strokeStyle = "rgba(103,232,249,0.14)";
  ctx.lineWidth = 1;
  for (let y = 24; y < canvas.height; y += 20) {
    ctx.beginPath();
    ctx.moveTo(0, y + Math.sin(y * 0.04) * 4);
    ctx.lineTo(canvas.width, y + Math.cos(y * 0.03) * 4);
    ctx.stroke();
  }

  ctx.strokeStyle = "rgba(125,211,252,0.11)";
  for (let x = 36; x < canvas.width; x += 44) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x + Math.sin(x * 0.02) * 10, canvas.height);
    ctx.stroke();
  }

  ctx.fillStyle = "rgba(110,231,183,0.11)";
  for (let i = 0; i < 18; i += 1) {
    const x = ((i * 137) % canvas.width) + 16;
    const y = ((i * 89) % canvas.height) + 10;
    const width = 42 + ((i * 19) % 80);
    const height = 16 + ((i * 11) % 36);
    const rotation = ((i * 0.42) % 1) * Math.PI;
    ctx.beginPath();
    ctx.ellipse(x, y, width, height, rotation, 0, Math.PI * 2);
    ctx.fill();
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.needsUpdate = true;
  return texture;
}

function GlobeScene({ mobile }: { mobile: boolean }) {
  const globeGroupRef = useRef<THREE.Group>(null);
  const labelMeshesRef = useRef<Array<THREE.Group | null>>([]);
  const labelDomRefs = useRef<Array<HTMLDivElement | null>>([]);
  const particleRefs = useRef<Array<THREE.Mesh | null>>([]);
  const [hovered, setHovered] = useState<string | null>(null);

  const radius = mobile ? 1.36 : 1.5;

  const nodeMap = useMemo(() => {
    const activeNodes = mobile ? NODES.slice(0, 12) : NODES;
    const map = new Map<string, { position: THREE.Vector3; kind: NetworkNode["kind"] }>();
    activeNodes.forEach((node) => {
      map.set(node.id, { position: latLonToPosition(node.lat, node.lon, radius), kind: node.kind });
    });
    return map;
  }, [mobile, radius]);

  const arcs = useMemo(() => {
    const activeRoutes = mobile ? ARC_ROUTES.slice(0, 8) : ARC_ROUTES;
    return activeRoutes
      .map((route, routeIndex) => {
        const from = nodeMap.get(route.route[0]);
        const to = nodeMap.get(route.route[1]);
        if (!from || !to) return null;
        const mid = from.position
          .clone()
          .add(to.position)
          .multiplyScalar(0.5)
          .normalize()
          .multiplyScalar(route.lift);
        const curve = new THREE.QuadraticBezierCurve3(from.position, mid, to.position);
        return {
          ...route,
          key: `${route.route[0]}-${route.route[1]}`,
          curve,
          line: new THREE.Line(
            new THREE.BufferGeometry().setFromPoints(curve.getPoints(70)),
            new THREE.LineBasicMaterial({ color: route.color, transparent: true, opacity: 0.82 }),
          ),
          particleOffsets: Array.from({ length: route.particles }, (_, i) => (routeIndex * 0.13 + i * 0.31) % 1),
        };
      })
      .filter((item): item is NonNullable<typeof item> => Boolean(item));
  }, [mobile, nodeMap]);

  const labels = useMemo(
    () =>
      MODULES.map((module, i) => ({
        ...module,
        radius: radius + 0.16,
        inclination: -0.24 + ((i % 2) * 0.44 - 0.22),
        speed: 0.14,
        phase: (Math.PI * 2 * i) / MODULES.length,
      })),
    [radius],
  );

  const globeTexture = useMemo(() => createGlobeTexture(), []);

  useFrame((state, delta) => {
    if (globeGroupRef.current) {
      globeGroupRef.current.rotation.y += delta * (mobile ? 0.06 : 0.08);
    }

    labels.forEach((label, index) => {
      const holder = labelMeshesRef.current[index];
      if (!holder) return;

      const t = state.clock.elapsedTime;
      const azimuth = t * label.speed + label.phase;
      const y = Math.sin(label.inclination) * label.radius;
      const ringRadius = Math.cos(label.inclination) * label.radius;
      const x = Math.cos(azimuth) * ringRadius;
      const z = Math.sin(azimuth) * ringRadius;
      holder.position.set(x, y, z);
      holder.lookAt(0, 0, 0);

      const visibilityWave = 0.5 + 0.5 * Math.sin(t * 0.9 + label.phase);
      const projected = holder.position.clone().project(state.camera);
      const insideFrame = Math.abs(projected.x) < 0.85 && Math.abs(projected.y) < 0.72;
      const front = z > -0.08;
      const target = front && insideFrame ? THREE.MathUtils.lerp(0.2, 0.96, visibilityWave) : 0;
      const scale = hovered === label.name ? 1.1 : 1;

      holder.scale.setScalar(scale);
      const node = holder.children[0] as THREE.Object3D | undefined;
      if (node) {
        node.visible = target > 0.22;
      }
      const domLabel = labelDomRefs.current[index];
      if (domLabel) {
        domLabel.style.opacity = target.toFixed(3);
      }
    });

    let particleIndex = 0;
    arcs.forEach((arc) => {
      arc.particleOffsets.forEach((offset) => {
        const particle = particleRefs.current[particleIndex];
        particleIndex += 1;
        if (!particle) return;
        const progress = (state.clock.elapsedTime * arc.speed + offset) % 1;
        const point = arc.curve.getPoint(progress);
        particle.position.copy(point);
      });
    });
  });

  const totalParticles = arcs.reduce((sum, arc) => sum + arc.particleOffsets.length, 0);

  return (
    <>
      <ambientLight intensity={0.56} color="#bfdbfe" />
      <directionalLight position={[2.8, 2.2, 2.2]} intensity={1.24} color="#ccfbf1" />
      <pointLight position={[-2.3, -0.3, 2.3]} intensity={1.65} color={CYAN} />

      <group ref={globeGroupRef}>
        <mesh>
          <sphereGeometry args={[radius, mobile ? 48 : 64, mobile ? 48 : 64]} />
          <meshStandardMaterial
            map={globeTexture ?? undefined}
            color="#102f57"
            roughness={0.56}
            metalness={0.34}
            emissive="#11385c"
            emissiveIntensity={0.5}
          />
        </mesh>

        <mesh>
          <sphereGeometry args={[radius * 1.02, 64, 64]} />
          <meshBasicMaterial color="#67e8f9" transparent opacity={0.12} blending={THREE.AdditiveBlending} />
        </mesh>

        <mesh>
          <sphereGeometry args={[radius * 1.08, 48, 48]} />
          <meshBasicMaterial color={EMERALD} transparent opacity={0.085} blending={THREE.AdditiveBlending} />
        </mesh>

        {[0.88, 1.0, 1.12].map((mul) => (
          <mesh key={mul} rotation={[Math.PI / (2.5 + mul), 0, 0]}>
            <torusGeometry args={[radius * mul, 0.004, 8, 120]} />
            <meshBasicMaterial color={SOFT_BLUE} transparent opacity={0.12} />
          </mesh>
        ))}

        {Array.from(nodeMap.entries()).map(([id, node]) => (
          <mesh key={id} position={node.position}>
            <sphereGeometry args={[node.kind === "key" ? 0.034 : 0.024, 14, 14]} />
            <meshBasicMaterial color={node.kind === "key" ? EMERALD : CYAN} transparent opacity={node.kind === "key" ? 1 : 0.78} />
          </mesh>
        ))}

        {arcs.map((arc) => (
          <group key={arc.key}>
            <mesh>
              <tubeGeometry args={[arc.curve, 90, arc.thickness * 1.22, 10, false]} />
              <meshBasicMaterial color={arc.color} transparent opacity={0.38} />
            </mesh>
            <primitive object={arc.line} />
          </group>
        ))}

        {Array.from({ length: totalParticles }).map((_, index) => (
          <mesh
            key={`particle-${index}`}
            ref={(el) => {
              particleRefs.current[index] = el;
            }}
          >
            <sphereGeometry args={[0.02, 10, 10]} />
            <meshBasicMaterial color={index % 2 === 0 ? "#67e8f9" : "#6ee7b7"} transparent opacity={1} />
          </mesh>
        ))}
      </group>

      {labels.map((label, index) => (
        <group
          key={label.name}
          ref={(el) => {
            labelMeshesRef.current[index] = el;
          }}
        >
          <Html center distanceFactor={8}>
            <div
              ref={(el) => {
                labelDomRefs.current[index] = el;
              }}
              className="group pointer-events-auto cursor-default transition-opacity duration-500"
              onPointerEnter={() => setHovered(label.name)}
              onPointerLeave={() => setHovered((current) => (current === label.name ? null : current))}
              style={{
                opacity: 0.95,
                fontSize: "12px",
                whiteSpace: "nowrap",
                transform: "translate(-50%, -50%)",
                maxWidth: "96px",
                overflow: "hidden",
                textOverflow: "ellipsis",
                padding: "4px 8px",
                borderRadius: "999px",
                background: "rgba(248,250,252,0.88)",
                border: `1px solid ${label.color}66`,
                color: "#0f172a",
                boxShadow: "0 0 0 1px rgba(16,185,129,0.18), 0 8px 20px rgba(2,6,23,0.22)",
                fontWeight: 700,
                letterSpacing: "0.04em",
              }}
            >
              {label.name}
              <span className="pointer-events-none absolute left-1/2 top-[122%] hidden -translate-x-1/2 rounded-md border border-emerald-200/60 bg-slate-50/95 px-2 py-1 text-[10px] normal-case tracking-normal text-slate-700 shadow-lg group-hover:block">
                {label.tooltip}
              </span>
            </div>
          </Html>
        </group>
      ))}

      <OrbitControls
        enablePan={false}
        enableZoom={false}
        autoRotate
        autoRotateSpeed={mobile ? 0.4 : 0.52}
        rotateSpeed={mobile ? 0.45 : 0.62}
        minPolarAngle={Math.PI * 0.24}
        maxPolarAngle={Math.PI * 0.76}
        enableDamping
        dampingFactor={0.07}
      />
    </>
  );
}

export default function AutomationGlobe3D() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)");
    const onChange = () => setIsMobile(media.matches);
    onChange();
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  return (
    <div className="mx-auto h-[300px] w-full max-w-[640px] sm:h-[380px] lg:h-[470px]">
      <Canvas
        camera={{ position: [0, 0, 4.4], fov: 37 }}
        gl={{ antialias: true, powerPreference: "high-performance", alpha: true }}
        dpr={[1, 2]}
      >
        <fog attach="fog" args={["#020617", 4.8, 8.5]} />
        <Suspense fallback={null}>
          <GlobeScene mobile={isMobile} />
        </Suspense>
      </Canvas>
    </div>
  );
}
