'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin } from 'lucide-react'

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
      className={`${span} bento-card`}
    >
      {/* Title - Fixed height container to ensure alignment across all cards */}
      <div className="mb-4" style={{ height: '5.5rem' }}>
        <h3 className="section-heading leading-tight">
          {experience.title}
        </h3>
      </div>

      {/* Company and Location - Fixed position */}
      <div className="flex items-center gap-2 text-dusk font-sans text-sm mb-2" style={{ height: '1.5rem' }}>
        <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
        <span className="truncate">{experience.company}</span>
      </div>

      {/* Period - Fixed position */}
      <div className="flex items-center gap-2 text-stone font-mono text-xs mb-4" style={{ height: '1.25rem' }}>
        <Calendar className="w-3.5 h-3.5 flex-shrink-0" />
        <span>{experience.period}</span>
      </div>

      {/* Description - Starts at consistent position */}
      <p className="text-stone text-sm font-sans leading-relaxed">
        {experience.description}
      </p>
    </motion.div>
  )
}
