/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Surfaces: dark first
        canvas: '#080B0A',
        surface: '#0E1312',
        'surface-2': '#141A18',
        'surface-3': '#1A2220',

        // Structure
        line: '#1E2624',
        'line-strong': '#2B3532',

        // Text
        text: '#F1F5F3',
        'text-muted': '#9BA6A2',
        'text-dim': '#6C7773',

        // Accent: mint, tuned to glow on near-black
        mint: '#3ECF8E',
        'mint-bright': '#5FE0A6',
        'mint-dim': '#2A9C6C',
        'mint-deep': '#0E3F2C',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter Tight', 'Inter', 'sans-serif'],
        mono: ['IBM Plex Mono', 'ui-monospace', 'monospace'],
      },
      borderRadius: {
        DEFAULT: '8px',
        sm: '6px',
        md: '10px',
        lg: '16px',
        xl: '24px',
      },
      letterSpacing: {
        label: '0.14em',
      },
      maxWidth: {
        shell: '1200px',
      },
      boxShadow: {
        glow: '0 0 60px -12px rgba(62, 207, 142, 0.35)',
        card: '0 1px 0 rgba(255,255,255,0.03) inset, 0 20px 40px -24px rgba(0,0,0,0.8)',
      },
    },
  },
  plugins: [],
}
