import inquirer from 'inquirer'

/**
 * 参考：https://www.npmjs.com/package/inquirer#answers
 * - inquirer@8 兼容commonjs
 */

/**
 * 终端选择交互
 */
export async function promptList(choiceList: string[], message?: string): Promise<string> {
  return (await inquirer.prompt([
    {
      type: 'list',
      name: 'app',
      message: message ?? '选择repo模块...',
      choices: choiceList,
    },
  ])
  ).app
}
