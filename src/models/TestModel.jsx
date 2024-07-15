import { useGLTF } from "@react-three/drei";
import React from "react";
import testScene from "../assets/3d/Superfly.glb";
export const Testing = () => {
  const {scene} = useGLTF(testScene);
  return (
    <mesh position={[-5,2,1]} scale={[0.060,0.060,0.060]}>
      <primitive object={scene} />
    </mesh>
  );
};
