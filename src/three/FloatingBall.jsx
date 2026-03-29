import { Float, MeshDistortMaterial, Sphere } from "@react-three/drei";

export default function FloatingBall() {
  return (
    <Float speed={2} rotationIntensity={1.2} floatIntensity={2}>
      <Sphere args={[1.4, 64, 64]} scale={1.6}>
        <MeshDistortMaterial
          color="#7c3aed"
          emissive="#a855f7"
          emissiveIntensity={0.6}
          distort={0.35}
          speed={2}
          roughness={0}
        />
      </Sphere>
    </Float>
  );
}