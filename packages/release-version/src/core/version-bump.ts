import process from 'node:process'
import * as ezSpawn from '@jsdevtools/ez-spawn'
import symbols from 'log-symbols'
import prompts from 'prompts'
import { bold, cyan, green } from 'kolorist'
import type { VersionBumpOptions, VersionBumpResults } from '../types'
import { NpmScript } from '../types'
import { getNewVersion } from './get-new-version'
import { getCurrentVersion } from './get-current-version'
import { formatVersionString, gitCommit, gitPush, gitTag } from './git'
import { Operation } from './operation'
import { runScript } from './npm-script'
import { updateFiles } from './update-files'

/**
 * Bumps the version number in one or more files, prompting the user if necessary.
 *
 * use:
 * - versionBump()：default to new version number
 * - versionBump(release: string): explicit the new version number ,e.g: 0.1.10
 * - versionBump(options: VersionBumpOptions)：Optionally also commits, tags, and pushes to git
 */
export async function versionBump(arg: (VersionBumpOptions) | string = {}): Promise<VersionBumpResults | undefined> {
  if (typeof arg === 'string')
    arg = { release: arg }

  const operation = await Operation.start(arg)

  // Get the old and new version numbers
  await getCurrentVersion(operation)
  await getNewVersion(operation)

  // 弹出框，手动确认
  if (arg.confirm) {
    printSummary(operation)

    if (!await prompts({
      name: 'yes',
      type: 'confirm',
      message: '是否执行Bumpx命令，升级版本？',
      initial: true,
    }).then(r => r.yes)) {
      process.exit(1)
    }
  }

  // 运行preversion钩子函数
  await runScript(NpmScript.PreVersion, operation)

  // 更新所有文件的版本号
  await updateFiles(operation)

  if (operation.options.changelog) {
    console.log(symbols.info, 'Generate CHANGELOG.md By @142vip/changelog', operation.options.execute)
    try {
      await ezSpawn.async(`npx changelog --output CHANGELOG.md --name v${operation.state.newVersion}`, { stdio: 'inherit' })
    }
    catch (e) {
      console.log(333, e)
    }

    console.log(symbols.success, 'Generate CHANGELOG.md Finished')
  }

  if (operation.options.execute) {
    console.log(symbols.info, 'Executing Script', operation.options.execute)
    await ezSpawn.async(operation.options.execute, { stdio: 'inherit' })
    console.log(symbols.success, 'Script Finished')
  }

  // 运行version钩子函数
  await runScript(NpmScript.Version, operation)

  // 提交变更
  await gitCommit(operation)

  // 打标记
  await gitTag(operation)

  // 运行钩子函数
  await runScript(NpmScript.PostVersion, operation)

  // 推送git信息和标记到远程
  await gitPush(operation)

  return operation.results
}

/**
 * Bumps the version number in one or more files, prompting users if necessary.
 */
export async function versionBumpInfo(arg: VersionBumpOptions | string = {}): Promise<Operation> {
  if (typeof arg === 'string')
    arg = { release: arg }

  const operation = await Operation.start(arg)

  // Get the old and new version numbers
  await getCurrentVersion(operation)
  await getNewVersion(operation)
  return operation
}

/**
 * 打印参数
 */
function printSummary(operation: Operation) {
  console.log(333, operation)
  console.log()
  console.log(`   files ${operation.options.files.map(i => bold(i)).join('\n         ')}`)

  // 生成CHANGELOG.md文档
  if (operation.options.changelog) {
    console.log(`  generate CHANGELOG.md`)
  }
  if (operation.options.commit)
    console.log(`  commit ${bold(formatVersionString(operation.options.commit.message, operation.state.newVersion))}`)
  if (operation.options.tag)
    console.log(`     tag ${bold(formatVersionString(operation.options.tag.name, operation.state.newVersion))}`)
  if (operation.options.execute)
    console.log(` execute ${bold(operation.options.execute)}`)
  if (operation.options.push)
    console.log(`    push ${cyan(bold('yes'))}`)
  console.log()
  console.log(`    from ${bold(operation.state.currentVersion)}`)
  console.log(`      to ${green(bold(operation.state.newVersion))}`)
  console.log()
}
