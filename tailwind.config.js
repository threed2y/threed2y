/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
<<<<<<< Updated upstream
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
=======
        display: ['"Bangers"', 'cursive'],
        body: ['"Kalam"', 'cursive'],
        serif: ['"Shippori Mincho"', 'serif'],
        mono: ['"Share Tech Mono"', 'monospace'],
      },
      colors: {
        paper: {
          50: '#ffffff',
          100: '#fafaf8',
          200: '#f2f0eb',
          300: '#e8e4dc',
        },
        ink: {
          900: '#0a0806',
          800: '#1a1612',
          700: '#2c2620',
          600: '#3d3630',
          500: '#5c534a',
          400: '#8a7d72',
          300: '#b8ada4',
        },
        red: {
          manga: '#cc1a1a',
          light: '#e83030',
          pale: '#fde8e8',
        },
        screen: '#e8f4ff',
      },
      animation: {
        'panel-in': 'panelIn 0.4s ease-out',
        'ink-drop': 'inkDrop 0.6s ease-out',
        'speed-line': 'speedLine 0.3s ease-out',
      },
      keyframes: {
        panelIn: {
          '0%': { opacity: '0', transform: 'scale(0.96) translateY(8px)' },
          '100%': { opacity: '1', transform: 'scale(1) translateY(0)' },
        },
        inkDrop: {
          '0%': { transform: 'scale(0)', opacity: '0' },
          '60%': { transform: 'scale(1.1)', opacity: '1' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
>>>>>>> Stashed changes
      }
    },
  },
  plugins: [],
}
