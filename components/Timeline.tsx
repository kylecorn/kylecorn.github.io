'use client'

import { motion } from 'framer-motion'
import { experience } from '@/lib/data'
import { Calendar, MapPin, Briefcase } from 'lucide-react'

export default function Timeline() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="col-span-full lg:col-span-6 bento-card"
    >
      <div className="flex items-center gap-3 mb-8">
        <Briefcase className="w-5 h-5 text-accent-pink" />
        <h2 className="mono-heading">Experience</h2>
      </div>
      
      <div className="space-y-8">
        {experience.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
            className="relative pl-10 border-l-2 border-border-gray group"
          >
            {/* Animated timeline dot */}
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gradient-to-br from-accent-coral via-accent-amber to-accent-teal border-2 border-oled-black shadow-[0_0_20px_rgba(255,107,107,0.5)] group-hover:scale-125 transition-transform duration-300" />
            
            {/* Content */}
            <div className="space-y-3">
              <div>
                <h3 className="font-mono font-bold text-lg mb-1 group-hover:text-accent-coral transition-colors">
                  {item.title}
                </h3>
                <div className="flex items-center gap-2 text-accent-teal font-sans text-sm mb-2">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{item.company}</span>
                </div>
                <div className="flex items-center gap-2 text-text-muted font-mono text-xs">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{item.period}</span>
                </div>
              </div>
              
              <p className="text-text-muted text-sm font-sans leading-relaxed pl-0.5">
                {item.description}
              </p>
            </div>
            
            {/* Decorative line extension on hover */}
            <div className="absolute -left-[9px] top-4 w-0.5 h-0 bg-accent-coral group-hover:h-8 transition-all duration-300 opacity-0 group-hover:opacity-100" />
          </motion.div>
        ))}
      </div>
      
      {/* Empty state message if needed */}
      {experience.length === 0 && (
        <div className="text-center py-8">
          <p className="font-mono text-sm text-text-muted">
            {'//'} More experiences coming soon...
          </p>
        </div>
      )}
    </motion.div>
  )
}
