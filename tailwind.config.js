module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        links: '#88C0D0',
      },
      gridTemplateColumns: {
        main: '[full-start] 1fr [wide-start] 1fr [main-start]  repeat(8, 1fr) [main-end] 1fr [wide-end] 1fr [full-end]',
      },
      typography(theme) {
        return {
          DEFAULT: {
            css: {
              a: {
                // color: theme('colors.links')
                color: theme('colors.indigo.600'),
                textDecoration: 'none',
              },
              'a:hover': {
                color: theme('colors.indigo.400'),
              },
              width: '100%',
            },
          },
          dark: {
            css: {
              a: {
                color: theme('colors.indigo.400'),
              },
              'a:hover': {
                color: theme('colors.indigo.300'),
              },
              'h1,h2,h3,h4,h5,h6,p,code,strong': {
                color: theme('colors.gray.300'),
              },
            },
          },
        }
      },
    },
  },
  variants: {
    extend: {
      textColor: ['hover', 'dark'],
      typography: ['dark'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
