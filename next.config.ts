import type { NextConfig } from 'next';

const nextConfig: NextConfig = {};

// Sentry build wrapper (withSentryConfig) deferred — incompatible with
// @cloudflare/next-on-pages trace collection. @sentry/nextjs is installed
// for runtime init via sentry.client.config.ts once Sentry DSN is configured.
export default nextConfig;
