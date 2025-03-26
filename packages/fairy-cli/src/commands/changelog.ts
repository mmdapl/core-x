import type { VipCommander } from '@142vip/utils'
import { VipExecutor } from '@142vip/utils'
import { CliCommandEnum } from '../shared'

interface ChangelogOptions {
  dry?: boolean
}

async function generateChangelog(args: ChangelogOptions): Promise<void> {
  await VipExecutor.commandStandardExecutor(`npx changelog ${args.dry ? '--dry' : ''}`)
}

/**
 * changelog命令
 * - 生成CHANGELOG文档
 */
export async function changelogMain(program: VipCommander): Promise<void> {
  program
    .command(CliCommandEnum.CHANGELOG)
    .description('快速使用@142vip/changelog模块')
    .option('--dry', '试运行，生成`CHANGELOG`文档', false)
    .action(async (args: ChangelogOptions) => {
      // 参考 @142vip/changelog模块
      await generateChangelog(args)
    })
}
