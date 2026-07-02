'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Download, Github } from 'lucide-react'
import Image from 'next/image'
import type { Project } from '@/lib/data'

interface ProjectCardProps {
  project: Project
  index: number
  span?: string
}

function getDemoButtonLabel(demoUrl: string): string {
  const lower = demoUrl.toLowerCase()
  if (lower.includes('youtube.com') || lower.includes('youtu.be')) return 'Watch Demo'
  if (/\.(mp4|webm|ogg)(\?|$)/i.test(lower)) return 'Watch Video'
  return 'Play Game'
}

function getYouTubeId(url: string): string | null {
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/)
  return match ? match[1] : null
}

export default function ProjectCard({ project, index, span = 'col-span-full lg:col-span-6' }: ProjectCardProps) {
  const youtubeId = project.demo ? getYouTubeId(project.demo) : null
  const hasActions = Boolean((project.demo && !youtubeId) || project.download || project.repo)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 * index }}
      className={`${span} bento-card group relative overflow-hidden`}
    >
      {/* Project media */}
      <div className="relative w-full h-56 mb-6 rounded overflow-hidden border border-sand-dark bg-sand">
        {youtubeId ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${youtubeId}`}
            title={project.title}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            style={{
              objectPosition: project.imagePosition || 'left center'
            }}
          />
        ) : null}
      </div>

      {/* Project title */}
      <h3 className="section-heading mb-3 group-hover:text-clay transition-colors duration-300">
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-stone text-sm mb-5 font-sans leading-relaxed">
        {project.description}
        {project.website && (
          <>
            {' '}
            <a
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-clay underline underline-offset-2 hover:text-ink transition-colors"
            >
              {project.website.replace(/^https?:\/\//, '').replace(/\/$/, '')}
            </a>
          </>
        )}
      </p>

      {/* Tech tags */}
      <div className={`flex flex-wrap gap-2 ${hasActions ? 'mb-16' : 'mb-2'}`}>
        {project.technologies.map((tech) => (
          <span key={tech} className="tech-tag">
            {tech}
          </span>
        ))}
      </div>

      {/* Action buttons - positioned in bottom left corner */}
      {hasActions && (
        <div className="absolute bottom-6 left-6 flex gap-3">
          {project.demo && !youtubeId && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center gap-2 z-10"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink className="w-4 h-4" />
              <span>{getDemoButtonLabel(project.demo)}</span>
            </a>
          )}
          {project.download && (
            <a
              href={project.download}
              download
              className="btn-primary flex items-center gap-2 z-10"
              onClick={(e) => e.stopPropagation()}
            >
              <Download className="w-4 h-4" />
              <span>Download</span>
            </a>
          )}
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center gap-2 z-10"
              onClick={(e) => e.stopPropagation()}
            >
              <Github className="w-4 h-4" />
              <span>Code</span>
            </a>
          )}
        </div>
      )}
    </motion.div>
  )
}
