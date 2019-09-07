module.exports = {
  theme: {
    extend: {
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
        '-72': '-18rem',
        '-84': '-21rem',
        '-96': '-24rem'
      },
      colors: {
        netly: '#00ad9e',
      },
    },
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
  },
  plugins: [
    require('@tailwindcss/custom-forms'),
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
