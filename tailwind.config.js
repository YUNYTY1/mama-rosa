/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#C4141C',
          'red-dark': '#9E0F16',
          gold: '#F6B21B',
          ink: '#141414',
          cream: '#F8F3EA',
        },
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'Impact', 'sans-serif'],
        sans: ['Poppins', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        flicker: {
          '0%, 100%': { transform: 'scale(1) rotate(0deg)', opacity: '1' },
          '25%': { transform: 'scale(1.18) rotate(-6deg)' },
          '50%': { transform: 'scale(0.94) rotate(4deg)', opacity: '0.85' },
          '75%': { transform: 'scale(1.1) rotate(-3deg)' },
        },
        'spin-slow': {
          to: { transform: 'rotate(360deg)' },
        },
        ember: {
          '0%': { transform: 'translateY(0) scale(1)', opacity: '0' },
          '20%': { opacity: '1' },
          '100%': { transform: 'translateY(-280px) scale(0.3)', opacity: '0' },
        },
        'line-grow': {
          '0%': { width: '0' },
          '100%': { width: '10rem' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s ease-out both',
        'fade-in': 'fade-in 1.2s ease-out both',
        float: 'float 5s ease-in-out infinite',
        flicker: 'flicker 1.6s ease-in-out infinite',
        'spin-slow': 'spin-slow 40s linear infinite',
        ember: 'ember 3.5s ease-in infinite',
        'line-grow': 'line-grow 1s ease-out both',
      },
    },
  },
  plugins: [],
}