"use client";

import { Environment, Html, OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";

const CYAN = "#22d3ee";
const EMERALD = "#34d399";

function GlobeScene() {
  const globeRef = useRef<THREE.Mesh>(null);

  const nodes = useMemo(() => {
    const points: THREE.Vector3[] = [];
    for (let i = 0; i < 30; i++) {
      const phi = Math.acos(-1 + (2 * i) / 30);
      const theta = Math.sqrt(30 * Math.PI) * phi;
      points.push(
        new THREE.Vector3(
          Math.cos(theta) * Math.sin(phi),
          Math.sin(theta) * Math.sin(phi),
          Math.cos(phi)
        ).multiplyScalar(1.3)
      );
    }
    return points;
  }, []);

  useFrame((state) => {
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
        <sphereGeometry args={[1.3, 64, 64]} />
        <meshPhysicalMaterial
          color="#0b1c2c"
          roughness={0.5}
          metalness={0.4}
          clearcoat={1}
          clearcoatRoughness={0.2}
          emissive="#0b1c2c"
          emissiveIntensity={0.3}
        />
      </mesh>

      {/* GLOW */}
      <mesh>
        <sphereGeometry args={[1.35, 64, 64]} />
        <meshBasicMaterial
          color={EMERALD}
          transparent
          opacity={0.08}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* NODES */}
      {nodes.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.03, 16, 16]} />
          <meshBasicMaterial
            color={i % 2 ? CYAN : EMERALD}
            transparent
            opacity={0.8}
          />
        </mesh>
      ))}

      {/* ARCS */}
      {nodes.slice(0, 10).map((start, i) => {
        const end = nodes[(i + 5) % nodes.length];

        const curve = new THREE.QuadraticBezierCurve3(
          start,
          start.clone().add(end).multiplyScalar(0.5).normalize().multiplyScalar(2),
          end
        );

        const points = curve.getPoints(50);
        const geometry = new THREE.BufferGeometry().setFromPoints(points);

        return (
          <primitive object={new THREE.Line(
            geometry,
            new THREE.LineBasicMaterial({
              color: CYAN,
              transparent: true,
              opacity: 0.5,
            })
          )} />
        );
      })}

      {/* LABEL */}
      <Html position={[1.6, 0.3, 0]} center>
        <div className="rounded-full bg-black/60 px-3 py-1 text-xs text-white backdrop-blur">
          CRM
        </div>
      </Html>

      <OrbitControls
        enableZoom={false}
        autoRotate
        autoRotateSpeed={0.6}
      />
    </>
  );
}

export default function AutomationGlobe3D() {
  return (
    <div className="h-[420px] w-full">
      <Canvas
        camera={{ position: [0, 0, 4], fov: 40 }}
        gl={{ antialias: true }}
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