// eslint-disable-next-line unicorn/prefer-module
module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/default',
  transform: {
    '^.+\\.vue$': '@vue/vue3-jest',
  },
  testMatch: [
    '**/src/**/*.spec.js',
  ],
  setupFiles: ['./setup.js'],
};
