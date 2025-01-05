module.exports = {
  root: true,
  extends: ['@astg/eslint-config/library.js'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
  },
};
