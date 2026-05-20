const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: ['class'],
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'text-primary': '#FFFFFF',
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at top, rgba(15,23,42,0.85), #050816), radial-gradient(circle at bottom, rgba(15,23,42,0.92), #050816)',
        'radial-grid': 'radial-gradient(circle at 1px 1px, rgba(148,163,184,0.18) 1px, transparent 0)'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', ...fontFamily.sans]
      },
      opacity: {
        80: '0.8',
        25: '0.25'
      },
      zIndex: {
        '-10': '-10',
        '-20': '-20'
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
};
