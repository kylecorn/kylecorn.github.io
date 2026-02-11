'use client'

import { motion } from 'framer-motion'
import { techStack } from '@/lib/data'
import { Terminal, Code, Wrench } from 'lucide-react'

export default function TechStack() {
  const categories = [
    { icon: Code, title: 'Languages', items: techStack.languages, color: 'accent-coral' },
    { icon: Terminal, title: 'Frameworks', items: techStack.frameworks, color: 'accent-teal' },
    { icon: Wrench, title: 'Tools', items: techStack.tools, color: 'accent-amber' },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="col-span-full lg:col-span-6 bento-card"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="w-1 h-8 bg-gradient-to-b from-accent-coral via-accent-amber to-accent-teal rounded-full" />
        <h2 className="mono-heading">Tech Stack</h2>
      </div>
      
      <div className="space-y-6">
        {categories.map((category, catIndex) => {
          const Icon = category.icon
          const colorMap: Record<string, string> = {
            'accent-coral': 'text-accent-coral',
            'accent-teal': 'text-accent-teal',
            'accent-amber': 'text-accent-amber',
          }
          return (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + catIndex * 0.1, duration: 0.4 }}
              className="space-y-3"
            >
              <div className="flex items-center gap-2 mb-3">
                <Icon className={`w-4 h-4 ${colorMap[category.color]}`} />
                <h3 className="font-mono text-sm font-semibold text-text-muted uppercase tracking-wider">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.items.map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      delay: 0.4 + catIndex * 0.1 + index * 0.03, 
                      duration: 0.3,
                      type: "spring",
                      stiffness: 200
                    }}
                    className="tech-tag"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          )
        })}
      </div>
      
      {/* Decorative element */}
      <div className="mt-6 pt-6 border-t border-border-gray/30">
        <p className="font-mono text-xs text-text-muted/50 text-center">
          {'//'} Always learning, always building
        </p>
      </div>
    </motion.div>
  )
}
