'use client'

import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin } from 'lucide-react'

interface Experience {
  title: string
  company: string
  period: string
  description: string
}

interface ExperienceCardProps {
  experience: Experience
  index: number
  span?: string
}

export default function ExperienceCard({ experience, index, span = 'col-span-full lg:col-span-6' }: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 * index }}
      className={`${span} bento-card group relative overflow-hidden`}
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-coral/0 via-accent-amber/0 to-accent-teal/0 group-hover:from-accent-coral/10 group-hover:via-accent-amber/5 group-hover:to-accent-teal/10 transition-all duration-500 pointer-events-none" />
      
      {/* Title - Fixed height container to ensure alignment across all cards */}
      <div className="flex items-start justify-between gap-4 mb-4" style={{ height: '5.5rem' }}>
        <h3 className="mono-heading group-hover:gradient-text transition-all duration-300 flex-1 leading-tight">
          {experience.title}
        </h3>
        <div className="w-2 h-2 rounded-full bg-accent-amber opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse flex-shrink-0 mt-1" />
      </div>
      
      {/* Company and Location - Fixed position */}
      <div className="flex items-center gap-2 text-accent-teal font-sans text-sm mb-2" style={{ height: '1.5rem' }}>
        <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
        <span className="truncate">{experience.company}</span>
      </div>
      
      {/* Period - Fixed position */}
      <div className="flex items-center gap-2 text-text-muted font-mono text-xs mb-4" style={{ height: '1.25rem' }}>
        <Calendar className="w-3.5 h-3.5 flex-shrink-0" />
        <span>{experience.period}</span>
      </div>
      
      {/* Description - Starts at consistent position */}
      <p className="text-text-muted text-sm font-sans leading-relaxed">
        {experience.description}
      </p>
    </motion.div>
  )
}
