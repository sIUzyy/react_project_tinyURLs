/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'main': ['Josefin Sans', 'sans-serif'],
        'btn': ['Raleway', 'sans-serif'],
        'url': ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}