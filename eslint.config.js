const antFu = require('@antfu/eslint-config').default
// 参考：https://github.com/antfu/eslint-config

module.exports = antFu({
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
    'packages/framework/*',
    'packages/framework/**',
    'apps/tools-api-back/**',
  ],
  typescript: {
    tsconfigPath: 'tsconfig.json',
    overrides: {
      'ts/no-unused-vars': ['error', { ignoreRestSiblings: true, argsIgnorePattern: '^_' }], // 忽略 rest 属性的兄弟属性，便于解构；忽略函数中下划线开头的参数。
      'ts/consistent-type-imports': ['off'], // Nest.js的依赖注入会被识别为type-imports，自动fix会在import添加type，导致注入失败，此项必须关闭。
      'ts/no-inferrable-types': ['error', { ignoreProperties: true }], // 允许类属性在设置默认值的同时设置类型，以兼容swagger对DTO中默认值的识别。
      'ts/explicit-function-return-type': ['warn'], // 显式声明方法返回类型
      'ts/explicit-member-accessibility': ['warn', { overrides: { constructors: 'off', properties: 'off' } }], // 显式声明可访问性修饰符
      'ts/explicit-module-boundary-types': ['warn'], // 导出函数和类的公共类方法上显式返回和参数类型。
      'ts/no-require-imports': ['warn'], // 禁止require
      'ts/no-var-requires': ['warn'], // 禁止require
    },
  },
  vue: true,
  // Disable jsonc and yaml support
  jsonc: false,
  yaml: true,
  formatters: {
    css: true,
    html: true,
    markdown: 'prettier',
  },
  rules: {
    'no-void': ['off'], // 允许void类型，间接允许返回void类型时，不写return。由于存在对express next()等库方法的调用，为保证类型兼容，此项须关闭。
    'dot-notation': ['off'], // 依赖库中的值可能使用`[key: string]: any`式的类型定义，我们调用时不可避免的需要使用`obj['key']`来访问某些成员，比如ConfigModule。
    'ts/no-unused-vars': ['error', { ignoreRestSiblings: true, argsIgnorePattern: '^_' }], // 忽略 rest 属性的兄弟属性，便于解构；忽略函数中下划线开头的参数。
    'ts/consistent-type-imports': ['off'], // Nest.js的依赖注入会被识别为type-imports，自动fix会在import添加type，导致注入失败，此项必须关闭。
    'ts/no-inferrable-types': ['error', { ignoreProperties: true }], // 允许类属性在设置默认值的同时设置类型，以兼容swagger对DTO中默认值的识别。
    'ts/explicit-function-return-type': ['warn'], // 显式声明方法返回类型
    'ts/explicit-member-accessibility': ['warn', { overrides: { constructors: 'off', properties: 'off' } }], // 显式声明可访问性修饰符
    'ts/explicit-module-boundary-types': ['warn'], // 导出函数和类的公共类方法上显式返回和参数类型。
    'ts/no-require-imports': ['warn'], // 禁止require
    'ts/no-var-requires': ['warn'], // 禁止require
    'node/prefer-global/buffer': ['error', 'always'], // 一致地使用全局 Buffer
    'node/prefer-global/process': ['error', 'always'], // 一致地使用全局 process
    'no-console': 'off',
    'no-restricted-syntax': [
      'error',
      {
        selector: 'CallExpression[callee.object.name=\'console\'][callee.property.name!=/^(log|warn|error|info|trace)$/]',
        message: 'Unexpected property on console object was called',
      },
    ],
    'semi': [2, 'never'], // 去掉结尾的分号
    'singleQuote': 0,
    'array-bracket-spacing': [2, 'never'], // 强制数组方括号中使用一致的空格
    'no-control-regex': 0, // 禁止在正则表达式中使用控制字符
  },
})
