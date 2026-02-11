'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Html } from '@react-three/drei'
import * as THREE from 'three'
import { techStack } from '@/lib/data'

interface TechStack3DProps {
  position: [number, number, number]
}

export default function TechStack3D({ position }: TechStack3DProps) {
  const meshRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.05
    }
  })

  const allTech = [
    ...techStack.languages,
    ...techStack.frameworks,
    ...techStack.tools,
  ]

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
          emissive="#4ecdc4"
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
          <h2 className="font-mono text-2xl font-bold text-accent-teal mb-4">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {allTech.map((tech) => (
              <span key={tech} className="text-xs px-2 py-1 bg-accent-teal/20 text-accent-teal rounded border border-accent-teal/30 font-mono">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Html>
    </group>
  )
}
