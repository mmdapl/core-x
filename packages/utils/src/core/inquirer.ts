import inquirer from 'inquirer'

/**
 * 参考：https://www.npmjs.com/package/inquirer#answers
 * - inquirer@8 兼容commonjs
 */

/**
 * 终端选择交互，单选
 */
export async function promptList(choiceList: string[], message?: string): Promise<string> {
  return (await inquirer.prompt([
    {
      type: 'list',
      name: 'app',
      message: message ?? '请选择模块...',
      choices: choiceList,
    },
  ])
  ).app
}

/**
 * 终端交互选择，多选
 */
export async function promptCheckBox(choiceList: string[], message?: string) {
  return (await inquirer.prompt([
    {
      type: 'checkbox',
      name: 'app',
      message: message ?? '请选择模块...',
      choices: choiceList,
      loop: false,
    },
  ])
  ).app
}
