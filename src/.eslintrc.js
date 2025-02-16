module.exports = {
  extends: ['next/core-web-vitals', 'plugin:prettier/recommended'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    indent: ['error', 2], // Enforce 2-space indentation
    quotes: ['error', 'single'], // Use single quotes
    semi: ['error', 'always'], // Require semicolons
    'no-unused-vars': 'error', // Warn on unused variables
    'no-console': 'warn', // Warn on console logs
  },
};
