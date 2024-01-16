/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        gridTemplateRows: {
          '[auto,auto,1fr]': 'auto auto 1fr',
        },
        backgroundImage: theme => ({
        'error-page': "url('https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif')",
      })
      },
  },
  plugins: [require('@tailwindcss/aspect-ratio'),require('@tailwindcss/forms'),],
}