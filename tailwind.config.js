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
        '90': '0.9',
        '95': '0.95',
      },
    },
  },
  purge: ['./src/**/*.js'],
  plugins: [require('@tailwindcss/ui'), require('@tailwindcss/typography')],
};
