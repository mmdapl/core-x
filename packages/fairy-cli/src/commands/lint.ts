import type { VipCommander } from '@142vip/utils'
import { VipExecutor } from '@142vip/utils'
import { CliCommandEnum } from '../shared'

interface LintOptions {
  fix: boolean
}

function execLink(args: LintOptions): void {
  // 执行eslint校验
  doCodeLint({
    fix: args.fix,
  })
}

/**
 * 代码格式化
 */
async function doCodeLint(args: { fix: boolean }): void {
  await VipExecutor.commandStandardExecutor(`npx eslint . ${args.fix ? '--fix' : ''}`)
}

/**
 * 基于Eslint校验
 * - 参考：eslint-config模块
 */
export async function lintMain(program: VipCommander): Promise<void> {
  program
    .command(CliCommandEnum.LINT)
    .description('根据Eslint检查代码风格，支持代码格式化')
    .option('-c,--config', 'Eslint配置文件路径', false)
    .option('-f --fix', '是否需要基于Eslint规则自动修复', false)
    .action(async (args: LintOptions) => {
      await execLink(args)
    })
}
