/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'oswald': ['Oswald',],
        'krona': ['Krona One',],
      }
    },
  },
  plugins: [],
}
