// Tailwind CSS v4 is compiled through its PostCSS plugin. Without this config
// Next.js emits only base/font CSS and no utility classes, so the site renders
// unstyled (BAR-563). Keep in sync with the `tailwindcss` major version.
const config = {
  plugins: {
    '@tailwindcss/postcss': {},
  },
};

export default config;
