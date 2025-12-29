// tailwind.config.ts - Tailwind CSS configuration

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['IBM Plex Mono', 'monospace'],
        orbitron: ['Orbitron', 'sans-serif'],
      },
      colors: {
        golden: {
          DEFAULT: '#F8E45F',
          dark: '#D4AF37',
        },
      },
      animation: {
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
