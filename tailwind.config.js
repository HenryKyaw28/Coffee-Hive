/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': '#f2e8d6',
        'secondary': {
          'green': '#98c473',
          'cream': '#d9d1b5',
        },
        'accent': {
          'red': '#c34a36',
          'orange': '#e57a54',
        },
      },
      fontFamily: {
        suse: ['SUSE']
      },
    },
  },
  plugins: [],
}

