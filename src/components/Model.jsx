'use client'
import React, { useRef } from 'react'
import { MeshReflectorMaterial, MeshTransmissionMaterial, useGLTF } from '@react-three/drei'
import { MeshStandardMaterial, FrontSide, AdditiveBlending, MathUtils } from 'three'
import { constColors } from '../lib/const'
import { useFrame } from '@react-three/fiber'
import { useWindowScroll } from '@uidotdev/usehooks'

const modelPath = 'src/components/company-logo-3d.glb'

const greenMat = new MeshStandardMaterial({
    transparent: true,
    opacity: 1,
    color: constColors.yellowGreen,
    roughness: 0,
    // emissive: constColors.yellowGreen,

    // side: FrontSide,
    // blending: AdditiveBlending,
    // polygonOffset: true,
    // polygonOffsetFactor: 1,
    // envMapIntensity: 2
  })
const whiteMat = new MeshStandardMaterial({
    transparent: true,
    opacity: 1,
    color: constColors.white,
    roughness: 0,
    // emissive: constColors.yellowGreen,

    // side: FrontSide,
    // blending: AdditiveBlending,
    // polygonOffset: true,
    // polygonOffsetFactor: 1,
    // envMapIntensity: 2
  })

export function Model(props) {
    const ref = useRef()
    const groupRef = useRef()
    const { nodes, materials } = useGLTF(modelPath)

    const [{ x, y }, scrollTo] = useWindowScroll();

    useFrame((state) => {
        groupRef.current.rotation.y = MathUtils.lerp(groupRef.current.rotation.y, y/800, 0.075)
    })

    useFrame((state) => {
        const t = state.clock.getElapsedTime()
        ref.current.rotation.set(Math.cos(t / 4) / 8, Math.sin(t / 4) / 8, -0.2 - (1 + Math.sin(t / 1.5)) / 20)
        ref.current.position.y = (1 + Math.sin(t / 1.5)) / 10
      })

    return (
        <group ref={groupRef}>
        <group {...props} dispose={null} 
            rotation={[45,0,0]}
            >
                <group {...props} ref={ref}>
                    <mesh
                    // scale={0.05}
                    {...props}
                    castShadow
                    receiveShadow
                    geometry={nodes.Curve004_1.geometry}
                    // material={materials['SVGMat.001']}
                    material={greenMat}
                    >
                    </mesh>
                    <mesh
                    // scale={0.05}
                    {...props}
                    castShadow
                    receiveShadow
                    geometry={nodes.Curve004_2.geometry}
                    material={whiteMat}
                    >
                        {/* <MeshStandardMaterial/> */}
                    </mesh>
                </group>
        </group>
        </group>
  )
}

useGLTF.preload(modelPath)