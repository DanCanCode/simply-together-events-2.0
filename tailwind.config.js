/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js, jsx, ts, tsx}"],
  theme: {
    extend: {
      animation: {
        slideup: "slideup 4s ease 1",
        slidedown: "slidedown 4s ease 1",
        slideinLeft: "slideinLeft 2s ease 1",
        slideinRight: "slideinRight 2s ease 1",
        fadein: "fadein 3s ease 1",
        navslide: "navslide .3s ease-out 1",
      },
      keyframes: {
        slideup: {
          "0%": { transform: "translateY(200px)", opacity: 0 },
          "100%": { transform: "translateY(0px)", opacity: 1 },
        },
        slidedown: {
          "0%": { transform: "translateY(-200px)", opacity: 0 },
          "100%": { transform: "translateY(0px)", opacity: 1 },
        },
        slideinLeft: {
          "0%": { transform: "translateX(-200px)", opacity: 0 },
          "100%": { transform: "translateX(0px)", opacity: 1 },
        },
        slideinRight: {
          "0%": { transform: "translateX(200px)", opacity: 0 },
          "100%": { transform: "translateX(0px)", opacity: 1 },
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
  },
  plugins: [],
};
