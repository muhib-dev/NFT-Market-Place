/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["DM Sans, sans-serif"], // default font
      DMSans: ["DM Sans", "sans-serif"],
      IntegralCF: ["IntegralCF", "sans-serif"],
    },

    extend: {
      colors: {
        brand: {
          main: "#3D00B7",
          500: "#2639ED",
          400: "#4F33A3",
          300: "#5539A8",
        },
      },
    },
  },
  plugins: [],
};
