/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#151319',
          soft: '#1D1B24',
          line: '#33303B',
        },
        paper: {
          DEFAULT: '#F2ECDD',
          dim: '#E4DCC5',
        },
        stamp: {
          DEFAULT: '#C1443C',
          dark: '#9C3630',
        },
        gold: {
          DEFAULT: '#D8A93E',
          soft: '#E9CB8B',
        },
        muted: '#A79F8C',
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'sans-serif'],
        body: ['"Work Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        perforate:
          'repeating-linear-gradient(to bottom, transparent 0 6px, #151319 6px 14px)',
      },
      letterSpacing: {
        widest2: '0.25em',
      },
    },
  },
  plugins: [],
}
