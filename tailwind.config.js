// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      opacity: {
        // eslint-disable-next-line prettier/prettier
        90: '0.9',
        // eslint-disable-next-line prettier/prettier
        95: '0.95',
      },
    },
  },
  purge: ['./src/**/*.js'],
  plugins: [require('@tailwindcss/ui'), require('@tailwindcss/typography')],
};
