/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#F96192',
      },
      backgroundImage: {
        banner: `url('../public/images/banner.jpg')`,
      },
    },
  },
  plugins: [],
};
