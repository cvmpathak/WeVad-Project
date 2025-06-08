/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        ...colors, // ✅ Restore Tailwind's default colors (including `orange-500`)
        brand: {
          blue: '#041a3e',
          green: '#abbc68',
          lightgreen: '#83e95e',
          lightred: '#f23a5b',
          lightblue: '#1b2a63',
          gradientStart: '#0f0c29',
          lightbluefaded: 'rgba(4, 26, 62, 0.8)',
          gradientMiddle: '#302b63',
          gradientEnd: '#24243e',
          whiteGlass: 'rgba(255, 255, 255, 0.05)',
          whiteBorder: 'rgba(255, 255, 255, 0.2)',
        },
      },
      spacing: {
        '30rem': '30rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
