/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'oled-black': '#0f0f12',
        'border-gray': '#2a2a2a',
        'accent-coral': '#ff6b6b',
        'accent-orange': '#ff8e53',
        'accent-teal': '#4ecdc4',
        'accent-mint': '#44a08d',
        'accent-amber': '#ffd93d',
        'accent-yellow': '#f6c23e',
        'accent-pink': '#ff6b9d',
        'accent-magenta': '#c44569',
        'accent-green': '#51cf66',
        'warm-gray': '#1a1a1a',
        'text-muted': '#9ca3af',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      backgroundImage: {
        'gradient-vibrant': 'linear-gradient(135deg, #ff6b6b 0%, #ff8e53 25%, #ffd93d 50%, #4ecdc4 75%, #ff6b9d 100%)',
        'gradient-warm': 'linear-gradient(135deg, #ff6b6b 0%, #ff8e53 50%, #ffd93d 100%)',
        'gradient-cool': 'linear-gradient(135deg, #4ecdc4 0%, #44a08d 50%, #51cf66 100%)',
        'gradient-sunset': 'linear-gradient(135deg, #ff6b9d 0%, #c44569 50%, #ff8e53 100%)',
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.04'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        'glow-coral': '0 0 20px rgba(255, 107, 107, 0.4)',
        'glow-teal': '0 0 20px rgba(78, 205, 196, 0.4)',
        'glow-amber': '0 0 20px rgba(255, 217, 61, 0.4)',
        'glow-pink': '0 0 20px rgba(255, 107, 157, 0.4)',
        'inner-glow': 'inset 0 0 20px rgba(255, 107, 107, 0.15)',
      },
    },
  },
  plugins: [],
}
