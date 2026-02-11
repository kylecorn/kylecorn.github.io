'use client'

import { Suspense, useEffect, useState } from 'react'
import { projects } from '@/lib/data'

// Disable 3D feature due to React Three Fiber compatibility issues with Next.js 16
// This is a known issue: https://github.com/pmndrs/react-three-fiber/issues
const ENABLE_3D = false

export default function World3DScene() {
  const [mounted, setMounted] = useState(false)
  const [Canvas, setCanvas] = useState<any>(null)
  const [drei, setDrei] = useState<any>(null)
  const [components, setComponents] = useState<any>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!ENABLE_3D) {
      setError('3D feature is currently disabled due to compatibility issues')
      return
    }

    // Wait for React to be fully initialized before loading Three.js
    if (typeof window === 'undefined') return

    const loadThreeJS = async () => {
      try {
        // Wait for React to be fully ready
        await new Promise(resolve => setTimeout(resolve, 300))
        await new Promise(resolve => requestAnimationFrame(resolve))
        await new Promise(resolve => requestAnimationFrame(resolve))

        // Import React first to ensure it's available
        const react = await import('react')
        if (!react || !react.default) {
          throw new Error('React not available')
        }
        
        await new Promise(resolve => setTimeout(resolve, 100))
        
        // Now import Three.js libraries one at a time to avoid race conditions
        const r3f = await import('@react-three/fiber')
        await new Promise(resolve => setTimeout(resolve, 50))
        
        const dreiLib = await import('@react-three/drei')
        await new Promise(resolve => setTimeout(resolve, 50))

        const [ProjectCard3D, Hero3D, TechStack3D, Timeline3D, Contact3D] = await Promise.all([
          import('./ProjectCard3D'),
          import('./Hero3D'),
          import('./TechStack3D'),
          import('./Timeline3D'),
          import('./Contact3D'),
        ])

        setCanvas(() => r3f.Canvas)
        setDrei(dreiLib)
        setComponents({
          ProjectCard3D: ProjectCard3D.default,
          Hero3D: Hero3D.default,
          TechStack3D: TechStack3D.default,
          Timeline3D: Timeline3D.default,
          Contact3D: Contact3D.default,
        })
        setMounted(true)
      } catch (error: any) {
        console.error('Failed to load 3D libraries:', error)
        setError(error?.message || 'Failed to load 3D world')
      }
    }

    loadThreeJS()
  }, [])

  if (error || !ENABLE_3D) {
    // Return null and let the error boundary in World3DClient handle the fallback
    return null
  }

  if (!mounted || !Canvas || !drei || !components) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="text-center">
          <div className="font-mono text-accent-coral mb-2">Loading 3D World...</div>
          <div className="font-mono text-xs text-text-muted">Initializing Three.js</div>
        </div>
      </div>
    )
  }

  const { OrbitControls, PerspectiveCamera, Environment, Float } = drei
  const { ProjectCard3D, Hero3D, TechStack3D, Timeline3D, Contact3D } = components

  return (
    <Canvas
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 2]}
      className="w-full h-full"
    >
      <Suspense fallback={null}>
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#ff6b6b" />
        <pointLight position={[10, -10, -5]} intensity={0.5} color="#4ecdc4" />
        
        {/* Camera */}
        <PerspectiveCamera makeDefault position={[0, 2, 8]} fov={75} />
        <OrbitControls
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          minDistance={5}
          maxDistance={15}
          minPolarAngle={0}
          maxPolarAngle={Math.PI / 2}
        />
        
        {/* Environment */}
        <Environment preset="night" />
        
        {/* Ground plane */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]} receiveShadow>
          <planeGeometry args={[50, 50]} />
          <meshStandardMaterial color="#0f0f12" />
        </mesh>
        
        {/* Content Cards */}
        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
          <Hero3D position={[-4, 1, 0]} />
        </Float>
        
        <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.4} delay={0.2}>
          <TechStack3D position={[4, 1, 0]} />
        </Float>
        
        {projects.map((project, index) => (
          <Float
            key={project.id}
            speed={1 + index * 0.1}
            rotationIntensity={0.3}
            floatIntensity={0.3}
            delay={index * 0.1}
          >
            <ProjectCard3D
              project={project}
              position={[
                (index % 2 === 0 ? -4 : 4),
                0,
                -2 - index * 2
              ]}
            />
          </Float>
        ))}
        
        <Float speed={1.1} rotationIntensity={0.3} floatIntensity={0.3} delay={0.4}>
          <Timeline3D position={[-4, -1, -6]} />
        </Float>
        
        <Float speed={1.1} rotationIntensity={0.3} floatIntensity={0.3} delay={0.6}>
          <Contact3D position={[4, -1, -6]} />
        </Float>
      </Suspense>
    </Canvas>
  )
}
