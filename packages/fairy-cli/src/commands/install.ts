import type { VipCommander } from '@142vip/utils'
import { RegistryAddressEnum, VipInquirer, VipNpm } from '@142vip/utils'
import { CliCommandEnum } from '../shared'

interface InstallOptions {
  registry?: string
  force?: boolean
}
/**
 * 支持的依赖管理器
 */
enum InstallTypeEnum {
  NPM = 'npm',
  PNPM = 'pnpm',
}

/**
 * 依赖下载
 * - npm
 * - pnpm
 */
async function execInstall(installType: InstallTypeEnum, args: InstallOptions): Promise<void> {
  if (installType === InstallTypeEnum.NPM) {
    await VipNpm.installByNpm({ force: args.force, registry: args.registry })
  }
  if (installType === InstallTypeEnum.PNPM) {
    await VipNpm.installByPnpm({ force: args.force, registry: args.registry })
  }
}

/**
 * install 命令入口
 */
export async function installMain(program: VipCommander): Promise<void> {
  program
    .command(CliCommandEnum.INSTALL)
    .aliases(['i', 'add'])
    .description('下载、升级依赖版本')
    .option('-f,--force', 'force the lock file to be updated', false)
    .option('--registry', `pnpm registry address，default ali npm：${RegistryAddressEnum.VIP_NPM_ALIBABA}`, RegistryAddressEnum.VIP_NPM_ALIBABA)
    .action(async (args: InstallOptions) => {
      const installType = await VipInquirer.promptSelect<InstallTypeEnum>('选择下载方式', [
        InstallTypeEnum.PNPM,
        InstallTypeEnum.NPM,
      ], {
        default: InstallTypeEnum.PNPM,
      })
      await execInstall(installType, args)
    })
}
