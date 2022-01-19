module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif']
      },
    },
  },
  plugins: [require('@tailwindcss/forms'),require('@tailwindcss/aspect-ratio'),],
}