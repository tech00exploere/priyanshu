/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        darkbg: "#030712",
        darkcard: "rgba(15, 23, 42, 0.75)",
        darkborder: "rgba(30, 58, 138, 0.3)",
        cyanaccent: "#38bdf8",
        blueaccent: "#3b82f6",
      },
    },
  },
  plugins: [],
};