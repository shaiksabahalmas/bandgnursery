/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#4B88B0",  // Dusty Blue
          light: "#7AAAC9",
          dark: "#3A6C8A",
        },
        secondary: {
          DEFAULT: "#F6D776",  // Soft Pastel Yellow
          light: "#FAE7A8",
          dark: "#EBCB64",
        },
        accent: {
          DEFAULT: "#FE646F",  // Muted Rose
          light: "#F0B1B1",
          dark: "#FC4654",
        },
        neutral: {
          background: "#f0e3d7ff", // Off-white
          text: "#333333",       // Body text
          heading: "#111111",    // Heading text
        },
        chrome: "#B8860B", 
      },
      fontFamily: {
        sans: ["Comic Neue", "sans-serif"],
      },
    },
  },
  plugins: [],
};
