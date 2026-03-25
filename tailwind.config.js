/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FFFFFF',
        'alternate-background': '#F8FAFC',
        'primary-text': '#0F172A',
        'secondary-text': '#334155',
        'accent-green': '#A3E635',
        'accent-hover': '#84CC16',
        'soft-green': '#D9F99D',
        'glow-color': '#BEF264',
        border: '#E5E7EB',
        'cool-ui-tint': '#CBD5F5' // from user specification
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        secondary: ['Outfit', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
        drama: ['Cormorant Garamond', 'serif'],
      },
      borderRadius: {
        'large': '2rem',
        'xlarge': '3rem',
      }
    },
  },
  plugins: [],
}
