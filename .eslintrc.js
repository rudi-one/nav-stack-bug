module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'jest', 'detox'],
  rules: {
    'no-console': ['warn', {allow: ['warn', 'error']}],
    'newline-before-return': 1,
    'prettier/prettier': 0,
    'react-native/no-unused-styles': 1,
    'react-native/split-platform-components': 2,
    'react-native/no-inline-styles': 2,
    'react-native/no-single-element-style-arrays': 2,
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',
  },
  env: {
    'jest/globals': true,
  },
};
