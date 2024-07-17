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
import { runNpmScript } from './run-npm-script'
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

  if (arg.confirm) {
    printSummary(operation)

    if (!await prompts({
      name: 'yes',
      type: 'confirm',
      message: 'Bump?',
      initial: true,
    }).then(r => r.yes)) {
      process.exit(1)
    }
  }

  // Run npm preversion script, if any
  await runNpmScript(NpmScript.PreVersion, operation)

  // Update the version number in all files
  await updateFiles(operation)

  if (operation.options.execute) {
    console.log(symbols.info, 'Executing script', operation.options.execute)
    await ezSpawn.async(operation.options.execute, { stdio: 'inherit' })
    console.log(symbols.success, 'Script finished')
  }

  // Run npm version script, if any
  await runNpmScript(NpmScript.Version, operation)

  // Git commit and tag, if enabled
  await gitCommit(operation)
  await gitTag(operation)

  // Run npm postversion script, if any
  await runNpmScript(NpmScript.PostVersion, operation)

  // 推送git信息和标记到远程
  await gitPush(operation)

  return operation.results
}

function printSummary(operation: Operation) {
  console.log()
  console.log(`   files ${operation.options.files.map(i => bold(i)).join('\n         ')}`)
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
