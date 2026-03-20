"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Line } from "@react-three/drei";
import * as THREE from "three";

type GlobePoint = {
  position: THREE.Vector3;
};

const POINT_COUNT = 56;
const ARC_COUNT = 22;

function generatePoints(count: number) {
  return Array.from({ length: count }, (_, index) => {
    const theta = Math.acos(1 - (2 * (index + 0.5)) / count);
    const phi = Math.PI * (1 + Math.sqrt(5)) * index;

    const radius = 1;
    const x = radius * Math.cos(phi) * Math.sin(theta);
    const y = radius * Math.sin(phi) * Math.sin(theta);
    const z = radius * Math.cos(theta);

    return {
      position: new THREE.Vector3(x, y, z),
    };
  });
}

function GlobeMesh() {
  const groupRef = useRef<THREE.Group>(null);
  const points = useMemo<GlobePoint[]>(() => generatePoints(POINT_COUNT), []);

  const arcs = useMemo(() => {
    return Array.from({ length: ARC_COUNT }, (_, index) => {
      const start = points[index % points.length].position;
      const end = points[(index * 7 + 11) % points.length].position;
      const control = start
        .clone()
        .add(end)
        .multiplyScalar(0.5)
        .normalize()
        .multiplyScalar(1.35);

      const curve = new THREE.QuadraticBezierCurve3(start, control, end);
      return curve.getPoints(32);
    });
  }, [points]);

  useFrame(() => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += 0.0025;
  });

  return (
    <group ref={groupRef}>
      <mesh>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial color="#0b1220" roughness={0.5} metalness={0.2} />
      </mesh>

      {points.map((point, index) => (
        <mesh key={`node-${index}`} position={point.position.clone().multiplyScalar(1.02)}>
          <sphereGeometry args={[0.025, 14, 14]} />
          <meshStandardMaterial color={index % 2 === 0 ? "#34d399" : "#22d3ee"} emissive="#22d3ee" emissiveIntensity={0.6} />
        </mesh>
      ))}

      {arcs.map((curvePoints, index) => (
        <Line key={`arc-${index}`} points={curvePoints} color="#22d3ee" lineWidth={1} transparent opacity={0.55} />
      ))}
    </group>
  );
}

export function AutomationGlobe3D() {
  return (
    <div className="relative h-[360px] w-full overflow-hidden rounded-[30px] border border-emerald-400/20 bg-slate-950/80 p-2 shadow-[0_26px_80px_rgba(2,6,23,0.7)] sm:h-[420px]">
      <Canvas
        camera={{ position: [0, 0, 3.2], fov: 45 }}
        style={{ width: "100%", height: "100%" }}
      >
        <ambientLight intensity={0.7} />
        <pointLight position={[3, 2, 3]} intensity={1.1} color="#67e8f9" />
        <pointLight position={[-3, -2, -3]} intensity={0.5} color="#34d399" />

        <GlobeMesh />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>

      <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full border border-emerald-300/30 bg-slate-900/65 px-4 py-1 text-[11px] uppercase tracking-[0.22em] text-emerald-200/85">
        Drag to rotate
      </div>
    </div>
  );
}
