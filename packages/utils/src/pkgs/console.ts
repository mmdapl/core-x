function trace(message: string = ''): void {
  console.trace(message)
}

function log(message: string = ''): void {
  console.log(message)
}

function warn(message: string = ''): void {
  console.warn(message)
}

function error(message: string = ''): void {
  console.error(message)
}

export interface IVipConsole {
  log: typeof log
  warn: typeof warn
  trace: typeof trace
  error: typeof error
}

/**
 * 日志
 */
export const VipConsole: IVipConsole = {
  log,
  warn,
  trace,
  error,
}
