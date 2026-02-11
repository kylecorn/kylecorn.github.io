'use client'

import { motion } from 'framer-motion'
import { Box, LayoutGrid } from 'lucide-react'

interface ViewToggleProps {
  is3D: boolean
  onToggle: () => void
}

export default function ViewToggle({ is3D, onToggle }: ViewToggleProps) {
  return (
    <motion.button
      onClick={onToggle}
      className="fixed top-6 right-6 z-50 bg-warm-gray/80 backdrop-blur-xl border border-border-gray rounded-lg p-3 hover:border-accent-coral/50 transition-all duration-300 group"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="flex items-center gap-2">
        {is3D ? (
          <>
            <LayoutGrid className="w-4 h-4 text-accent-coral group-hover:rotate-90 transition-transform" />
            <span className="font-mono text-sm text-white group-hover:text-accent-coral transition-colors">
              Back to Grid
            </span>
          </>
        ) : (
          <>
            <Box className="w-4 h-4 text-accent-teal group-hover:rotate-12 transition-transform" />
            <span className="font-mono text-sm text-white group-hover:text-accent-teal transition-colors">
              Enter 3D World
            </span>
          </>
        )}
      </div>
    </motion.button>
  )
}
