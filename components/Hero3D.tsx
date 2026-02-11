'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Html } from '@react-three/drei'
import * as THREE from 'three'

interface Hero3DProps {
  position: [number, number, number]
}

export default function Hero3D({ position }: Hero3DProps) {
  const meshRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.05
    }
  })

  return (
    <group position={position}>
      <mesh
        ref={meshRef}
        castShadow
        receiveShadow
      >
        <boxGeometry args={[4, 5, 0.1]} />
        <meshStandardMaterial
          color="#1a1a1a"
          metalness={0.3}
          roughness={0.4}
          emissive="#ff6b6b"
          emissiveIntensity={0.15}
        />
      </mesh>
      
      <Html
        position={[0, 0, 0.06]}
        center
        transform
        occlude
        style={{ pointerEvents: 'none' }}
      >
        <div className="w-[400px] p-6 text-center">
          <h1 className="font-mono text-4xl font-bold mb-2">
            <span className="text-accent-coral">Kyle</span>{' '}
            <span className="text-white">Cornell</span>
          </h1>
          <p className="text-xl text-accent-amber mb-2">Computer Science Student</p>
          <p className="text-sm text-accent-teal font-mono">{'>'} University of Michigan</p>
        </div>
      </Html>
    </group>
  )
}
