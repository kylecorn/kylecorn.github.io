import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Kyle Cornell - Portfolio',
  description: 'Computer Science major at the University of Michigan - Portfolio showcasing personal projects and development work.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
