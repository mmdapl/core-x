import { RegistryAddressEnum } from '../enums'
import { VipExecutor } from './exec'
import { vipLogger } from './logger'
import { VipNodeJS } from './nodejs'
import { VipPackageJSON } from './package-json'

/**
 * 接受版本字符串模板（例如“release v”或“This is the %s release”）。
 * - 如果模板包含任何“%s”占位符，则它们将替换为版本号;
 * - 否则，版本号将追加到字符串
 */
function formatVersionStr(template: string, newVersion: string): string {
  return template.includes('%s') ? template.replace(/%s/g, newVersion) : `${template}${newVersion}`
}

/**
 * 获取npm版本
 */
async function getNpmVersion(): Promise<string | null> {
  return await VipExecutor.getCommandTrimResponse('echo "v$(npm -v)"')
}

/**
 * 获取node版本
 */
async function getNodeVersion(): Promise<string | null> {
  return await VipExecutor.getCommandTrimResponse('node -v')
}

async function getPnpmVersion(): Promise<string | null> {
  return await VipExecutor.getCommandTrimResponse('echo "v$(pnpm -v)"')
}

async function isExistNodeJs(): Promise<boolean> {
  return !!await getNodeVersion()
}

async function isExistNpm(): Promise<boolean> {
  return !!await getNpmVersion()
}

async function isExistPnpm(): Promise<boolean> {
  return !!await getPnpmVersion()
}

/**
 * 基于npm安装依赖
 */
async function installByNpm(args: {
  force?: boolean
  registry?: string
  cwd?: string
}): Promise<void> {
  const npmExist = await isExistNpm()
  if (!npmExist) {
    vipLogger.error('未安装npm，请先安装node.js环境。')
    VipNodeJS.exitProcess(1)
  }
  // 判断是否有package-lock.json文件
  if (!args.force) {
    const isExist = VipPackageJSON.isExistPackageLock(args.cwd)
    // 强制更新，生成新的package-lock.json文件
    if (!isExist) {
      args.force = true
    }
  }
  const command = `${args.force ? 'npm i' : 'npm ci'}`
  await VipExecutor.commandStandardExecutor(`${command} --registry ${args.registry ?? RegistryAddressEnum.VIP_NPM_TENCENT}`)
}

/**
 * 基于pnpm安装依赖
 */
async function installByPnpm(args: {
  force?: boolean
  registry?: string
  cwd?: string
}): Promise<void> {
  const pnpmExist = await isExistPnpm()
  if (pnpmExist == null) {
    vipLogger.error('未安装pnpm，请全局安装pnpm。命令：npm i -g pnpm')
    VipNodeJS.exitProcess(1)
  }
  // 判断是否有pnpm-lock文件
  if (!args.force) {
    const isExist = VipPackageJSON.isExistPnpmLock(args.cwd)
    // 强制更新，生成新的pnpm-lock文件
    if (!isExist) {
      args.force = true
    }
  }
  const commands = [
    'pnpm i',
    args.force ? '' : '--frozen-lockfile',
    `--registry ${args.registry ?? RegistryAddressEnum.VIP_NPM_TENCENT}`,
  ]
  await VipExecutor.commandStandardExecutor(commands.join(' '))
}

export const VipNpm = {
  formatVersionStr,
  getNpmVersion,
  getNodeVersion,
  getPnpmVersion,
  isExistNodeJs,
  isExistNpm,
  isExistPnpm,
  installByNpm,
  installByPnpm,
}
