'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Html } from '@react-three/drei'
import * as THREE from 'three'
import { experience } from '@/lib/data'

interface Timeline3DProps {
  position: [number, number, number]
}

export default function Timeline3D({ position }: Timeline3DProps) {
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
          emissive="#ff6b9d"
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
          <h2 className="font-mono text-2xl font-bold text-accent-pink mb-4">Experience</h2>
          {experience.map((item, index) => (
            <div key={index} className="mb-3">
              <h3 className="font-mono font-bold text-white">{item.title}</h3>
              <p className="text-sm text-accent-teal">{item.company}</p>
            </div>
          ))}
        </div>
      </Html>
    </group>
  )
}
