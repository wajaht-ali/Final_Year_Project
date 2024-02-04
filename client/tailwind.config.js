/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      Roboto: ['Roboto', 'sans-serif'], // For body font styles
      // Add other font styles as needed (e.g., heading, sans)
    },
  },
  plugins: [],
}

