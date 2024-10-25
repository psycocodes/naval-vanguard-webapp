/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        {
          source: '/',
          destination: '/landing',
          permanent: true, // Set to true for 301 redirect, or false for 302 redirect
        },
      ]
    },
  };
  
  export default nextConfig;