/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Poppins', 'sans-serif']
    },
    colors: {
      "white": "#fff",
      "transparent": "rgba(0, 0, 0, 0)",
      "blue": {
        "900": "#7676FF"
      },
      "gray": {
        "900": "#2E2E2E",
        "800": "#737373"
      }
    },
  },
  plugins: [],
}