module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'no-console': ['off', 'always'],
    'arrow-body-style': ['off', 'always'],
    'react/function-component-definition': ['off', 'always'],
  },
  ignorePatterns: [
    'bundle.js',
  ],
};
