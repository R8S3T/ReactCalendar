/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'my-blue': '#668ba4',
        'my-green': '#a7bcb9',
        'my-grey': '#e0ebeb'
      },
    },
  },
  plugins: [],
}

