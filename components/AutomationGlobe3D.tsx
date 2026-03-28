"use client";

import { Html, OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

const CYAN = "#22d3ee";
const EMERALD = "#34d399";

function GlobeScene() {
  const globeRef = useRef<THREE.Mesh>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)");
    const onChange = () => setIsMobile(media.matches);
    onChange();
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  const totalNodes = isMobile ? 16 : 30;
  const arcCount = isMobile ? 5 : 10;

  const nodes = useMemo(() => {
    const points: THREE.Vector3[] = [];
    for (let i = 0; i < totalNodes; i++) {
      const phi = Math.acos(-1 + (2 * i) / totalNodes);
      const theta = Math.sqrt(totalNodes * Math.PI) * phi;
      points.push(
        new THREE.Vector3(
          Math.cos(theta) * Math.sin(phi),
          Math.sin(theta) * Math.sin(phi),
          Math.cos(phi)
        ).multiplyScalar(1.3)
      );
    }
    return points;
  }, [totalNodes]);

  useFrame(() => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.002;
    }
  });

  return (
    <>
      {/* LIGHTING */}
      <ambientLight intensity={0.3} />
      <directionalLight position={[3, 2, 2]} intensity={1} />
      <pointLight position={[-2, 0, 2]} intensity={2} color={CYAN} />

      {/* GLOBE */}
      <mesh ref={globeRef}>
        <sphereGeometry args={[1.3, isMobile ? 40 : 64, isMobile ? 40 : 64]} />
        <meshPhysicalMaterial
          color="#0b1c2c"
          roughness={0.5}
          metalness={0.4}
          clearcoat={1}
          clearcoatRoughness={0.2}
          emissive="#0b1c2c"
          emissiveIntensity={isMobile ? 0.2 : 0.3}
        />
      </mesh>

      {/* GLOW */}
      <mesh>
        <sphereGeometry args={[1.35, isMobile ? 32 : 64, isMobile ? 32 : 64]} />
        <meshBasicMaterial
          color={EMERALD}
          transparent
          opacity={isMobile ? 0.06 : 0.08}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* NODES */}
      {nodes.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[isMobile ? 0.022 : 0.03, 12, 12]} />
          <meshBasicMaterial
            color={i % 2 ? CYAN : EMERALD}
            transparent
            opacity={0.8}
          />
        </mesh>
      ))}

      {/* ARCS */}
      {nodes.slice(0, arcCount).map((start, i) => {
        const end = nodes[(i + 5) % nodes.length];

        const curve = new THREE.QuadraticBezierCurve3(
          start,
          start.clone().add(end).multiplyScalar(0.5).normalize().multiplyScalar(2),
          end
        );

        const points = curve.getPoints(isMobile ? 28 : 50);
        const geometry = new THREE.BufferGeometry().setFromPoints(points);

        return (
          <primitive key={`${i}-${start.x.toFixed(3)}-${end.x.toFixed(3)}`} object={new THREE.Line(
            geometry,
            new THREE.LineBasicMaterial({
              color: CYAN,
              transparent: true,
              opacity: isMobile ? 0.35 : 0.5,
            })
          )} />
        );
      })}

      {/* LABEL */}
      <Html position={[1.6, 0.3, 0]} center>
        <div className="rounded-full border border-emerald-200 bg-white/90 px-3 py-1 text-xs font-semibold text-slate-700 backdrop-blur">
          CRM
        </div>
      </Html>

      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={isMobile ? 0.42 : 0.6} rotateSpeed={isMobile ? 0.45 : 0.7} />
    </>
  );
}

export default function AutomationGlobe3D() {
  return (
    <div className="mx-auto h-[250px] w-full max-w-[560px] sm:h-[320px] lg:h-[420px]">
      <Canvas
        camera={{ position: [0, 0, 4], fov: 40 }}
        gl={{ antialias: true, powerPreference: "high-performance" }}
        dpr={[1, 1.5]}
      >
        <Suspense fallback={null}>
        <ambientLight intensity={0.3} />

<directionalLight
  position={[3, 2, 2]}
  intensity={1}
  color="#d1fae5"
/>

<pointLight
  position={[-2, 0, 2]}
  intensity={2}
  color="#22d3ee"
/>
          <GlobeScene />
        </Suspense>
      </Canvas>
    </div>
  );
}
