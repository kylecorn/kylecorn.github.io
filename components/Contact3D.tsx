'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Html } from '@react-three/drei'
import * as THREE from 'three'
import { bio } from '@/lib/data'

interface Contact3DProps {
  position: [number, number, number]
}

export default function Contact3D({ position }: Contact3DProps) {
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
        <boxGeometry args={[4, 3, 0.1]} />
        <meshStandardMaterial
          color="#1a1a1a"
          metalness={0.3}
          roughness={0.4}
          emissive="#ffd93d"
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
        <div className="w-[400px] p-6">
          <h2 className="font-mono text-2xl font-bold text-accent-amber mb-4">Contact</h2>
          <p className="text-sm text-white mb-2 font-mono">{bio.email}</p>
          <p className="text-sm text-white font-mono">{bio.phone}</p>
        </div>
      </Html>
    </group>
  )
}
