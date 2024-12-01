/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['hebbkx1anhila5yf.public.blob.vercel-storage.com'],
    },
    output: 'export',
    basePath: '/ammu-birthday', // Replace 'ammu-birthday' with your GitHub repository name
    trailingSlash: true, // Optional, but good for static export
  };
  
  export default nextConfig;
  