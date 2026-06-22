"use client";
import { Canvas } from "@react-three/fiber";
import { Float } from "@react-three/drei";

function Sphere() {
  return (
    <Float
      speed={1.5}
      rotationIntensity={1}
      floatIntensity={1}
    >
      <mesh>
        <sphereGeometry args={[1.4, 64, 64]} />

        <meshStandardMaterial
            color="#6d5cff"
            wireframe
        />
      </mesh>
    </Float>
  );
}

export default function OrbScene() {
  return (
    <Canvas>

      <ambientLight intensity={1} />

      <pointLight
        position={[5, 5, 5]}
      />

      <Sphere />

    </Canvas>
  );
}