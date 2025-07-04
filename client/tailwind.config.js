/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      Roboto: ['Roboto', 'sans-serif'],
      openSans: ['Open Sans', 'sans-serif'],
      rounded: ['M PLUS Rounded 1c', 'sans-serif'],
    },
  },
  plugins: [],
}

