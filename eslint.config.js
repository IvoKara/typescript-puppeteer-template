import antfu from '@antfu/eslint-config'

export default antfu({
  rules: {
    'no-console': ['error', { allow: ['warn', 'error', 'info'] }],
    'unused-imports/no-unused-imports': 'error',
  },
})
