/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        "dim-red": "#DC4949"
    },
    fontFamily: {
      Montserrat: ['Montserrat']
    }
    },
  },
  plugins: [],
}

