module.exports = {
  style: {
    postcss: {
      plugins: [
        // eslint-disable-next-line import/no-extraneous-dependencies, global-require
        require('tailwindcss'),
        // eslint-disable-next-line import/no-extraneous-dependencies, global-require
        require('autoprefixer'),
      ],
    },
  },
};
