import type { Command } from 'commander'
import { execShell } from '@142vip/utils'
import { CliCommandEnum } from '../shared'

interface LintOptions {
  fix: boolean
}

async function execLink(args: LintOptions) {
  // 执行eslint校验
  await doCodeLint({
    fix: args.fix,
  })
}

/**
 * 代码格式化
 */
async function doCodeLint(args: { fix: boolean }) {
  await execShell(`npx eslint . ${args.fix ? '--fix' : ''}`)
}

/**
 * 基于Eslint校验
 * - 参考：eslint-config模块
 */
export async function lintMain(program: Command) {
  program
    .command(CliCommandEnum.LINT)
    .description('根据Eslint检查代码风格，支持代码格式化')
    .option('-c,--config', 'Eslint配置文件路径', false)
    .option('-f --fix', '是否需要基于Eslint规则自动修复', false)
    .action(async (args: LintOptions) => {
      await execLink(args)
    })
}
