import { Suspense, useState, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import Loader from "../components/Loader";
import { Island } from "../models/island";
import { Sky } from "../models/Sky";
import { Bird } from "../models/Bird";
import { Plane } from "../models/Plane";
import { HomeInfo } from "../components/HomeInfo.jsx";

import sakura from "../assets/sakura.mp3";
import { soundoff, soundon } from "../assets/icons/index.js";

const Home = () => {
  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play();
    }

    return () => {
      audioRef.current.pause();
    };
  }, [isPlayingMusic]);
  const [currentStage, setCurrentStage] = useState(1);
  const [isRotating, setIsRotating] = useState(false);
  const [islandScale, setIslandScale] = useState([1, 1, 1]);
  const [islandPosition, setIslandPosition] = useState([0, -6.5, -43]);
  const [islandRotation, setIslandRotation] = useState([0.1, 4.7, 0]);
  const [planeScale, setPlaneScale] = useState([3, 3, 3]);
  const [planePosition, setPlanePosition] = useState([0, -4, -4]);
  const [superFlyPosition, setSuperFlyPosition] = useState([0, -1.5, -2]);
  const [superFlyScale, setSuperFlyScale] = useState([0.5, 0.5, 0.5]);

  const adjustForScreenSize = () => {
    if (window.innerWidth < 768) {
      setIslandScale([0.9, 0.9, 0.9]);
      setPlaneScale([1.9, 1.9, 1.9]);
      setSuperFlyScale([0.4, 0.4, 0.4]); // 50% smaller
      setSuperFlyPosition([0, -1.5, -1]);
    } else {
      setIslandScale([1, 1, 1]);
      setPlaneScale([3, 3, 3]);
      setSuperFlyScale([0.5, 0.5, 0.5]); // 50% smaller
      setSuperFlyPosition([0, -1.5, -2]);
    }
  };

  useEffect(() => {
    adjustForScreenSize();
    window.addEventListener("resize", adjustForScreenSize);
    return () => window.removeEventListener("resize", adjustForScreenSize);
  }, []);

  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>
      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" />
          <Bird />
          {/* <Testing /> */}

          <Plane
            position={planePosition}
            scale={planeScale}
            isRotating={isRotating}
            rotation={[0, 1, 0]}
          />
          <Sky isRotating={isRotating} />
          <Island
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            position={islandPosition}
            rotation={islandRotation}
            scale={islandScale}
            setCurrentStage={setCurrentStage}
          />
        </Suspense>
      </Canvas>

      <div className="absolute bottom-2 left-2">
        <img
          src={!isPlayingMusic ? soundoff : soundon}
          alt="sound"
          className="w-10 h-10 cursor-pointer object-contain"
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
        />
      </div>
    </section>
  );
};

export default Home;
