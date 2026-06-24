/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // ESLint 9 + Next 15.1.4 flat-config has a serialization bug that crashes
    // `next build` ("Cannot serialize key parse in parser"). Skip lint during
    // builds so Vercel deploys succeed; run `npm run lint` manually instead.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
