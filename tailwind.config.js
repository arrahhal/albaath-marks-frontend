/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      title: ["Mada", "sans-serif"],
    },
    extend: {
      colors: {
        beige: "#FFF0E5",
      },
    },
  },
  plugins: [],
};
