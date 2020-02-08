module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    '"plugin:@typescript-eslint/recommended", plugin:vue/recommended',
    'prettier',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'vue', 'prettier'],
  rules: {
    'prettier/prettier': ['error'],
    '@typescript-eslint/rule-name': 'error',
  },
};
