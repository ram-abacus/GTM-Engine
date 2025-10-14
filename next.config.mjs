/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/GTM-engine',
  assetPrefix: '/GTM-engine/',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['blob.v0.app', 'blobs.vusercontent.net'],
    unoptimized: true,
  }
}

export default nextConfig
