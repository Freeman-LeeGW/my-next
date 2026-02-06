/** @type {import('next').NextConfig} */
const nextConfig = {
  // Next.js 14 버전부터 Server Actions가 기본으로 활성화되어 
  // experimental.serverActions 옵션은 더 이상 필요하지 않으므로 삭제했습니다.
  experimental: {},
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'books.google.com'
      },
      {
        protocol: 'https',
        hostname: 'wikibook.co.kr'
      },
    ]
  },
};

export default nextConfig;
