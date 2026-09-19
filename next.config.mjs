/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'http',
          hostname: '127.0.0.1',
          port: '8000',
          pathname: "/media/**",
        },
        {
          protocol: 'https',
          hostname: 'api.iarapublication.com',
          pathname: "/media/**",
        },
      ],
    },
    
    compress: true, 
  };
  
  export default nextConfig;
  
  // protocol: 'https',
  // hostname: 'api.example.com',
  // pathname: '/media/**',
  