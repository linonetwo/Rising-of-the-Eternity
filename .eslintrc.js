module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.eslint.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: '16.13.1',
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    'unicorn/prevent-abbreviations': [
      'error',
      {
        whitelist: {
          mod: true,
          Mod: true,
          props: true,
          Props: true,
        },
      },
    ],
    'comma-dangle': [2, 'always-multiline'],
    '@typescript-eslint/member-delimiter-style': [
      'warn',
      {
        multiline: {
          delimiter: 'none',
        },
      },
    ],
    'no-undef': 'off',
    'unicorn/filename-case': [
      'error',
      {
        case: 'camelCase',
        ignore: [/tsx$/],
      },
    ],
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'standard',
    'plugin:react/recommended',
    'plugin:unicorn/recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
    'prettier/react',
    'prettier/standard',
    'prettier/unicorn',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],
  plugins: ['@typescript-eslint/eslint-plugin', 'prettier', 'react', 'html', 'babel', 'react', 'unicorn', 'import'],
  env: {
    browser: true,
    es6: true,
  },
};
