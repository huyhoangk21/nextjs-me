module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      gridTemplateRows: {
        layout: '4rem 1fr',
      },
      typography: theme => ({
        DEFAULT: {
          css: {
            a: {
              color: theme('colors.blue.500'),
              textDecoration: 'none',
            },
            code: {
              '&:before, &:after': {
                display: 'none',
              },
            },
            pre: {
              overflow: 'hidden',
              whiteSpace: 'pre-wrap',
            },
          },
        },
        invert: {
          css: {
            color: theme('colors.gray.400'),
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
