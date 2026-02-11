'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Code2, GraduationCap } from 'lucide-react'

export default function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="col-span-full lg:col-span-6 bento-card relative"
    >
      {/* Decorative code brackets */}
      <div className="absolute top-6 right-6 opacity-10">
        <Code2 className="w-16 h-16 text-accent-coral" />
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="flex items-center gap-3 mb-4"
      >
        <div className="w-2 h-2 rounded-full bg-accent-coral animate-pulse" />
        <span className="font-mono text-sm text-text-muted">available for opportunities</span>
      </motion.div>
      
      <motion.h1
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="font-mono text-5xl md:text-7xl font-bold mb-6 leading-tight"
      >
        <span className="gradient-text">Kyle</span>
        <br />
        <span className="text-white">Cornell</span>
      </motion.h1>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="flex items-center gap-3 mb-4"
      >
        <GraduationCap className="w-5 h-5 text-accent-amber" />
        <p className="text-xl text-white font-sans font-medium">
          Computer Science Student
        </p>
      </motion.div>
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="text-accent-teal font-mono text-sm mb-6"
      >
        {'>'} University of Michigan
      </motion.p>
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="text-text-muted font-sans leading-relaxed text-base mb-8 max-w-lg"
      >
        Building games, web apps, and exploring the intersection of code and creativity. 
        Welcome to my portfolio of personal projects and development work.
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="flex items-center gap-3 text-sm text-text-muted font-mono group cursor-pointer"
      >
        <ArrowDown className="w-4 h-4 group-hover:text-accent-coral transition-colors animate-bounce" />
        <span className="group-hover:text-accent-coral transition-colors">Scroll to explore</span>
      </motion.div>
      
      {/* Subtle code snippet decoration */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="mt-8 pt-6 border-t border-border-gray/50"
      >
        <div className="font-mono text-xs text-text-muted/50 space-y-1">
          <div className="flex gap-4">
            <span className="text-accent-pink">const</span>
            <span className="text-accent-teal">developer</span>
            <span>=</span>
            <span className="text-accent-amber">true</span>
            <span>;</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
