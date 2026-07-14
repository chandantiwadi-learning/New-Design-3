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
        themeBlueDark: "#086a98",
        themeBlueLight: "#eaf6fc",
        themeNavy: "#0b2d42",
        themeGrey: "#64748b",
        themeDarkGrey: "#1f2937",
      },
      fontFamily: {
        sans: ["Raleway", "sans-serif"],
      },
    },
  },
  plugins: [],
}

