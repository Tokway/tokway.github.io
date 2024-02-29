import React, { Suspense, useEffect, useState } from "react";
import ReactDOM from 'react-dom';
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Avatar } from '@readyplayerme/visage';
import CanvasLoader from "../Loader";

const modelSrc = 'https://models.readyplayer.me/656db946869b42cd9094139f.glb';



const Computers = ({ isMobile }) => {
  const modelSrc = 'https://models.readyplayer.me/656db946869b42cd9094139f.glb';
  const { scene } = useGLTF("/avatar/avatar.glb");

  return (
    <mesh>
      
      <hemisphereLight intensity={0.55} groundColor="black" />
      <spotLight
        position={[40, 30, 30]}
        angle={1.2}
        color={0x262BA1}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={scene}
        scale={isMobile ? 9.8 : 9.8}
        position={isMobile ? [0, -16.7, -0.5] : [0, -15.25, -1.5]}
        rotation={[-0, 20, -0]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  <Avatar modelSrc={modelSrc} />;
  const [isMobile, setIsMobile] = useState(false);
  

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};


export default ComputersCanvas;
