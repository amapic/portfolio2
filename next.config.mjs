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
  }
};

export default nextConfig;
