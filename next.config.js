/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // For GitHub Pages with username.github.io repo, basePath should be empty
  basePath: '',
  assetPrefix: '',
  // Turbopack configuration (Next.js 16 uses Turbopack by default)
  turbopack: {
    // Empty config to silence the warning - webpack config not needed with Turbopack
  },
  // Keep webpack config for non-Turbopack builds (if needed)
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Fix for React Three Fiber compatibility
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      }
    }
    return config
  },
}

module.exports = nextConfig
