import { FlatCompat } from '@eslint/eslintrc';
import prettier from 'eslint-config-prettier';

const compat = new FlatCompat({
  baseDirectory: __dirname, // Permite compatibilidad con configuraciones antiguas
});

export default [
  // Extensiones recomendadas
  ...compat.extends('plugin:react/recommended'),
  ...compat.extends('standard'),
  ...compat.extends('plugin:react-hooks/recommended'),
  ...compat.extends('plugin:prettier/recommended'),

  {
    env: {
      browser: true,
      es2021: true,
    },

    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 12,
      sourceType: 'module',
    },

    plugins: {
      react: require('eslint-plugin-react'),
      'import-helpers': require('eslint-plugin-import-helpers'),
      'react-hooks': require('eslint-plugin-react-hooks'),
      prettier: prettier,
    },

    rules: {
      // Prettier
      'prettier/prettier': 'error',

      // React Hooks
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      // Variables no utilizadas
      'no-unused-vars': 'warn',

      // Orden de imports
      'import-helpers/order-imports': [
        'warn',
        {
          newlinesBetween: 'always', // Línea nueva entre grupos
          groups: [
            '/^react/',
            'module',
            '/^@shared/',
            ['parent', 'sibling', 'index'],
          ],
          alphabetize: {
            order: 'asc',
            ignoreCase: true,
          },
        },
      ],
    },
  },
];
