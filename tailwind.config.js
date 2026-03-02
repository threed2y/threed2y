/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['Bangers', 'cursive'],
        body: ['Kalam', 'cursive'],
        serif: ['Shippori Mincho', 'serif'],
        mono: ['Share Tech Mono', 'monospace'],
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
          600: '#3d3530',
          500: '#5c534a',
          400: '#8a7d72',
          300: '#b8ada4',
        },
        'red-manga': '#cc1a1a',
        'red-light': '#e83030',
        'red-pale': '#fde8e8',
      },
      animation: {
        'panel-in': 'panelIn 0.4s ease-out',
      },
      keyframes: {
        panelIn: {
          '0%': { opacity: '0', transform: 'scale(0.96) translateY(8px)' },
          '100%': { opacity: '1', transform: 'scale(1) translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
