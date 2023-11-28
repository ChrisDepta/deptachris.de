{import('next').NextConfig}
const nextConfig = {}

module.exports = nextConfig

// next.config.js
module.exports = {
    experimental: {
      serverComponents: true, // Enable server components
      serverActions: true, // Enable server actions
    },
  };
  