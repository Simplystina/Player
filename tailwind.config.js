/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.js', './src/**/*.jsx'],
  theme: {
    extend: {
      colors :{
        secondary: "#9CD326",
        darkblack : "#0E0E0E",
        neutral: "#AFAFAF",
        secondary700:"#82B020",
        warning:"#E89D2B"
      },
      screens:{
        xsm:"450px"
      }
    },
  },
  plugins: [],
}

