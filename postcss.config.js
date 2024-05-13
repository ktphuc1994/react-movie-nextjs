module.exports = {
  plugins: {
    cssnano: {
      preset: 'default',
    },
    'postcss-mixins': {},
    'postcss-simple-vars': {},
    'postcss-preset-env': {
      stage: 2,
    },
  },
};
