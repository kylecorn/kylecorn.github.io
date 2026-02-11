'use client'

import dynamic from 'next/dynamic'

interface World3DProps {
  onExit?: () => void
}

// Dynamically import the client component to ensure it only loads in browser
const World3DClient = dynamic(() => import('./World3DClient'), {
  ssr: false,
  loading: () => (
    <div className="fixed inset-0 z-50 bg-oled-black flex items-center justify-center">
      <div className="font-mono text-accent-coral">Loading 3D World...</div>
    </div>
  ),
})

export default function World3D({ onExit }: World3DProps) {
  return <World3DClient onExit={onExit} />
}
