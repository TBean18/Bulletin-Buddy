// tailwind.config.js
module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
          colors: {
              'dark-blueGray': '#1E293B',
              'light-blueGray': '#F1F5F9',
              'fuchsia-500': '#D946EF',
              'fuchsia-600': '#C026D3',
          }
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }