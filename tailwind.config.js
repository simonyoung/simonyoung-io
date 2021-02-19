// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  theme: {
    extend: {
      colors: {
        logo: {
          light: 'rgba(242,242,241,1)',
          mid: 'rgba(169,178,214,1)',
          dark: 'rgba(96,95,137,1)',
          darkest: 'rgba(55,54,86,1)',
        },
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      opacity: {
        // eslint-disable-next-line prettier/prettier
        90: '0.9',
        // eslint-disable-next-line prettier/prettier
        95: '0.95',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            blockquote: {
              color: theme('colors.logo.light'),
              background: theme('colors.logo.darkest'),
            },
            h2: {
              color: theme('colors.logo.mid'),
            },
            h3: {
              color: theme('colors.logo.mid'),
            },
            strong: {
              color: theme('colors.logo.mid'),
            },
            a: {
              color: theme('colors.logo.mid'),
            },
          },
        },
      }),
    },
  },
  purge: ['./src/**/*.js'],
  plugins: [require('@tailwindcss/ui'), require('@tailwindcss/typography')],
};
