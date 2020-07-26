// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        blue: {
          twitter: '#1da1f2',
        },
        pink: {
          instagram: '#c13584',
        },
      },
    },
  },
  purge: ['./src/**/*.js'],
  plugins: [require('@tailwindcss/ui'), require('@tailwindcss/typography')],
};
