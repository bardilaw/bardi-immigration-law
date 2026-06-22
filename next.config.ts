import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // /resources was a placeholder with no real content. Real guides live on /blog.
  // Redirect any direct, bookmarked, or search-indexed hits so they never dead-end.
  async redirects() {
    return [
      { source: '/resources', destination: '/blog', permanent: true },
      { source: '/es/resources', destination: '/es/blog', permanent: true },
    ];
  },
};

// Sentry build wrapper (withSentryConfig) deferred — incompatible with
// @cloudflare/next-on-pages trace collection. @sentry/nextjs is installed
// for runtime init via sentry.client.config.ts once Sentry DSN is configured.
export default nextConfig;
