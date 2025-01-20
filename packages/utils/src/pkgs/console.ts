function trace(message?: any, ...optionalParams: any[]): void {
  console.trace(message, optionalParams)
}

function info(message?: any, ...optionalParams: any[]): void {
  console.info(message, optionalParams)
}
function log(message?: any, ...optionalParams: any[]): void {
  console.log(message, optionalParams)
}

function warn(message?: any, ...optionalParams: any[]): void {
  console.warn(message, optionalParams)
}

function error(message?: any, ...optionalParams: any[]): void {
  console.error(message, optionalParams)
}

/**
 * 日志
 */
export const VipConsole = {
  log,
  info,
  warn,
  trace,
  error,
}
