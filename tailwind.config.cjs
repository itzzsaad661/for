/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        blush: {
          50: '#fff1f5',
          100: '#ffe4ea',
          200: '#ffcbd7',
          300: '#ff9fb5',
          400: '#ff6d95',
          500: '#ff447a',
          600: '#e73369',
          700: '#bf2554',
          800: '#991b44',
          900: '#7a1638',
        },
      },
      boxShadow: {
        glow: '0 0 30px rgba(255, 105, 135, 0.35)',
      },
      animation: {
        'fade-in': 'fadeIn 1.2s ease-out forwards',
        'slide-up': 'slideUp 700ms ease-out forwards',
        'float-heart': 'floatHeart 9s linear infinite',
        'typewriter': 'typewriter 4s steps(26) 1s 1 normal both, blinkCaret 900ms steps(1) infinite',
        'soft-glow': 'softGlow 8s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        floatHeart: {
          '0%': { transform: 'translateY(0) scale(0.9)', opacity: '0.6' },
          '50%': { opacity: '1' },
          '100%': { transform: 'translateY(-120vh) scale(1.1)', opacity: '0' },
        },
        typewriter: {
          from: { width: '0' },
          to: { width: '100%' },
        },
        blinkCaret: {
          '0%, 100%': { borderColor: 'transparent' },
          '50%': { borderColor: '#ff6d95' },
        },
        softGlow: {
          '0%, 100%': { boxShadow: '0 0 60px rgba(255, 105, 135, 0.35)' },
          '50%': { boxShadow: '0 0 120px rgba(255, 105, 135, 0.55)' },
        },
      },
    },
  },
  plugins: [],
}

