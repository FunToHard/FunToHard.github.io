/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        serif: ['Newsreader', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Menlo', 'monospace'],
        display: ['Cinzel', 'Newsreader', 'Georgia', 'serif'],
      },
      colors: {
        obsidian: {
          950: '#07080b',
          900: '#0b0c10',
          850: '#101217',
          800: '#151720',
          700: '#1e212d',
          600: '#2a2e3d',
        },
        parchment: {
          50: '#fbf9f4',
          100: '#f5f0e6',
          200: '#ece3d2',
          300: '#dfd2ba',
          800: '#3f382f',
          900: '#1c1917',
        },
        oxford: {
          950: '#060b14',
          900: '#0a1120',
          850: '#0f172a',
          800: '#131e33',
          700: '#1e2d4a',
        },
        gold: {
          400: '#fbbf24',
          500: '#e5a93b',
          600: '#d97706',
          700: '#b45309',
        },
        accent: {
          cyan: '#38bdf8',
          amber: '#f59e0b',
          terracotta: '#c2410c',
          sage: '#84cc16',
        }
      },
      boxShadow: {
        'glow-amber': '0 0 25px -5px rgba(245, 158, 11, 0.15)',
        'glow-cyan': '0 0 25px -5px rgba(56, 189, 248, 0.15)',
        'academic': '0 4px 20px -2px rgba(0, 0, 0, 0.08), 0 2px 6px -2px rgba(0, 0, 0, 0.04)',
      }
    },
  },
  plugins: [],
};
