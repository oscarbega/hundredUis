/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily:{
        'ubuntu': ['Ubuntu']
      },
      colors:{
        'dark-purple':'#090212'
      }
    },
  },
  plugins: [],
}

