'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Download, Github, Sparkles } from 'lucide-react'
import Image from 'next/image'
import type { Project } from '@/lib/data'

interface ProjectCardProps {
  project: Project
  index: number
  span?: string
}

export default function ProjectCard({ project, index, span = 'col-span-full lg:col-span-6' }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 * index }}
      className={`${span} bento-card group relative overflow-hidden`}
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-coral/0 via-accent-amber/0 to-accent-teal/0 group-hover:from-accent-coral/10 group-hover:via-accent-amber/5 group-hover:to-accent-teal/10 transition-all duration-500 pointer-events-none" />
      
      {/* Project image */}
      <div className="relative w-full h-56 mb-6 rounded-lg overflow-hidden border border-border-gray group-hover:border-accent-coral/40 transition-all duration-300">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          style={{
            objectPosition: project.imagePosition || 'left center'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-oled-black/80 via-oled-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Decorative corner accent */}
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Sparkles className="w-5 h-5 text-accent-coral" />
        </div>
      </div>
      
      {/* Project title with gradient on hover */}
      <div className="flex items-start justify-between gap-4 mb-3">
        <h3 className="mono-heading group-hover:gradient-text transition-all duration-300 flex-1">
          {project.title}
        </h3>
        <div className="w-2 h-2 rounded-full bg-accent-amber opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
      </div>
      
      {/* Description */}
      <p className="text-text-muted text-sm mb-5 font-sans leading-relaxed">
        {project.description}
      </p>
      
      {/* Tech tags */}
      <div className="flex flex-wrap gap-2 mb-16">
        {project.technologies.map((tech, techIndex) => (
          <motion.span
            key={tech}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 + techIndex * 0.05, duration: 0.3 }}
            className="tech-tag"
          >
            {tech}
          </motion.span>
        ))}
      </div>
      
      {/* Action buttons - positioned in bottom left corner */}
      <div className="absolute bottom-6 left-6 flex gap-3">
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary flex items-center gap-2 group/btn z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalLink className="w-4 h-4 group-hover/btn:rotate-12 transition-transform" />
            <span>{project.demo.includes('youtube.com') || project.demo.includes('youtu.be') ? 'Watch Demo' : 'Play Game'}</span>
          </a>
        )}
        {project.download && (
          <a
            href={project.download}
            download
            className="btn-primary flex items-center gap-2 group/btn z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <Download className="w-4 h-4 group-hover/btn:translate-y-0.5 transition-transform" />
            <span>Download</span>
          </a>
        )}
        {project.repo && (
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary flex items-center gap-2 group/btn z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <Github className="w-4 h-4" />
            <span>Code</span>
          </a>
        )}
      </div>
    </motion.div>
  )
}
