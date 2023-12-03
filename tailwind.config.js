/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#121212",
        secondary: "#0cff99",
        third: "#202020",
        fourth: "#ffffff",
        nav: "#828282"
      },
      screens: {
        xs: "400px"
      },
      keyframes: {
        carousel: {
          from: {"--webkit-transform": "translateX(0)", "transform": "translateX(0)"},
          to: {"--webkit-transform": "translateX(-100%)", "transform": "translateX(-100%)"}
        }
      },
      animation: {
        carousel: "carousel 20s infinite linear"
      }
    },
  },
  plugins: [],
}

