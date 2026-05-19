import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{ts,tsx,js,jsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand color palette — update with Bardi brand colors
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#1e40af',
          600: '#1e3a8a',
          700: '#1e3380',
          800: '#172554',
          900: '#0f172a',
        },
        accent: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#ca8a04',
          600: '#a16207',
          700: '#854d0e',
          800: '#713f12',
          900: '#422006',
        },
      },
    },
  },
  plugins: [],
};

export default config;
