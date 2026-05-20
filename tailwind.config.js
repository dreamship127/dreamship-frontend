const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: ['class'],
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}'
  ],
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
      screens: {
        '2xl': '1320px'
      }
    },
    extend: {
      colors: {
        background: { DEFAULT: '#050816', soft: '#0B1020' },
        primary: { 500: '#7C3AED', 600: '#6D28D9', 400: '#A855F7', 300: '#EC4899' },
        muted: { 100: '#1E293B', 200: '#0F172A' },
        accent: { 100: '#1D283A', 200: '#1E1B4B' },
        border: '#1E293B',
        text: { primary: '#FFFFFF', muted: '#94A3B8' }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', ...fontFamily.sans]
      },
      boxShadow: {
        glass: '0 24px 80px rgba(15,23,42,0.85), 0 0 0 1px rgba(148,163,184,0.12)',
        glow: '0 0 40px rgba(124,58,237,0.55), 0 0 80px rgba(236,72,153,0.35)'
      },
      backgroundImage: {
        'radial-grid': 'radial-gradient(circle at 1px 1px, rgba(148,163,184,0.18) 1px, transparent 0)',
        'hero-gradient': 'radial-gradient(circle at top, rgba(124,58,237,0.45), transparent 55%), radial-gradient(circle at bottom, rgba(236,72,153,0.28), transparent 60%)'
      },
      animation: {
        'slow-pulse': 'slow-pulse 8s ease-in-out infinite',
        float: 'float 10s ease-in-out infinite'
      },
      keyframes: {
        'slow-pulse': {
          '0%, 100%': { opacity: 0.35, transform: 'scale(1)' },
          '50%': { opacity: 0.8, transform: 'scale(1.05)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' }
        }
      }
    }
  },
  plugins: [require('tailwindcss-animate')],
};
