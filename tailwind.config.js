/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        deepbrown: "#4B2E2E", // adjust to your preferred shade
        brown: "#6B3E26",
      },
    },
  },
  plugins: [],
};