export interface NestLoggerAdapter {
  write: (msg: string) => Promise<void> | void
}

export enum LoggerLevelEnum {
  error = 'error',
  warn = 'warn',
  info = 'info',
  debug = 'debug',
  trace = 'trace',
}
