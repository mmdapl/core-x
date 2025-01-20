import inquirer from 'inquirer'

/**
 * 参考：https://www.npmjs.com/package/inquirer#answers
 * - inquirer@8 兼容commonjs
 */

/**
 * 终端交互选择，单选
 */
async function promptList(choiceList: string[], message?: string): Promise<string> {
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
async function promptCheckBox(choiceList: string[], message?: string): Promise<string[]> {
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

/**
 * 终端交互确认，确认框，可配置默认值
 */
async function promptConfirm(message: string, defaultValue?: boolean): Promise<boolean> {
  return (await inquirer.prompt({
    type: 'confirm',
    name: 'app',
    message,
    // 默认值
    ...defaultValue != null ? { default: defaultValue } : {},
  })).app
}

export interface IVipInquirer {
  promptList: typeof promptList
  promptCheckBox: typeof promptCheckBox
  promptConfirm: typeof promptConfirm
}

export const VipInquirer: IVipInquirer = {
  promptList,
  promptCheckBox,
  promptConfirm,
}
