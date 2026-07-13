/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        themeBlue: "#0d8bc5",
        themeTeal: "#3eb5b1",
        themeOrange: "#ef5f3b",
        themeGrey: "#747474",
        themeDarkGrey: "#444444",
      },
      fontFamily: {
        sans: ["Raleway", "sans-serif"],
      },
    },
  },
  plugins: [],
}
