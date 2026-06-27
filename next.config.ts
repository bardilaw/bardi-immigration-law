import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // The deportation-defense post lives at one canonical slug. Redirect the
      // alternate "attorney" keyword slug so inbound/search hits don't dead-end
      // and link equity consolidates on the single canonical URL.
      {
        source: '/blog/deportation-defense-attorney-georgia',
        destination: '/blog/deportation-defense-removal-proceedings-georgia',
        permanent: true,
      },
      {
        source: '/es/blog/deportation-defense-attorney-georgia',
        destination: '/es/blog/deportation-defense-removal-proceedings-georgia',
        permanent: true,
      },
    ];
  },
};

// Sentry build wrapper (withSentryConfig) deferred — incompatible with
// @cloudflare/next-on-pages trace collection. @sentry/nextjs is installed
// for runtime init via sentry.client.config.ts once Sentry DSN is configured.
export default nextConfig;
