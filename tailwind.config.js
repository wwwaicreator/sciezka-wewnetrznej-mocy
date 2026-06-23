/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        mystic: {
          50:  '#f5f0ff',
          100: '#ede5ff',
          200: '#dcd0ff',
          300: '#c4affe',
          400: '#a87ff8',
          500: '#8b52f0',
          600: '#7730e3',
          700: '#631ec7',
          800: '#521da3',
          900: '#451b83',
          950: '#2a0f55',
        },
        rose: {
          50:  '#fff1f5',
          100: '#ffe0ea',
          200: '#ffc6d9',
          300: '#ff9ab6',
          400: '#ff6091',
          500: '#fa2d6d',
          600: '#e80c53',
          700: '#c4053f',
          800: '#a2083a',
          900: '#890b37',
        },
        gold: {
          300: '#fde68a',
          400: '#fbbf24',
          500: '#f59e0b',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Lato"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float':        'float 7s ease-in-out infinite',
        'float-slow':   'float 10s ease-in-out infinite',
        'float-fast':   'float 4s ease-in-out infinite',
        'pulse-glow':   'pulseGlow 3s ease-in-out infinite',
        'shimmer':      'shimmer 3s linear infinite',
        'fade-in-up':   'fadeInUp 0.8s ease forwards',
        'spin-slow':    'spin 20s linear infinite',
        'aurora':       'aurora 8s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%':      { transform: 'translateY(-18px) rotate(2deg)' },
          '66%':      { transform: 'translateY(-8px) rotate(-1deg)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 15px rgba(139, 82, 240, 0.4), 0 0 30px rgba(139, 82, 240, 0.2)' },
          '50%':      { boxShadow: '0 0 30px rgba(139, 82, 240, 0.8), 0 0 60px rgba(139, 82, 240, 0.4)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition:  '200% center' },
        },
        fadeInUp: {
          '0%':   { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        aurora: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%':      { backgroundPosition: '100% 50%' },
        },
      },
      backgroundSize: {
        '300%': '300%',
        '400%': '400%',
      },
    },
  },
  plugins: [],
}
