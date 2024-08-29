/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'custom-blue': 'hsl(197, 100%, 50%)',
        'custom-blue-hover': 'hsl(197, 100%, 35%)',
      }
    },
  },
  plugins: [],
}

