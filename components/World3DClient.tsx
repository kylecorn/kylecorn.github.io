'use client'

import dynamic from 'next/dynamic'
import { LayoutGrid } from 'lucide-react'
import { Component, ReactNode } from 'react'
import World3DFallback from './World3DFallback'

interface World3DClientProps {
  onExit?: () => void
}

// Dynamically import the 3D scene component with error boundary
const World3DScene = dynamic(() => import('./World3DScene'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="text-center">
        <div className="font-mono text-accent-coral mb-2">Loading 3D World...</div>
        <div className="font-mono text-xs text-text-muted">Initializing Three.js</div>
      </div>
    </div>
  ),
})

class ErrorBoundary extends Component<
  { children: ReactNode; fallback: ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: ReactNode; fallback: ReactNode }) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error: Error) {
    console.error('3D World error:', error)
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback
    }
    return this.props.children
  }
}

export default function World3DClient({ onExit }: World3DClientProps) {
  // Since 3D is disabled, show fallback directly
  return <World3DFallback onExit={onExit} />
  
  // Uncomment below when 3D feature is re-enabled
  /*
  return (
    <ErrorBoundary fallback={<World3DFallback onExit={onExit} />}>
      <div className="fixed inset-0 z-50 bg-oled-black">
        <World3DScene />
        
        <div className="absolute top-6 left-6 bg-warm-gray/80 backdrop-blur-xl border border-border-gray rounded-lg p-4">
          <h3 className="font-mono text-sm font-bold mb-2 text-white">My World</h3>
          <p className="font-mono text-xs text-text-muted">Scroll to explore</p>
          <p className="font-mono text-xs text-text-muted">Drag to look around</p>
        </div>
        
        {onExit && (
          <button
            onClick={onExit}
            className="absolute top-6 right-6 bg-warm-gray/80 backdrop-blur-xl border border-border-gray rounded-lg p-3 hover:border-accent-coral/50 transition-all duration-300 group"
          >
            <div className="flex items-center gap-2">
              <LayoutGrid className="w-4 h-4 text-accent-coral group-hover:rotate-90 transition-transform" />
              <span className="font-mono text-sm text-white group-hover:text-accent-coral transition-colors">
                Back to Grid
              </span>
            </div>
          </button>
        )}
      </div>
    </ErrorBoundary>
  )
  */
}
