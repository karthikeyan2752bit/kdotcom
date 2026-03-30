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
  anchor: string;
};

type NetworkNode = {
  id: string;
  lat: number;
  lon: number;
  kind: "key" | "standard";
};

type RouteDefinition = {
  id: string;
  from: string;
  to: string;
  thickness: number;
  lift: number;
  speed: number;
  pulseCount: number;
  color: string;
  mode: "persistent" | "cycle";
};

type RouteRuntime = RouteDefinition & {
  curve: THREE.CubicBezierCurve3;
  points: THREE.Vector3[];
  offset: number;
  pulseOffsets: number[];
  pulseSpeeds: number[];
};

const MODULES: ModuleLabel[] = [
  { name: "CRM", tooltip: "Customer operations", color: CYAN, anchor: "europe" },
  { name: "Billing", tooltip: "Billing automation", color: EMERALD, anchor: "north-america" },
  { name: "ERP", tooltip: "Unified enterprise data", color: SOFT_BLUE, anchor: "india" },
  { name: "Hospital", tooltip: "Clinical systems", color: EMERALD, anchor: "india" },
  { name: "WhatsApp", tooltip: "Instant notifications", color: CYAN, anchor: "japan" },
];

const NODES: NetworkNode[] = [
  { id: "north-america", lat: 37, lon: -100, kind: "key" },
  { id: "us-west", lat: 35, lon: -122, kind: "standard" },
  { id: "brazil", lat: -10, lon: -56, kind: "standard" },
  { id: "uk", lat: 54, lon: -2, kind: "standard" },
  { id: "europe", lat: 49, lon: 10, kind: "key" },
  { id: "africa", lat: 8, lon: 21, kind: "standard" },
  { id: "middle-east", lat: 26, lon: 46, kind: "standard" },
  { id: "india", lat: 21, lon: 78, kind: "key" },
  { id: "singapore", lat: 1, lon: 104, kind: "standard" },
  { id: "japan", lat: 36, lon: 138, kind: "standard" },
  { id: "australia", lat: -26, lon: 134, kind: "key" },
  { id: "cloud", lat: 54, lon: -18, kind: "key" },
  { id: "crm", lat: 41, lon: -74, kind: "standard" },
  { id: "erp", lat: 30, lon: 76, kind: "standard" },
  { id: "hospital", lat: 13, lon: 77, kind: "standard" },
  { id: "whatsapp", lat: 35, lon: 139, kind: "standard" },
];

const ROUTES: RouteDefinition[] = [
  { id: "india-europe", from: "india", to: "europe", thickness: 0.007, lift: 1.28, speed: 0.085, pulseCount: 2, color: CYAN, mode: "cycle" },
  { id: "us-asia", from: "north-america", to: "japan", thickness: 0.009, lift: 1.36, speed: 0.06, pulseCount: 3, color: SOFT_BLUE, mode: "cycle" },
  { id: "billing-crm", from: "north-america", to: "crm", thickness: 0.006, lift: 1.2, speed: 0.12, pulseCount: 1, color: CYAN, mode: "cycle" },
  { id: "hospital-whatsapp", from: "hospital", to: "whatsapp", thickness: 0.006, lift: 1.22, speed: 0.1, pulseCount: 2, color: EMERALD, mode: "cycle" },
  { id: "erp-cloud", from: "erp", to: "cloud", thickness: 0.007, lift: 1.26, speed: 0.082, pulseCount: 2, color: EMERALD, mode: "cycle" },
  { id: "africa-europe", from: "africa", to: "europe", thickness: 0.005, lift: 1.17, speed: 0.14, pulseCount: 1, color: CYAN, mode: "cycle" },
  { id: "us-europe", from: "us-west", to: "uk", thickness: 0.006, lift: 1.23, speed: 0.108, pulseCount: 2, color: SOFT_BLUE, mode: "cycle" },
  { id: "india-singapore", from: "india", to: "singapore", thickness: 0.005, lift: 1.18, speed: 0.17, pulseCount: 1, color: CYAN, mode: "cycle" },
  { id: "singapore-australia", from: "singapore", to: "australia", thickness: 0.006, lift: 1.2, speed: 0.13, pulseCount: 1, color: EMERALD, mode: "cycle" },
  { id: "brazil-africa", from: "brazil", to: "africa", thickness: 0.006, lift: 1.28, speed: 0.094, pulseCount: 2, color: SOFT_BLUE, mode: "cycle" },
  { id: "middle-east-india", from: "middle-east", to: "india", thickness: 0.0045, lift: 1.16, speed: 0.16, pulseCount: 1, color: EMERALD, mode: "cycle" },
  { id: "cloud-japan", from: "cloud", to: "japan", thickness: 0.007, lift: 1.34, speed: 0.068, pulseCount: 2, color: CYAN, mode: "cycle" },
  { id: "north-america-brazil", from: "north-america", to: "brazil", thickness: 0.005, lift: 1.22, speed: 0.115, pulseCount: 1, color: EMERALD, mode: "cycle" },
  { id: "uk-india", from: "uk", to: "india", thickness: 0.006, lift: 1.24, speed: 0.097, pulseCount: 2, color: SOFT_BLUE, mode: "cycle" },
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

function lonLatToCanvas(lon: number, lat: number, width: number, height: number) {
  return {
    x: ((lon + 180) / 360) * width,
    y: ((90 - lat) / 180) * height,
  };
}

function drawLandPath(
  ctx: CanvasRenderingContext2D,
  points: Array<[number, number]>,
  width: number,
  height: number,
) {
  if (points.length < 3) return;
  const start = lonLatToCanvas(points[0][0], points[0][1], width, height);
  ctx.beginPath();
  ctx.moveTo(start.x, start.y);
  points.slice(1).forEach(([lon, lat]) => {
    const next = lonLatToCanvas(lon, lat, width, height);
    ctx.lineTo(next.x, next.y);
  });
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
}

function createGlobeTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 2048;
  canvas.height = 1024;
  const ctx = canvas.getContext("2d");
  if (!ctx) return null;

  const bgGradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  bgGradient.addColorStop(0, "#031020");
  bgGradient.addColorStop(0.5, "#072238");
  bgGradient.addColorStop(1, "#03111f");
  ctx.fillStyle = bgGradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.globalAlpha = 0.15;
  ctx.strokeStyle = "#67e8f9";
  ctx.lineWidth = 1;
  for (let y = 24; y < canvas.height; y += 32) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(canvas.width, y);
    ctx.stroke();
  }
  for (let x = 24; x < canvas.width; x += 36) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, canvas.height);
    ctx.stroke();
  }

  ctx.globalAlpha = 1;
  ctx.fillStyle = "rgba(9, 28, 44, 0.92)";
  ctx.strokeStyle = "rgba(34, 211, 238, 0.28)";
  ctx.lineWidth = 2;

  const continents: Array<Array<[number, number]>> = [
    [
      [-168, 71], [-145, 73], [-132, 66], [-124, 55], [-118, 47], [-112, 38], [-103, 29], [-98, 22], [-89, 19],
      [-82, 24], [-79, 33], [-81, 42], [-90, 50], [-105, 58], [-122, 67], [-145, 70],
    ],
    [
      [-81, 12], [-75, 8], [-73, -4], [-70, -15], [-64, -26], [-58, -36], [-54, -47], [-49, -51], [-43, -45],
      [-45, -34], [-49, -23], [-55, -12], [-61, -2], [-69, 6],
    ],
    [
      [-10, 37], [1, 44], [12, 53], [29, 60], [49, 58], [72, 56], [96, 52], [120, 46], [141, 48], [158, 54],
      [171, 60], [175, 52], [161, 36], [147, 24], [126, 21], [111, 14], [96, 9], [83, 13], [75, 20], [67, 26],
      [56, 29], [45, 36], [34, 44], [20, 44], [8, 40],
    ],
    [
      [-17, 35], [-5, 31], [8, 30], [20, 25], [31, 15], [34, 4], [30, -8], [22, -20], [12, -30], [3, -34],
      [-4, -33], [-10, -24], [-14, -9], [-16, 6],
    ],
    [
      [111, -10], [118, -17], [129, -21], [139, -28], [152, -31], [154, -23], [149, -16], [140, -12], [131, -11],
      [121, -13],
    ],
    [[-52, 62], [-41, 70], [-29, 73], [-19, 69], [-28, 61], [-42, 60]],
  ];

  continents.forEach((continent) => drawLandPath(ctx, continent, canvas.width, canvas.height));

  const highlight = ctx.createRadialGradient(canvas.width * 0.72, canvas.height * 0.42, 50, canvas.width * 0.72, canvas.height * 0.42, 460);
  highlight.addColorStop(0, "rgba(110, 231, 183, 0.26)");
  highlight.addColorStop(1, "rgba(110, 231, 183, 0)");
  ctx.fillStyle = highlight;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.globalAlpha = 0.22;
  ctx.fillStyle = "#67e8f9";
  for (let i = 0; i < 1200; i += 1) {
    const x = (i * 379) % canvas.width;
    const y = (i * 193) % canvas.height;
    ctx.fillRect(x, y, 1, 1);
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 8;
  texture.needsUpdate = true;
  return texture;
}

function GlobeScene({ mobile }: { mobile: boolean }) {
  const globeGroupRef = useRef<THREE.Group>(null);
  const labelOrbitRef = useRef<THREE.Group>(null);
  const atmosphereRef = useRef<THREE.Mesh>(null);
  const lineRefs = useRef<Array<THREE.Line | null>>([]);
  const lineMaterialRefs = useRef<Array<THREE.LineBasicMaterial | null>>([]);
  const pulseRefs = useRef<Array<THREE.Mesh | null>>([]);

  const radius = mobile ? 1.56 : 1.72;

  const nodeMap = useMemo(() => {
    const activeNodes = mobile ? NODES.slice(0, 12) : NODES;
    const map = new Map<string, { position: THREE.Vector3; kind: NetworkNode["kind"] }>();
    activeNodes.forEach((node) => {
      map.set(node.id, {
        position: latLonToPosition(node.lat, node.lon, radius),
        kind: node.kind,
      });
    });
    return map;
  }, [mobile, radius]);

  const routes = useMemo<RouteRuntime[]>(() => {
    const activeRoutes = mobile ? ROUTES.slice(0, 8) : ROUTES;
    return activeRoutes
      .map((route, routeIndex) => {
        const from = nodeMap.get(route.from)?.position;
        const to = nodeMap.get(route.to)?.position;
        if (!from || !to) return null;

        const chord = from.clone().add(to).multiplyScalar(0.5).normalize();
        const distance = from.distanceTo(to);
        const bulge = route.lift + THREE.MathUtils.mapLinear(distance, 0.5, 3.8, 0.03, 0.2);

        const controlA = from.clone().lerp(chord, 0.56).normalize().multiplyScalar(radius * bulge);
        const controlB = to.clone().lerp(chord, 0.56).normalize().multiplyScalar(radius * bulge);
        const curve = new THREE.CubicBezierCurve3(from, controlA, controlB, to);
        const points = curve.getPoints(mobile ? 56 : 84);

        return {
          ...route,
          curve,
          points,
          offset: (routeIndex * 0.137) % 1,
          pulseOffsets: Array.from({ length: route.pulseCount }, (_, i) => ((i + 1) / (route.pulseCount + 1) + routeIndex * 0.09) % 1),
          pulseSpeeds: Array.from({ length: route.pulseCount }, (_, i) => route.speed * (1.15 + i * 0.22)),
        };
      })
      .filter((route): route is RouteRuntime => Boolean(route));
  }, [mobile, nodeMap, radius]);

  const labels = useMemo(
    () =>
      MODULES.map((module) => {
        const anchor = nodeMap.get(module.anchor)?.position.clone().multiplyScalar(1.2) ?? new THREE.Vector3(0, 0, 0);
        return { ...module, anchor };
      }),
    [nodeMap],
  );

  const globeTexture = useMemo(() => createGlobeTexture(), []);

  const pulseMap = useMemo(() => {
    const mapped: Array<{ routeIndex: number; pulseIndex: number }> = [];
    routes.forEach((route, routeIndex) => {
      route.pulseOffsets.forEach((_, pulseIndex) => {
        mapped.push({ routeIndex, pulseIndex });
      });
    });
    return mapped;
  }, [routes]);

  useFrame((state, delta) => {
    const elapsed = state.clock.elapsedTime;

    if (globeGroupRef.current) {
      globeGroupRef.current.rotation.y += 0.005 * (delta * 60);
      globeGroupRef.current.rotation.x = THREE.MathUtils.damp(globeGroupRef.current.rotation.x, -0.08, 2.4, delta);
      globeGroupRef.current.rotation.z = THREE.MathUtils.damp(globeGroupRef.current.rotation.z, 0.03, 2.8, delta);
    }

    if (labelOrbitRef.current) {
      labelOrbitRef.current.rotation.y -= 0.005 * (delta * 60);
    }

    if (atmosphereRef.current) {
      const pulse = 0.09 + Math.sin(elapsed * 0.42) * 0.015;
      (atmosphereRef.current.material as THREE.MeshBasicMaterial).opacity = pulse;
    }

    routes.forEach((route, routeIndex) => {
      const line = lineRefs.current[routeIndex];
      const lineMaterial = lineMaterialRefs.current[routeIndex];
      if (!line || !lineMaterial) return;

      const t = (elapsed * route.speed + route.offset) % 1;
      const drawCutoff = 0.58;
      const holdCutoff = 0.8;

      let progress = 1;
      let opacity = route.mode === "persistent" ? 0.28 : 0.08;

      if (route.mode === "persistent") {
        const wave = 0.5 + 0.5 * Math.sin(elapsed * (0.65 + routeIndex * 0.06));
        progress = THREE.MathUtils.lerp(0.72, 1, wave);
        opacity = THREE.MathUtils.lerp(0.24, 0.52, wave);
      } else if (t < drawCutoff) {
        progress = t / drawCutoff;
        opacity = THREE.MathUtils.lerp(0.08, 0.72, progress);
      } else if (t < holdCutoff) {
        progress = 1;
        opacity = 0.72;
      } else {
        progress = 1;
        opacity = THREE.MathUtils.lerp(0.72, 0.04, (t - holdCutoff) / (1 - holdCutoff));
      }

      line.geometry.setDrawRange(0, Math.max(2, Math.floor(route.points.length * progress)));
      lineMaterial.opacity = opacity;
    });

    pulseMap.forEach((item, pulseGlobalIndex) => {
      const mesh = pulseRefs.current[pulseGlobalIndex];
      if (!mesh) return;
      const route = routes[item.routeIndex];
      const routeT = (elapsed * route.speed + route.offset) % 1;
      const drawProgress = route.mode === "persistent" ? 1 : Math.min(1, routeT / 0.58);
      const pulseProgress = (elapsed * route.pulseSpeeds[item.pulseIndex] + route.pulseOffsets[item.pulseIndex]) % 1;

      if (pulseProgress > drawProgress + 0.05 && route.mode === "cycle") {
        (mesh.material as THREE.MeshBasicMaterial).opacity = 0;
        return;
      }

      const point = route.curve.getPoint(pulseProgress);
      mesh.position.copy(point);
      (mesh.material as THREE.MeshBasicMaterial).opacity = route.mode === "persistent" ? 0.9 : 0.95;
      mesh.scale.setScalar(0.9 + Math.sin(elapsed * 2.2 + pulseGlobalIndex) * 0.08);
    });

  });

  return (
    <>
      <ambientLight intensity={0.38} color="#a5f3fc" />
      <hemisphereLight intensity={0.62} groundColor="#020617" color="#67e8f9" />
      <directionalLight position={[4.1, 2.8, 3.4]} intensity={1.5} color="#d1fae5" />
      <pointLight position={[-2.8, -1.1, 2.8]} intensity={0.92} color="#0f172a" />
      <pointLight position={[-2.3, -0.7, 2.6]} intensity={1.08} color={CYAN} />

      <group ref={globeGroupRef}>
        <mesh>
          <sphereGeometry args={[radius, mobile ? 54 : 82, mobile ? 54 : 82]} />
          <meshStandardMaterial
            map={globeTexture ?? undefined}
            color="#051628"
            roughness={0.62}
            metalness={0.24}
            emissive="#0a2537"
            emissiveIntensity={0.38}
          />
        </mesh>

        <mesh>
          <sphereGeometry args={[radius * 1.004, mobile ? 44 : 64, mobile ? 44 : 64]} />
          <meshBasicMaterial color="#67e8f9" transparent opacity={0.08} blending={THREE.AdditiveBlending} />
        </mesh>

        <mesh ref={atmosphereRef}>
          <sphereGeometry args={[radius * 1.09, mobile ? 44 : 60, mobile ? 44 : 60]} />
          <meshBasicMaterial color="#6ee7f9" transparent opacity={0.11} blending={THREE.AdditiveBlending} />
        </mesh>

        <mesh>
          <sphereGeometry args={[radius * 1.13, mobile ? 36 : 44, mobile ? 36 : 44]} />
          <meshBasicMaterial color="#6ee7f9" transparent opacity={0.055} blending={THREE.AdditiveBlending} />
        </mesh>

        {routes.map((route, routeIndex) => (
          <group key={route.id}>
            <mesh>
              <tubeGeometry args={[route.curve, mobile ? 48 : 72, route.thickness, 12, false]} />
              <meshBasicMaterial color={route.color} transparent opacity={route.mode === "persistent" ? 0.18 : 0.1} />
            </mesh>

            <line
              ref={(line) => {
                lineRefs.current[routeIndex] = line as unknown as THREE.Line | null;
              }}
            >
              <bufferGeometry>
                <bufferAttribute
                  attach="attributes-position"
                  args={[new Float32Array(route.points.flatMap((point) => [point.x, point.y, point.z])), 3]}
                />
              </bufferGeometry>
              <lineBasicMaterial
                ref={(material) => {
                  lineMaterialRefs.current[routeIndex] = material as THREE.LineBasicMaterial | null;
                }}
                color={route.color}
                transparent
                opacity={0.5}
              />
            </line>
          </group>
        ))}

        {Array.from(nodeMap.entries()).map(([id, node]) => (
          <mesh key={id} position={node.position}>
            <sphereGeometry args={[node.kind === "key" ? 0.034 : 0.024, 14, 14]} />
            <meshBasicMaterial
              color={node.kind === "key" ? EMERALD : CYAN}
              transparent
              opacity={node.kind === "key" ? 0.96 : 0.74}
            />
          </mesh>
        ))}

        {pulseMap.map((item, pulseGlobalIndex) => {
          const route = routes[item.routeIndex];
          return (
            <mesh
              key={`${route.id}-pulse-${item.pulseIndex}`}
              ref={(mesh) => {
                pulseRefs.current[pulseGlobalIndex] = mesh;
              }}
            >
              <sphereGeometry args={[0.018, 12, 12]} />
              <meshBasicMaterial
                color={item.pulseIndex % 2 === 0 ? "#67e8f9" : "#6ee7b7"}
                transparent
                opacity={0.92}
              />
            </mesh>
          );
        })}
        <group ref={labelOrbitRef}>
          {labels.map((label) => (
            <group key={label.name} position={label.anchor}>
              <Html center distanceFactor={9}>
                <div
                  className="pointer-events-none select-none rounded-full border px-2 py-1 text-[11px] font-semibold uppercase tracking-[0.08em]"
                  style={{
                    opacity: 0.94,
                    borderColor: `${label.color}80`,
                    background: "rgba(248, 250, 252, 0.9)",
                    color: "#0f172a",
                    whiteSpace: "nowrap",
                    boxShadow: "0 0 0 1px rgba(34,211,238,0.16), 0 8px 24px rgba(2,6,23,0.24)",
                  }}
                >
                  {label.name}
                </div>
              </Html>
            </group>
          ))}
        </group>
      </group>

      <OrbitControls
        enablePan={false}
        enableZoom={false}
        autoRotate
        autoRotateSpeed={mobile ? 0.5 : 0.42}
        rotateSpeed={mobile ? 0.38 : 0.32}
        minPolarAngle={Math.PI * 0.22}
        maxPolarAngle={Math.PI * 0.78}
        enableDamping
        dampingFactor={0.06}
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
    <div className="relative h-[350px] w-full overflow-visible sm:h-[620px] lg:h-[680px]">
      <div className="pointer-events-none absolute -right-8 top-1/2 h-[350px] w-[350px] -translate-y-1/2 overflow-visible sm:h-[620px] sm:w-[620px] lg:-right-10 lg:h-[680px] lg:w-[680px]">
        <div className="pointer-events-none absolute inset-x-[8%] -top-10 h-28 rounded-full bg-cyan-400/15 blur-3xl" />
        <div className="pointer-events-none absolute inset-x-[14%] -bottom-8 h-24 rounded-full bg-emerald-400/10 blur-3xl" />
        <Canvas
          camera={{ position: [0, 0, 5.2], fov: 34 }}
          gl={{ antialias: true, powerPreference: "high-performance", alpha: true }}
          dpr={[1, 2]}
          className="h-full w-full overflow-visible"
        >
          <fog attach="fog" args={["#020617", 5.8, 10.1]} />
          <Suspense fallback={null}>
            <GlobeScene mobile={isMobile} />
          </Suspense>
        </Canvas>
        <div className="pointer-events-none absolute bottom-6 left-1/2 z-10 -translate-x-1/2 rounded-full border border-cyan-300/30 bg-slate-950/65 px-4 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-cyan-100/80">
          Drag to rotate
        </div>
      </div>
    </div>
  );
}
