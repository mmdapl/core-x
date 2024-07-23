import * as ezSpawn from '@jsdevtools/ez-spawn'
import type { NpmScript } from '../types'
import { ProgressEvent } from '../types'
import { readJsonFile } from './fs'
import type { Manifest } from './manifest'
import { isManifest } from './manifest'
import type { Operation } from './operation'

/**
 * 执行package.json文件中的scripts中配置的钩子函数
 * @param script
 * @param operation
 */
export async function runScript(script: NpmScript, operation: Operation): Promise<Operation> {
  const { cwd, ignoreScripts } = operation.options

  if (!ignoreScripts) {
    const { data: manifest } = await readJsonFile('package.json', cwd)

    if (isManifest(manifest) && hasScript(manifest, script)) {
      await ezSpawn.async('npm', ['run', script, '--silent'], { stdio: 'inherit' })
      operation.update({ event: ProgressEvent.NpmScript, script })
    }
  }

  return operation
}

/**
 * 判断package.json文件中是否配置scripts钩子函数
 */
function hasScript(manifest: Manifest, script: NpmScript): boolean {
  const scripts = manifest.scripts as Record<NpmScript, string> | undefined

  if (scripts && typeof scripts === 'object')
    return Boolean(scripts[script])

  return false
}
