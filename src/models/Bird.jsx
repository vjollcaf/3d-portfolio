import React, { useEffect, useRef } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";
import birdScene from "../assets/3d/bird.glb";
import { useFrame } from "@react-three/fiber";

export const Bird = () => {
  const { scene, animations } = useGLTF(birdScene);
  const birdRef = useRef();
  const { actions } = useAnimations(animations, birdRef);

  useEffect(() => {
    actions["Take 001"].play();
  }, [actions]);

  useFrame(({ clock, camera }) => {
    birdRef.current.position.y = Math.cos(clock.elapsedTime) * 0.2 + 2;

    // Check if the bird has exited the camera's view
    if (birdRef.current.position.x > camera.position.x + 10) {
      birdRef.current.rotation.y = Math.PI;
    } else if (birdRef.current.position.x < camera.position.x - 10) {
      birdRef.current.rotation.y = 0;
    }

    // Move the bird based on its current rotation
    if (birdRef.current.rotation.y === 0) {
      birdRef.current.position.x += 0.01;
      birdRef.current.position.z -= 0.02;
    } else {
      birdRef.current.position.x -= 0.01;
      birdRef.current.position.z += 0.02;
    }
  });

  return (
    <mesh position={[-4, 2, 1]} scale={[0.003, 0.003, 0.003]} ref={birdRef}>
      <primitive object={scene} />
    </mesh>
  );
};
