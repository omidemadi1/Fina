module.exports = {
  extends: ['universe', 'universe/shared/typescript-analysis'],
  parserOptions: {
    project: './tsconfig.json',
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
};