import { useGLTF } from "@react-three/drei";
import React, { useEffect } from "react";
import superFlyScene from "../assets/3d/superfly.glb";
export const SuperFly = ({ isRotating, ...props }) => {
  const { scene } = useGLTF(superFlyScene);
  useEffect(() => {
    console.log("scene:", scene);
  }, [scene]);

  return (
    <mesh {...props} >
      <primitive object={scene} />
    </mesh>
  );
};
