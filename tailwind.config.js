/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        display: ['Fraunces', 'serif'],
      },
      colors: {
        forest: '#153c35',
        lime: '#d7f36b',
        coral: '#ed785e',
        mist: '#f3f6f1',
      },
    },
  },
  plugins: [],
};