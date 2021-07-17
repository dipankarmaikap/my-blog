// tailwind.config.js
const { fontFamily } = require("tailwindcss/defaultTheme")
const colors = require("tailwindcss/colors")
//console.log(colors)
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx,mdx}"],
  mode: "jit",
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        nav: "640px",
      },
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans],
      },
      colors: {
        gray: colors.gray,
      },
    },
  },
  variants: {},
  plugins: [],
}
