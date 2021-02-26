module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
       fontFamily: {
        'primary' : ['']
      },
      colors: {
        'primary' : '#2C3531',
        'secondary' : '#116466',
        'tertiary' : '#D9B08C',
        'quaternary' : '#FFCB9A',
        'quinary' : '#D1E8E2',
      },
      borderWidth: {
        '1' : '1px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
