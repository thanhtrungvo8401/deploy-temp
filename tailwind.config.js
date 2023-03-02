/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,,tsx}',
    './containers/**/*.{ts,,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'c-black': '#1a1a1a',
        'c-gray': '#333333',
        'c-gray-lighter': '#4d4d4d',
        'c-white': '#ededed',
        'c-white-lighter': '#8f8f8f',
        'c-green': '#16b71f',
        'c-green-lighter': '#08aa58',
        'c-red': '#d30100',
        'c-blue': '#044785',
        'c-blue-lighter': '#162535',
        'c-cyan': '#04a9b0'
      }
    }
  },
  plugins: []
};
