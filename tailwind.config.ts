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
        warmgray: {
          DEFAULT: '#F5F4F0',
          50: '#fafaf8',
          100: '#F5F4F0',
          200: '#e8e6df',
          300: '#d4d1c7',
          400: '#b8b4a8',
          500: '#9c9789',
          600: '#7e7a6c',
          700: '#605c50',
          800: '#433e35',
          900: '#25211b',
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
