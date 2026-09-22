import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'ik.imagekit.io' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'images.pexels.com' },
    ],
  },
  async redirects() {
    return [
      // Strip trailing backslash (%5C) from any URL
      {
        source: '/:path*\\\\',
        destination: '/:path*',
        permanent: true,
      },
      // Legacy .html URLs → clean Next.js routes
      {
        source: '/kenya-tanzania-safaris.html',
        destination: '/kenya-tanzania-safaris',
        permanent: true,
      },
      {
        source: '/safari/:slug*.html',
        destination: '/safari/:slug*',
        permanent: true,
      },
      {
        source: '/holiday-experiences/:slug*.html',
        destination: '/holiday-experiences/:slug*',
        permanent: true,
      },
      // Old destination routes
      {
        source: '/destinations/tsavo-national-park',
        destination: '/kenya-safaris',
        permanent: true,
      },
      {
        source: '/destinations/:slug*',
        destination: '/kenya-safaris',
        permanent: true,
      },
      // Old trip routes
      {
        source: '/trip/:slug*',
        destination: '/kenya-safaris',
        permanent: true,
      },
      {
        source: '/all-trips',
        destination: '/kenya-safaris',
        permanent: true,
      },
      // Renamed/moved pages
      {
        source: '/travel-info/safari-vehicles',
        destination: '/about',
        permanent: true,
      },
      // Experience slug corrections
      {
        source: '/holiday-experiences/hot-air-balloon-flight-over-the-masai-mara',
        destination: '/holiday-experiences/hot-air-balloon-safaris-over-masai-mara',
        permanent: true,
      },
      // Deep legacy routes
      {
        source: '/kenya-safaris/nairobi-safari-tours/:slug*',
        destination: '/kenya-safaris/nairobi-excursions',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
