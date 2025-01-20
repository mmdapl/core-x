import fsSync from 'node:fs'
import * as process from 'node:process'
import type { VipCommander } from '@142vip/utils'
import { VipConsole, execShell } from '@142vip/utils'
import { CliCommandEnum } from '../shared'

interface TurboPackOptions {
  dev?: boolean
  build?: boolean
}

async function execTurboPack(repoNames: string[], args: TurboPackOptions): Promise<void> {
  // 判断当前目录下是否有turbo.json配置文件
  if (!fsSync.existsSync('turbo.json')) {
    VipConsole.log('项目根目录下缺少turbo.json配置文件，查看Turborepo官网：<https://turbo.build/repo/docs>')
    process.exit(1)
  }

  // npx turbo run dev
  if (args.dev) {
    await execShell(`npx turbo run dev ${getFilterRepo(repoNames)} --color --only`)
  }

  // npx turbo run build
  if (args.build) {
    await execShell(`npx turbo run build ${getFilterRepo(repoNames)} --color --only`)
  }
}

/**
 * 获取需要执行命令的repo
 * - 支持多个--filter
 * - 支持所有repo
 */
function getFilterRepo(repoNames: string[]): string {
  return repoNames.map(name => `--filter=${name}`).join(' ')
}

/**
 * turbo命令入口
 */
export async function turboPackMain(program: VipCommander): Promise<void> {
  program
    .command(CliCommandEnum.TURBO)
    .description('TurboPack工具命令')
    .argument('[repoName...]', '需要使用Turbo管理的项目名，支持多个')
    .option('--dev', '执行dev命令', false)
    .option('--build', '执行build命令', false)
    .action(async (repoNames: string[], args: TurboPackOptions) => {
      await execTurboPack(repoNames, args)
    })
}
