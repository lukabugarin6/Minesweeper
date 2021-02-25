module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
       fontFamily: {
        'primary' : ['']
      },
      colors: {
        'primary' : '',
        'secondary' : '',
        'tertiary' : '',
        'quaternary' : '',
        'quinary' : '',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
