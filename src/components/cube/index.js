"use client";
import React, { useEffect, useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { OrbitControls } from "@react-three/drei";
import { useMotionValue, useSpring } from "framer-motion";
import {motion} from "framer-motion-3d"
const Index = () => {
  return (
    <div style={{ width: "100%", height: 400 }}>
      <Canvas>
        <OrbitControls enableZoom={false} enablePan={false} />
        <ambientLight intensity={2} />
        <directionalLight position={[2, 1, 1]} />
        {/* <pointLight position={[10, 10, 10]} /> */}
        <Cube />
      </Canvas>
    </div>
  );
};

export default Index;

function Cube() {
  const mesh = useRef(null);
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };
  const manageMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    const { clientX, clientY } = e;
    const x = clientX / innerWidth;
    const y = clientY / innerHeight;
    mouse.x.set(x);
    mouse.y.set(y);
  };
  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove);
    return () => window.removeEventListener("mouse", manageMouseMove);
  });

  useFrame((state, delta) => {
    mesh.current.rotation.x += delta * 0.25;
    mesh.current.rotation.y += delta * 0.25;
    mesh.current.rotation.z += delta * 0.25;
  });
  const texture_1 = useLoader(TextureLoader, "/images/cardds.png");

  return (
    <motion.mesh ref={mesh} rotation-x={mouse.y} rotation-y={mouse.x}>
      {/* <mesh rotation={[0.4, 0.2, 0]}> */}
      <boxGeometry args={[2.5, 2.5, 2.5]} />
      <meshStandardMaterial map={texture_1} />
    </motion.mesh>
  );
}
