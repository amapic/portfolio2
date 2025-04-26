/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'export',
	distDir: "build",
	basePath:"",
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'logo.clearbit.com',
            port: '',
            pathname: '/**',
          },
        ],
      },
	  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  async headers() {
    return [
      // Images
      {
        source: '/(.*)\\.(jpg|jpeg|gif|png|svg|ico|webp)$',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // Fonts
      {
        source: '/(.*)\\.(woff|woff2|ttf|otf|eot)$',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // CSS et JS
      {
        source: '/(.*)\\.(css|js)$',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // Pages HTML
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, must-revalidate',
          },
        ],
      },
    ]
  },
};

export default nextConfig;
