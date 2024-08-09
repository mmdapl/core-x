import process from 'node:process'
import type { Command } from 'commander'
import fetch from 'node-fetch'
import { CliCommandEnum } from '../shared'

export interface SyncOptions {

}

/**
 * cnpm 同步状态
 */
enum CNPMPackageState {
  Waiting = 'waiting',
  Processing = 'processing',
  Success = 'success',
}

/**
 * 同步包的响应
 */
interface RequestSync {
  ok: boolean
  logId: string
}

console.log(`Usage: $ fa sync [moduleName1 moduleName2 ...]
Options:
  --sync-publish        sync as publish
  --no-deps        do not sync dependencies and devDependencies`)

async function requestSync(packageName: string) {
  const syncUrl = `https://registry.npmmirror.com/${packageName}/sync`

  const response = await fetch(syncUrl, { method: 'PUT' })

  // if (response.status === 404 || !response.ok) {
  //
  // }

  const { ok, logId } = await response.json() as RequestSync

  if (!ok) {
    console.log('requestSync--json', await response.json())
    process.exit(1)
  }
  setTimeout(async () => {
    const logUrl = await getPackageSyncState(packageName, logId)
    await getPackageSyncLog(logUrl)
  }, 2000)
}

interface SyncState {
  ok: boolean
  id: string
  type: string
  state: CNPMPackageState
  logUrl: string
}

async function getPackageSyncState(packageName: string, logId: string) {
  const stateUrl = `https://registry.npmmirror.com/-/package/${packageName}/syncs/${logId}`
  const response = await fetch(stateUrl)
  const stateRes = await response.json() as SyncState

  // 正常的请求
  if (stateRes.ok && stateRes.state === CNPMPackageState.Success) {
    return stateRes.logUrl
  }
  console.log('getPackageSyncState-->err', stateRes)
  process.exit(1)
}

async function getPackageSyncLog(logUrl: string) {
  const response = await fetch(logUrl)

  const syncLog = await response.text()
  // console.log('getPackageSyncLog', syncLog)
  console.log(syncLog.toString())
}

/**
 * 同步到cnpm仓库
 * @param packageNames
 */
async function execSync(packageNames: string[]) {
  for (const packageName of packageNames) {
    setTimeout(async () => {
      console.log(`---------模块：${packageName} 开始同步 ------- \n`)
      await requestSync(packageName)
    }, 1000)
  }
}

/**
 * sync命令入口
 */
export async function syncMain(program: Command): Promise<void> {
  program
    .command(CliCommandEnum.SYNC)
    .description('同步npm仓库的模块包到cnpm仓库')
    .argument('[packageNames...]', '需要同步的模块包名称，支持多个，eg. @142vip/fairy-cli')
    .action(async (packageNames: string[]) => {
      await execSync(packageNames)
    })
}
