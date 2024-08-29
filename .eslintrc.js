module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@next/next/recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true, // JSX 구문을 지원
    },
  },
  plugins: ['import', 'react', '@typescript-eslint', 'prettier'],
  rules: {
    'global-require': 0,
    'no-unused-vars': 0,
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['off'],

    /** ******************* */
    /* General Code Rules */
    /** ******************* */

    // Enforce import order
    'import/order': 'error',

    'import/extensions': ['off'],

    // Imports should come first
    'import/first': 'error',

    // Other import rules
    'import/no-mutable-exports': 'error',

    // Allow unresolved imports
    'import/no-unresolved': 'off',

    // Allow async-await
    'generator-star-spacing': 'off',

    // Prefer const over let
    'prefer-const': [
      'error',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: false,
      },
    ],

    // No single if in an "else" block
    'no-lonely-if': 'error',

    // Force curly braces for control flow,
    // including if blocks with a single statement
    curly: ['error', 'all'],

    // No async function without await
    'require-await': 'error',

    // Force dot notation when possible
    'dot-notation': 'error',

    'no-var': 'error',

    // Force object shorthand where possible
    'object-shorthand': 'error',

    // No useless destructuring/importing/exporting renames
    'no-useless-rename': 'error',

    // No use before define
    'no-use-before-define': 'off',

    'no-param-reassign': 0,

    'no-undef': 0,

    /** ******************* */
    /*     React Rules      */
    /** ******************* */

    // Allow JSX syntax in .js and .jsx files
    'react/jsx-filename-extension': ['warn', { extensions: ['.jsx', '.tsx'] }],

    // Disable prop-types as we use TypeScript for type checking
    'react/prop-types': 'off',

    // Enforce consistent component structure in React files
    'react/jsx-props-no-spreading': 'off',

    // Ensure that JSX has the proper file extension
    'react/react-in-jsx-scope': 'off', // Next.js automatically imports React

    // Allow the use of unused expressions
    'no-unused-expressions': 'off',

    // Prettier configuration
    'prettier/prettier': 'error',
  },
  settings: {
    react: {
      version: 'detect', // Automatically detect the version of React
    },
  },
};
