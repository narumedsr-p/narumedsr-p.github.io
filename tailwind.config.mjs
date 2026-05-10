/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        // All three stacks use DM Sans — no serif, no monospace
        sans:  ['"DM Sans"', 'system-ui', 'sans-serif'],
        serif: ['"DM Sans"', 'system-ui', 'sans-serif'],
        mono:  ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: {
          900: '#0f0f0f',   // headings
          700: '#1a1a1a',   // primary body text
          500: '#374151',   // secondary text (readable on white)
          300: '#4b5563',   // muted text (still readable)
          100: '#6b7280',   // metadata, dates
        },
        paper: {
          50:  '#ffffff',
          100: '#fafaf9',
          200: '#f5f5f4',
          300: '#e7e5e4',
          400: '#d6d3d1',
        },
        accent: '#4338ca',
      },
    },
  },
  plugins: [],
};
