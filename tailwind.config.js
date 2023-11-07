/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  theme: {
    extend: {
      screens: {
        l: '700px'
      }
    }
  },
  plugins: []
}
