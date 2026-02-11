'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Html } from '@react-three/drei'
import * as THREE from 'three'
import type { Project } from '@/lib/data'

interface ProjectCard3DProps {
  project: Project
  position: [number, number, number]
}

export default function ProjectCard3D({ project, position }: ProjectCard3DProps) {
  const meshRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
    }
  })

  return (
    <group position={position}>
      <mesh
        ref={meshRef}
        castShadow
        receiveShadow
        rotation={[0, 0, 0]}
      >
        <boxGeometry args={[3, 4, 0.1]} />
        <meshStandardMaterial
          color="#1a1a1a"
          metalness={0.3}
          roughness={0.4}
          emissive="#ff6b6b"
          emissiveIntensity={0.1}
        />
      </mesh>
      
      <Html
        position={[0, 0, 0.06]}
        center
        transform
        occlude
        style={{ pointerEvents: 'none' }}
      >
        <div className="w-[300px] p-4 text-white">
          <h3 className="font-mono text-lg font-bold text-accent-coral mb-2">
            {project.title}
          </h3>
          <p className="text-sm text-text-muted mb-3 line-clamp-3">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1">
            {project.technologies.map((tech) => (
              <span key={tech} className="text-xs px-2 py-1 bg-accent-teal/20 text-accent-teal rounded border border-accent-teal/30">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Html>
    </group>
  )
}
