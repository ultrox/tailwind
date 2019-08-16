// postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: './tailwind.config.js',
    autoprefixer: {},
    ...(process.env.NODE_ENV === 'production'
      ? {
          '@fullhuman/postcss-purgecss': {
            content: ['./today/public/index.html'],
            defaultExtractor: content =>
              content.match(/[A-Za-z0-9-_:/]+/g) || [],
          },
        }
      : []),
  },
};


