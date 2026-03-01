/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['"Shippori Mincho"', 'serif'],
        body: ['"Crimson Pro"', 'serif'],
        mono: ['"Zen Kaku Gothic New"', 'sans-serif'],
      },
      colors: {
        rice: {
          50: '#faf8f3',
          100: '#f2ede0',
          200: '#e8dfc8',
          300: '#d4c4a0',
        },
        sumi: {
          900: '#0d0b08',
          800: '#161310',
          700: '#211d18',
          600: '#2e2820',
          500: '#3d3530',
          400: '#5a5048',
        },
        blood: '#8b1a1a',
        rust: '#7a3b1e',
        ash: '#9e9488',
        gold: '#c9a84c',
      },
      animation: {
        'flicker': 'flicker 4s ease-in-out infinite',
        'brush': 'brush 3s ease-in-out infinite',
      },
      keyframes: {
        flicker: {
          '0%, 100%': { opacity: '1' },
          '33%': { opacity: '0.85' },
          '66%': { opacity: '0.95' },
        },
        brush: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}
