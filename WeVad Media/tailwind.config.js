module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#041a3e',  
          green : '#abbc68',
          lightblue : '#78bbe9',                   // Custom brand color
          gradientStart: '#0f0c29',            // Gradient start color
          gradientMiddle: '#302b63',           // Gradient middle color
          gradientEnd: '#24243e',              // Gradient end color
          whiteGlass: 'rgba(255, 255, 255, 0.05)', // Translucent white for glassmorphism
          whiteBorder: 'rgba(255, 255, 255, 0.2)', // Border for glassmorphism
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
}