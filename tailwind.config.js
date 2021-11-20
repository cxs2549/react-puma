module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brandBlack: '#131313',
        brandBorder: '#333335',
        brandInput: 'rgb(110, 110, 115)'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
