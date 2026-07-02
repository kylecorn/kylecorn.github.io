'use client'

import { motion } from 'framer-motion'
import { techStack } from '@/lib/data'
import { Terminal, Code, Wrench, Zap } from 'lucide-react'

export default function TechStack() {
  const categories = [
    { icon: Code, title: 'Languages', items: techStack.languages },
    { icon: Terminal, title: 'Frameworks', items: techStack.frameworks },
    { icon: Wrench, title: 'Tools', items: techStack.tools },
    { icon: Zap, title: 'APIs', items: techStack.apis },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="col-span-full lg:col-span-6 bento-card"
    >
      <h2 className="section-heading mb-6">Tech Stack</h2>

      <div className="space-y-6">
        {categories.map((category) => {
          const Icon = category.icon
          return (
            <div key={category.title} className="space-y-3">
              <div className="flex items-center gap-2 mb-3">
                <Icon className="w-4 h-4 text-dusk" />
                <h3 className="font-mono text-sm font-semibold text-stone uppercase tracking-wider">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.items.map((tech) => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </motion.div>
  )
}
