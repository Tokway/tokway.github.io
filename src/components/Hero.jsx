import { motion } from "framer-motion";
import { Avatar } from '@readyplayerme/visage';
import { styles } from "../styles";
import React, { useEffect, useState, useRef } from 'react';
import { CameraControls } from "@react-three/drei";


const modelSrc = 'https://models.readyplayer.me/656db946869b42cd9094139f.glb?morphTargets=ARKit,Eyes%20Extra&textureAtlas=none';
const animationSrc = "avatar/M_Standing_Idle_Variations_001.fbx";




const Hero = () => {
  
  useEffect(() => {
    const avatarElement = document.querySelector('.ready-player-me-avatar');
    if (avatarElement) {
      avatarElement.style.pointerEvents = 'none';
    }
  }, []);

  return (
    <section className={`relative w-full h-screen mx-auto`} >
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Yurii Tokway</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I Software developer <br className='sm:block hidden' />
            Feel free to contact me
          </p>
        </div>
      </div>

      
      <div className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 `}> 
      
      <div className="absolute inset-0 z-10">
          <div
            className="max-w-10xl mx-auto flex flex-row  items-start z-1"
          ></div>
        </div>

        <Avatar  
          className={`max-w-10xl mx-auto flex flex-row items-start z-1`}
          enableRotate={false}
          animationSrc={animationSrc}
          modelSrc={modelSrc}
          shadows={true}
          ambientOcclusion={true}
          headMovement={true}      
          ambientLightColor="#fff5b6"
          ambientLightIntensity={0.25}
          lockVertical={true}
          poseSrc={"/visage/male-pose-standing.glb"}
          bloom={{
            intensity: 0.1,
            kernelSize: 1,
            luminanceSmoothing: 1,
            luminanceThreshold: 1,
            materialIntensity: 3.3,
            mipmapBlur: true
          }}
          environment="hub"
          fov={40}
         
          onLoaded={function noRefCheck(){}}
          onLoading={function noRefCheck(){}}
          emotion={{
            "eyeSquintLeft": 0.4,
            "eyeSquintRight": 0.2,
            "mouthSmileLeft": 0.37,
            "mouthSmileRight": 0.36,
            "mouthShrugUpper": 0.27,
            "browInnerUp": 0.3,
            "browOuterUpLeft": 0.37,
            "browOuterUpRight": 0.49
          }}
          dpr={2}
          scale={0.7}
          cameraInitialDistance={1.2}
          cameraTarget={1.15}
          idleRotation={false}
          spotLightAngle={0.314}
          spotLightColor="#fff5b6"
        />

      </div>

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
