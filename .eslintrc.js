module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  overrides: [
    // This configuration will apply only to TypeScript files
    {
      files: ['**/*.ts', '**/*.tsx'],
      env: {
        browser: true,
        node: true,
        commonjs: true,
        es6: true,
      },
      extends: [
        'eslint:recommended',
        'plugin:react/recommended', // React rules
        'plugin:jsx-a11y/recommended', // Accessibility rules
        'plugin:@typescript-eslint/recommended', // TypeScript rules
        'prettier/@typescript-eslint', // Prettier plugin
        'plugin:prettier/recommended', // Prettier recommended rules
      ],
      globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 2020,
      },
      plugins: ['react'],
      settings: {
        react: {
          version: 'detect',
        },
      },
      rules: {
        'prettier/prettier': ['error', {}, { usePrettierrc: true }],
        'react/prop-types': 'off',
        'react/react-in-jsx-scope': 'off',
        '@typescript-eslint/no-use-before-define': 'error',
        '@typescript-eslint/explicit-function-return-type': 'error',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'error',
        'jsx-a11y/anchor-is-valid': [
          'error',
          {
            components: ['Link'],
            specialLink: ['hrefLeft', 'hrefRight'],
            aspects: ['invalidHref', 'preferButton'],
          },
        ],
        'jsx-a11y/label-has-associated-control': [
          'error',
          {
            labelComponents: [],
            labelAttributes: [],
            controlComponents: [],
            assert: 'either',
            depth: 25,
          },
        ],
      },
    },
    {
      files: ['**/*.js', '**/*.jsx'],
      env: {
        node: true,
        commonjs: true,
        es6: true,
      },
      extends: ['eslint:recommended', 'plugin:prettier/recommended'],
      globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
      },
    },
  ],
};
