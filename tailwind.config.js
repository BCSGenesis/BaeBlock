/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        mint: "#1EE7AB",
        purple: "#AA3FFF",
        deepYellow: "#FFC805",
        lightYellow: "#FFD84D",
        white: "#FAFAF2",
        light_gray: "#F1F0F8",
        gray: "#B2B2C1",
        dark_gray: "#7F7F82",
        black: "#2D2D32",
      },
      fontFamily: {
        sans: ["Pretendard", "Arial", "sans-serif"],
        agothic16: "agothic16",
        agothic10: "agothic10",
      },
    },
  },
  plugins: [],
};
