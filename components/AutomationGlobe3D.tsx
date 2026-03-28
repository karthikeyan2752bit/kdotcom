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
  { name: "CRM", tooltip: "Customer operations" },
  { name: "Billing", tooltip: "Billing automation" },
  { name: "Inventory", tooltip: "Inventory sync" },
  { name: "HRMS", tooltip: "Employee workflows" },
  { name: "ERP", tooltip: "Unified enterprise data" },
  { name: "Hospital", tooltip: "Hospital appointment system" },
  { name: "Appointment", tooltip: "Booking orchestration" },
  { name: "WhatsApp", tooltip: "Message automation" },
  { name: "Automation", tooltip: "Workflow automation" },
  { name: "Analytics", tooltip: "Business analytics" },
  { name: "Server", tooltip: "Cloud server setup" },
  { name: "Cloud", tooltip: "Cloud infrastructure" },
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
  bg.addColorStop(0, "#020814");
  bg.addColorStop(0.5, "#061325");
  bg.addColorStop(1, "#04101f");
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.strokeStyle = "rgba(96,165,250,0.1)";
  ctx.lineWidth = 1;
  for (let y = 32; y < canvas.height; y += 24) {
    ctx.beginPath();
    ctx.moveTo(0, y + Math.sin(y * 0.04) * 4);
    ctx.lineTo(canvas.width, y + Math.cos(y * 0.03) * 4);
    ctx.stroke();
  }

  ctx.fillStyle = "rgba(52,211,153,0.09)";
  for (let i = 0; i < 24; i += 1) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    ctx.beginPath();
    ctx.ellipse(x, y, 40 + Math.random() * 120, 18 + Math.random() * 50, Math.random() * Math.PI, 0, Math.PI * 2);
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
            new THREE.LineBasicMaterial({ color: route.color, transparent: true, opacity: 0.55 }),
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
        radius: radius + 0.34 + (i % 3) * 0.09,
        inclination: -0.7 + ((i * 0.41) % 1.4),
        speed: 0.09 + (i % 4) * 0.018,
        phase: i * 0.57,
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

      const visibilityWave = 0.5 + 0.5 * Math.sin(t * 0.7 + label.phase);
      const front = z > -0.15;
      const target = front ? THREE.MathUtils.lerp(0.12, 0.95, visibilityWave) : 0;
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
      <ambientLight intensity={0.42} color="#7dd3fc" />
      <directionalLight position={[2.8, 2.2, 2.2]} intensity={1.1} color="#d1fae5" />
      <pointLight position={[-2.3, -0.3, 2.3]} intensity={1.5} color={CYAN} />

      <group ref={globeGroupRef}>
        <mesh>
          <sphereGeometry args={[radius, mobile ? 48 : 64, mobile ? 48 : 64]} />
          <meshStandardMaterial
            map={globeTexture ?? undefined}
            color="#061425"
            roughness={0.78}
            metalness={0.28}
            emissive="#09213a"
            emissiveIntensity={0.35}
          />
        </mesh>

        <mesh>
          <sphereGeometry args={[radius * 1.02, 64, 64]} />
          <meshBasicMaterial color={SOFT_BLUE} transparent opacity={0.07} blending={THREE.AdditiveBlending} />
        </mesh>

        <mesh>
          <sphereGeometry args={[radius * 1.08, 48, 48]} />
          <meshBasicMaterial color={EMERALD} transparent opacity={0.05} blending={THREE.AdditiveBlending} />
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
              <tubeGeometry args={[arc.curve, 80, arc.thickness, 10, false]} />
              <meshBasicMaterial color={arc.color} transparent opacity={0.2} />
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
            <sphereGeometry args={[0.016, 10, 10]} />
            <meshBasicMaterial color={index % 2 === 0 ? CYAN : EMERALD} transparent opacity={0.95} />
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
          <Html center transform distanceFactor={8.5}>
            <div
              ref={(el) => {
                labelDomRefs.current[index] = el;
              }}
              className="group cursor-default rounded-full border border-cyan-200/30 bg-slate-950/75 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-cyan-100 shadow-[0_0_20px_rgba(34,211,238,0.18)] backdrop-blur-sm transition-all duration-300"
              onPointerEnter={() => setHovered(label.name)}
              onPointerLeave={() => setHovered((current) => (current === label.name ? null : current))}
              style={{ opacity: 0.95 }}
            >
              {label.name}
              <span className="pointer-events-none absolute left-1/2 top-[120%] hidden -translate-x-1/2 whitespace-nowrap rounded-md border border-emerald-200/30 bg-slate-900/90 px-2 py-1 text-[9px] normal-case tracking-normal text-emerald-100 shadow-lg group-hover:block">
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
        dpr={[1, 1.8]}
      >
        <fog attach="fog" args={["#020617", 4.8, 8.5]} />
        <Suspense fallback={null}>
          <GlobeScene mobile={isMobile} />
        </Suspense>
      </Canvas>
    </div>
  );
}
