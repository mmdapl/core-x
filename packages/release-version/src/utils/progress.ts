import symbols from 'log-symbols'
import type { VersionBumpProgress } from '../types'
import { ProgressEvent } from '../types'

/**
 * 显示进度
 * @param event
 * @param script
 * @param updatedFiles
 * @param skippedFiles
 * @param newVersion
 */
export function showProgress({ event, script, updatedFiles, skippedFiles, newVersion }: VersionBumpProgress) {
  switch (event) {
    case ProgressEvent.FileUpdated:
      console.log(symbols.success, `Updated ${updatedFiles.pop()} to ${newVersion}`)
      break

    case ProgressEvent.FileSkipped:
      console.log(symbols.info, `${skippedFiles.pop()} did not need to be updated`)
      break

    case ProgressEvent.GitCommit:
      console.log(symbols.success, 'Git commit')
      break

    case ProgressEvent.GitTag:
      console.log(symbols.success, 'Git tag')
      break

    case ProgressEvent.GitPush:
      console.log(symbols.success, 'Git push')
      break

    case ProgressEvent.NpmScript:
      console.log(symbols.success, `Npm run ${script}`)
      break
  }
}
