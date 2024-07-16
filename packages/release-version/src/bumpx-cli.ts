import process from 'node:process'
import symbols from 'log-symbols'
import { version as packageVersion } from '../package.json'
import { parseArgs } from './utils'
import { versionBump } from './core/version-bump'
import type { VersionBumpProgress } from './types'
import { ExitCodeEnum, ProgressEvent } from './types'

function progress({ event, script, updatedFiles, skippedFiles, newVersion }: VersionBumpProgress) {
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

function errorHandler(error: Error): void {
  let message = error.message || String(error)

  if (process.env.DEBUG || process.env.NODE_ENV === 'development')
    message = error.stack || message

  console.error(message)
  process.exit(ExitCodeEnum.FatalError)
}

/**
 * The main entry point of the CLI
 */
export async function main() {
  try {
    // Setup global error handlers
    process.on('uncaughtException', errorHandler)
    process.on('unhandledRejection', errorHandler)

    // Parse the command-line arguments
    const { help, version, quiet, options } = await parseArgs()

    if (help) {
      process.exit(ExitCodeEnum.Success)
    }
    else if (version) {
      // Show the version number and exit
      console.log(packageVersion)
      process.exit(ExitCodeEnum.Success)
    }
    else {
      if (!quiet)
        options.progress = options.progress ? options.progress : progress

      await versionBump(options)
    }
  }
  catch (error) {
    errorHandler(error as Error)
  }
}

main()
