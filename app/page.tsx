'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import Hero from '@/components/Hero'
import TechStack from '@/components/TechStack'
import ProjectCard from '@/components/ProjectCard'
import Timeline from '@/components/Timeline'
import Contact from '@/components/Contact'
import ViewToggle from '@/components/ViewToggle'
import { projects } from '@/lib/data'

// Dynamically import 3D world to avoid SSR issues
const World3D = dynamic(() => import('@/components/World3D'), {
  ssr: false,
})

export default function Home() {
  const [is3D, setIs3D] = useState(false)

  return (
    <>
      <ViewToggle is3D={is3D} onToggle={() => setIs3D(!is3D)} />
      
      {is3D ? (
        <World3D onExit={() => setIs3D(false)} />
      ) : (
        <main className="min-h-screen p-4 md:p-8 lg:p-12 relative">
          {/* Subtle grid overlay for depth */}
          <div className="fixed inset-0 pointer-events-none opacity-[0.02]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255, 107, 107, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 107, 107, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
            }}
          />
          
          <div className="max-w-7xl mx-auto relative z-10">
            {/* Bento Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 md:gap-6 lg:gap-8">
              {/* Hero Section - Spans 6 columns on large screens */}
              <Hero />
              
              {/* Tech Stack - Spans 6 columns on large screens */}
              <TechStack />
              
              {/* Projects - Each spans 6 columns */}
              {projects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  span="col-span-full lg:col-span-6"
                />
              ))}
              
              {/* Timeline - Spans 6 columns */}
              <Timeline />
              
              {/* Contact - Spans 6 columns */}
              <Contact />
            </div>
          </div>
          
          {/* Footer */}
          <footer className="mt-16 pt-8 border-t border-border-gray/30 text-center">
            <p className="font-mono text-xs text-text-muted/50">
              Built with Next.js, Tailwind CSS, and Framer Motion
            </p>
          </footer>
        </main>
      )}
    </>
  )
}
