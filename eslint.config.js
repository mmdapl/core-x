import antFu from '@antfu/eslint-config'

// 参考：https://github.com/antfu/eslint-config

export default antFu({
  ignores: [
    '**/node_modules/**',
    'dist',
    '**/dist/**',
    '.nuxt',
    '**/.nuxt/**',
    'typings/',
    '**/typings/**/',
    '.output',
    '**/.output/**',
  ],
  typescript: true,
  vue: true,
  // Disable jsonc and yaml support
  jsonc: false,
  yaml: true,
  formatters: {
    css: true,
    html: true,
    // markdown: 'prettier',
  },
  rules: {
    'no-console': 'warn',
    'no-restricted-syntax': [
      'error',
      {
        selector: 'CallExpression[callee.object.name=\'console\'][callee.property.name!=/^(log|warn|error|info|trace)$/]',
        message: 'Unexpected property on console object was called',
      },
    ],
  },
})
