/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary theme colors
        navy: {
          DEFAULT: '#081527ff',
          dark: '#081527ff',
          light: '#2a4a73',
        },
        sky: {
          DEFAULT: '#38bdf8',
          light: '#7dd3fc',
          dark: '#0ea5e9',
        },
        // Priority colors
        urgent: '#ef4444',
        high: '#f97316',
        medium: '#3b82f6',
        low: '#6b7280',
      },
    },
  },
  plugins: [],
}