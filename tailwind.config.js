const colors = require("tailwindcss/colors")
// const defaultTheme = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/layouts/**/*.{js,jsx,ts,tsx}",
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.yellow,
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", "serif"],
      },
    },
  },
  corePlugins: {
    // Disable tailwind default
    // container component in order to create our own.
    container: false,
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        // Containter
        // Create our own container component
        // and ask tailwind to take it into account.
        ".container": {
          maxWidth: "84vw",
          marginLeft: "auto",
          marginRight: "auto",
          "@screen md": {
            maxWidth: "75vw",
          },
          "@screen lg": {
            maxWidth: "66vw",
          },
        },
      })
    },
  ],
}
