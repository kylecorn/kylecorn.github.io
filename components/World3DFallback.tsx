'use client'

import { LayoutGrid } from 'lucide-react'

interface World3DFallbackProps {
  onExit?: () => void
}

export default function World3DFallback({ onExit }: World3DFallbackProps) {
  return (
    <div className="fixed inset-0 z-50 bg-oled-black flex items-center justify-center">
      <div className="text-center p-8 bg-warm-gray/80 backdrop-blur-xl border border-border-gray rounded-lg max-w-md">
        <h3 className="font-mono text-lg font-bold text-accent-coral mb-4">
          3D World Temporarily Unavailable
        </h3>
        <p className="font-mono text-sm text-text-muted mb-4">
          The 3D view is currently disabled due to compatibility issues between 
          React Three Fiber and Next.js 16. This is a known issue that will be 
          resolved in a future update.
        </p>
        <p className="font-mono text-xs text-text-muted/70 mb-6">
          The 2D grid view is fully functional and contains all the same information!
        </p>
        {onExit && (
          <button
            onClick={onExit}
            className="btn-primary flex items-center justify-center gap-2 mx-auto"
          >
            <LayoutGrid className="w-4 h-4" />
            <span>Back to Grid View</span>
          </button>
        )}
      </div>
    </div>
  )
}
