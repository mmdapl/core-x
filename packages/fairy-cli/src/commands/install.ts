import { execChildProcess } from '../utils'

export interface InstallOptions {
  pnpm: boolean
  npm: boolean
  registry?: string
  update: boolean
}

/**
 * 依赖下载
 * - npm
 * - pnpm
 */
export function execInstall(args: InstallOptions) {
  console.log(111, args)
  // pnpm i --frozen-lockfile --registry https://registry.npmmirror.com
  // npm ci
  if (args.npm) {
    // 使用npm下载
    execChildProcess(`npm ${args.update ? 'i' : 'ci'} --registry  ${args.registry}`)
  }
  else {
    // pnpm下载
    execChildProcess(`pnpm i ${args.update ? '' : '--frozen-lockfile'} --registry ${args.registry}`)
  }
}
