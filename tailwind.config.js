/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js, jsx, ts, tsx}"],
  theme: {
    extend: {
      animation: {
        slideup: "slideup 4s ease 1",
        slidedown: "slidedown 4s ease 1",
        fadein: "fadein 4s ease 1",
        navslide: "navslide .3s ease-out 1",
      },
      keyframes: {
        slideup: {
          "0%": { transform: "translateY(200px)", opacity: 0 },
          "100%": { transform: "translateY(0px)", opacity: 100 },
        },
        slidedown: {
          "0%": { transform: "translateY(-200px)", opacity: 0 },
          "100%": { transform: "translateY(0px)", opacity: 100 },
        },
        navslide: {
          "0%": { transform: "translatex(-200px)" },
          "100%": { transform: "translatex(0px)" },
        },
        fadein: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
    screens: {
      xxs: { min: "640px", max: "720px" },
      xs: { min: "720px", max: "860px" },
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};
