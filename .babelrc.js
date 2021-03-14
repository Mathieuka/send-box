module.exports = {
  presets: ['next/babel'],
  plugins: [['transform-define']],
  env: {
    production: {
      "plugins": ["transform-remove-console"]
    }
  }
};
