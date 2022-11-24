/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js, jsx, ts, tsx}"],
  theme: {
    extend: {},
    screens: {
      xxs: { min: "640px", max: "720px" },
      xs: { min: "720px", max: "860px" },
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};
