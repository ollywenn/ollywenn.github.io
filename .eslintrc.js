module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ['eslint:recommended', 'prettier', 'prettier/babel'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {},
  overrides: [
    {
      files: ['resources/**/js/*.js'],
      excludedFiles: ['*.test.js', 'resources/**/js/__tests__/*', 'resources/**/js/external/*']
    }
  ]
};
