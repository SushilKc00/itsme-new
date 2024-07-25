const { resolve } = require('node:path');

const project = resolve(process.cwd(), 'tsconfig.json');

// "@typescript-eslint/eslint-plugin": "^7.6.0",
// "@typescript-eslint/parser": "^7.6.0",
// "@vercel/style-guide": "^5.2.0",
// "eslint": "^9.0.0",
// "eslint-config-prettier": "^9.1.0",
// "eslint-config-turbo": "^1.12.4",
// "eslint-plugin-only-warn": "^1.1.0",
// "eslint-plugin-react": "^7.34.1",
// "eslint-plugin-react-hooks": "^4.6.0",
/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    'eslint:recommended',
    'prettier',
    'eslint-config-turbo',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],
  plugins: ['only-warn', '@typescript-eslint', 'import'],
  globals: {
    React: true,
    JSX: true,
  },
  env: {
    node: true,
  },
  settings: {
    'import/resolver': {
      typescript: {
        project,
      },
    },
  },
  ignorePatterns: [
    // Ignore dotfiles
    '.*.js',
    'node_modules/',
    'dist/',
  ],
  overrides: [
    {
      files: ['*.js?(x)', '*.ts?(x)'],
    },
  ],
};
