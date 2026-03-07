/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],

  theme: {
    extend: {

      colors: {

  brand: {

    hero: "#323a2f",

    soft: "#F4EFE6",

    dark: "#242A28",

    warm: "#927b5c",

    primary: {
      DEFAULT: "#4a4c34",
      light: "#6a6d52",
      dark: "#35382a"
    },

    accent: {
      DEFAULT: "#77501b",
      light: "#9a6c2f",
      dark: "#5a3c12"
    }

  }

},

      fontFamily: {
        heading: ["Playfair Display", "serif"],
        body: ["Inter", "sans-serif"],
      },

    },
  },

  plugins: [],
};