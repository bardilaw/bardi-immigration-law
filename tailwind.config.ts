import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{ts,tsx,js,jsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1B2A4A',
          50: '#eef0f5',
          100: '#cdd3e2',
          200: '#9ba7c5',
          300: '#697ba8',
          400: '#374f8b',
          500: '#1B2A4A',
          600: '#162240',
          700: '#111a32',
          800: '#0c1224',
          900: '#060a15',
        },
        gold: {
          DEFAULT: '#C9A84C',
          50: '#fdf8ec',
          100: '#f8ecc5',
          200: '#f0d58b',
          300: '#e8be51',
          400: '#C9A84C',
          500: '#a8883c',
          600: '#87682c',
          700: '#664e1e',
          800: '#453410',
          900: '#241a06',
        },
        // Section background token. BAR-697 row 1 / Option C: retuned from the old
        // warm beige (#F5F4F0, which the client found "washed out") to a cool, modern
        // off-white so alternating white/section bands read cleaner. Token name kept as
        // `warmgray` to avoid churning every bg-warmgray usage. (Teal accent — the other
        // half of Option C — is pending the client's gold-logo confirmation.)
        warmgray: {
          DEFAULT: '#f1f5f9',
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        charcoal: '#2E2E2E',
        crimson: '#C0392B',
        'forest-green': '#27AE60',
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        prose: '70ch',
        site: '1280px',
      },
    },
  },
  plugins: [],
};

export default config;
