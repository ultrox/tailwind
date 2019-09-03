module.exports = {
  theme: {
    extend: {
      colors: {
        netly: '#00ad9e',
      },
    },
  },
  variants: {},
  plugins: [
    function({ addUtilities }) {
      const newUtils = {
        '.rotate-10deg': {
          transform: 'rotate(-10deg)',
          position: 'absolute',
        },
        '.rotate-15deg': {
          transform: 'rotate(-15deg)',
          position: 'absolute',
        },
        '.rotate-40deg': {
          transform: 'rotate(-40deg)',
          position: 'absolute',
        },
      }
      addUtilities(newUtils)
    },
  ],
}
