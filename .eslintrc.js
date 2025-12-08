module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  env: {
    node: true,
    es2022: true,
  },
  ignorePatterns: [
    '.eslintrc.js',
    '.eslintrc.cjs',
    '.eslintrc.mjs',
    '.stylelintrc.js',
    '.stylelintrc.cjs',
    '.stylelintrc.json',
    '.prettierrc.js',
    '.prettierrc.cjs',
    '.prettierrc.json',
    '.lintstagedrc.js',
    '.lintstagedrc.json',
    '.editorconfig',
  ],
};
