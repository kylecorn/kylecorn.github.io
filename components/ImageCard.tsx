'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface ImageCardProps {
  src: string
  alt: string
  index?: number
  span?: string
  imagePosition?: string
}

export default function ImageCard({ src, alt, index = 0, span = 'col-span-full lg:col-span-6', imagePosition = 'center center' }: ImageCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 * index }}
      className={`${span} bento-card group relative overflow-hidden`}
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-coral/0 via-accent-amber/0 to-accent-teal/0 group-hover:from-accent-coral/10 group-hover:via-accent-amber/5 group-hover:to-accent-teal/10 transition-all duration-500 pointer-events-none" />
      
      {/* Image */}
      <div className="relative w-full h-full min-h-[400px] rounded-lg overflow-hidden">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          style={{
            objectPosition: imagePosition
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-oled-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </motion.div>
  )
}
