'use client'
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Canvas, useFrame } from '@react-three/fiber'
import { CameraControls, ContactShadows, Environment, OrbitControls, PerspectiveCamera, SpotLight, useGLTF } from '@react-three/drei'
import { Model } from './Model';
import {EffectComposer, DepthOfField, Bloom, Noise, Vignette} from '@react-three/postprocessing'
import { useWindowScroll } from '@uidotdev/usehooks';
import { MotionConfig, motion, useAnimate } from 'framer-motion';

export default function ThreeScene() {
    const canvasRef = useRef()


    return (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
                type: 'ease',
                duration: 1,
                delay: 1,
                stiffness: 200,
            }}
            className='z-[98] h-[100vh] md:h-[150vh]'
        >
            <Canvas 
                ref={canvasRef} 
                >
                <Environment
                    backgroundIntensity={0.5}
                    environmentIntensity={0.75} 
                    preset='city'/>
                <PerspectiveCamera makeDefault      
                    position={[-0.5,0,7.5]}
                    // rotation={[0,0.3  ,0.12]}
                />

                <Model client:load />
                <ambientLight intensity={0.5} />
                {/* <OrbitControls/> */}
                <directionalLight  position={[0, 0, 5]} color="white" />
                {/* <SpotLight
                    position={[1,4,1]}
                    intensity={25}
                    distance={6}
                    angle={0.9}
                    attenuation={20}
                    anglePower={20}
                /> */}
                <EffectComposer>
                    {/* <DepthOfField focusDistance={0.5} focalLength={0.02} bokehScale={1} height={480} /> */}

                </EffectComposer>
            </Canvas>
        </motion.div>

    )
}