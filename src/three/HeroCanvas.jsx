import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import FloatingBall from "./FloatingBall";

export default function HeroCanvas() {
  return (
    <div className="h-full w-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={1.2} />
        <directionalLight position={[2, 2, 2]} intensity={2} />
        <pointLight position={[-2, -2, 2]} intensity={2} color="#a855f7" />

        <FloatingBall />

        <Environment preset="city" />  //sunset

        <OrbitControls
          enableZoom={false}
          autoRotate
          autoRotateSpeed={1.5}
        />
      </Canvas>
    </div>
  );
}