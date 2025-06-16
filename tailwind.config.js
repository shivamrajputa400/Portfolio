/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'glow-pulse': 'glow-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'circuit-flow': 'circuit-flow 20s linear infinite',
        'spin-slow': 'spin 3s linear infinite',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': {
            opacity: '1',
            filter: 'brightness(1)',
          },
          '50%': {
            opacity: '0.8',
            filter: 'brightness(1.2)',
          },
        },
        'circuit-flow': {
          '0%': {
            backgroundPosition: '0% 0%',
          },
          '100%': {
            backgroundPosition: '100% 100%',
          },
        },
      },
      boxShadow: {
        'glow-sm': '0 0 15px rgba(22, 163, 74, 0.15)',
        'glow-md': '0 0 25px rgba(22, 163, 74, 0.2)',
        'glow-lg': '0 0 35px rgba(22, 163, 74, 0.25)',
      },
    },
  },
  plugins: [],
};