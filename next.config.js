const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const nextConfig = {
  images: {
    domains: ['www.lider.cl', 'lider.cl'],
  },
}

module.exports = withBundleAnalyzer(nextConfig)
