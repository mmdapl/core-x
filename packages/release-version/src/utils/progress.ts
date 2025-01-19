import { VipSymbols } from '@142vip/utils'
import type { VersionBumpProgress } from '../types'
import { ProgressEvent } from '../types'

/**
 * 显示进度
 * @param progress
 */
export function showProgress(progress: VersionBumpProgress) {
  switch (progress.event) {
    case ProgressEvent.FileUpdated:
      console.log(VipSymbols.success, `Updated ${progress.updatedFiles.pop()} to ${progress.newVersion}`)
      break

    case ProgressEvent.FileSkipped:
      console.log(VipSymbols.info, `${progress.skippedFiles.pop()} did not need to be updated`)
      break

    case ProgressEvent.GitCommit:
      console.log(VipSymbols.success, 'Git commit')
      break

    case ProgressEvent.GitTag:
      console.log(VipSymbols.success, 'Git tag')
      break

    case ProgressEvent.GitPush:
      console.log(VipSymbols.success, 'Git push')
      break

    case ProgressEvent.NpmScript:
      console.log(VipSymbols.success, `Npm run ${progress.script}`)
      break
  }
}
