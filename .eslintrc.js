module.exports = {
    env: {
      browser: true,
      es2021: true,
    },
    extends: 'airbnb-base',
    overrides: [],
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      semi: ['off'],
      quotes: ['error', 'single', { avoidEscape: true }],
      'no-console': 'off',
      'import/extensions': ['off'],
    },
  }