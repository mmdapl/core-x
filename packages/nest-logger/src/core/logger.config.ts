import { NestConsoleLoggerConfig } from '../adapter/console.logger'

export class NestLoggerConfig {
  fileLogger?: any
  consoleLogger?: NestConsoleLoggerConfig
}
