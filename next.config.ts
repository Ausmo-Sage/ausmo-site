import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimize for Vercel deployment
  output: 'standalone',
  
  // Image optimization
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**',
      },
    ],
    formats: ['image/webp', 'image/avif'],
    // Enable local image optimization
    unoptimized: false,
  },
  
  // Security headers (Vercel will handle these via vercel.json)
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://res.cloudinary.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https: https://res.cloudinary.com; connect-src 'self' https://www.google-analytics.com https://api.cloudinary.com; frame-src 'none'; object-src 'none'; base-uri 'self'; form-action 'self';",
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
        ],
      },
    ];
  },
  
  // Redirect HTTP to HTTPS and www to non-www (handled by Vercel/Cloudflare)
  async redirects() {
    return [
      {
        source: '/(.*)',
        has: [
          {
            type: 'header',
            key: 'x-forwarded-proto',
            value: 'http',
          },
        ],
        destination: 'https://ausmoapp.com/:path*',
        permanent: true,
      },
      {
        source: '/(.*)',
        has: [
          {
            type: 'host',
            value: 'www.ausmoapp.com',
          },
        ],
        destination: 'https://ausmoapp.com/:path*',
        permanent: true,
      },
    ];
  },
  
  // Performance optimizations
  experimental: {
    // optimizeCss: true, // Removed - causing critters module error
  },
  
  // Compression
  compress: true,
  
  // PoweredByHeader removal for security
  poweredByHeader: false,
};

export default nextConfig;
