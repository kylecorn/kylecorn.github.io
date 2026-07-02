'use client'

import { motion } from 'framer-motion'
import { ArrowDown, GraduationCap } from 'lucide-react'
import Image from 'next/image'
import { bio } from '@/lib/data'

export default function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="col-span-full lg:col-span-6 bento-card relative"
    >
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="font-mono text-xs uppercase tracking-widest text-stone mb-4"
      >
        Available for opportunities
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="font-serif text-5xl md:text-7xl font-semibold mb-6 leading-tight text-ink"
      >
        Kyle
        <br />
        Cornell
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="flex items-center gap-3 mb-2"
      >
        <GraduationCap className="w-5 h-5 text-clay" />
        <p className="text-xl text-ink font-sans font-medium">
          Computer Science Student
        </p>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="text-stone font-sans text-sm mb-6"
      >
        University of Michigan
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="text-stone font-sans leading-relaxed text-base mb-8 max-w-lg"
      >
        {bio.description}
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="flex items-center gap-3 text-sm text-stone font-sans group cursor-pointer"
      >
        <ArrowDown className="w-4 h-4 group-hover:text-clay transition-colors" />
        <span className="group-hover:text-clay transition-colors">Scroll to explore</span>
      </motion.div>

      {/* Image at bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="mt-8 relative w-full h-64 rounded overflow-hidden border border-sand-dark group/image"
      >
        <Image
          src="/FreshmanYearChemPic.png"
          alt="Freshman Year Chemistry"
          fill
          className="object-cover group-hover/image:scale-105 transition-transform duration-500"
          style={{
            objectPosition: 'center 25%'
          }}
        />
      </motion.div>
    </motion.div>
  )
}
