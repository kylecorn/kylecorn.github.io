'use client'

import Hero from '@/components/Hero'
import AboutMe from '@/components/AboutMe'
import TechStack from '@/components/TechStack'
import ProjectCard from '@/components/ProjectCard'
import ExperienceCard from '@/components/ExperienceCard'
import Contact from '@/components/Contact'
import { projects, experience } from '@/lib/data'

export default function Home() {
  return (
    <main className="min-h-screen p-4 md:p-8 lg:p-12 relative">
          <div className="max-w-7xl mx-auto relative z-10">
            {/* Bento Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 md:gap-6 lg:gap-8">
              {/* Hero Section - Spans 6 columns on large screens */}
              <Hero />
              
              {/* Interests Section - Spans 6 columns on large screens */}
              <AboutMe />
              
              {/* Personal Projects Section Header */}
              <div className="col-span-full mt-4 mb-2">
                <h2 className="section-heading text-3xl md:text-4xl">
                  Personal Projects
                </h2>
                <div className="w-16 h-0.5 bg-clay mt-3" />
              </div>
              
              {/* Projects - Each spans 6 columns */}
              {projects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  span="col-span-full lg:col-span-6"
                />
              ))}
              
              {/* Experience Section Header */}
              <div className="col-span-full mt-8 mb-2">
                <h2 className="section-heading text-3xl md:text-4xl">
                  Experience
                </h2>
                <div className="w-16 h-0.5 bg-clay mt-3" />
              </div>
              
              {/* Experience Cards - Each spans 6 columns */}
              {experience.map((exp, index) => (
                <ExperienceCard
                  key={`${exp.company}-${exp.period}`}
                  experience={exp}
                  index={index}
                  span="col-span-full lg:col-span-6"
                />
              ))}
              
              {/* Tech Stack - Spans 6 columns on large screens */}
              <TechStack />
              
              {/* Contact - Spans 6 columns */}
              <Contact />
            </div>
          </div>
          
          {/* Footer */}
          <footer className="mt-16 pt-8 border-t border-sand-dark text-center">
            <p className="font-mono text-xs text-stone">
              Built with Next.js, Tailwind CSS, and Framer Motion
            </p>
          </footer>
    </main>
  )
}
