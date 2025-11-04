import process from 'node:process'
import PinoPretty from 'pino-pretty'
import { LoggerLevelEnum, NestLoggerAdapter } from '../core/logger.interface'

export interface NestConsoleLoggerConfig extends PinoPretty.PrettyOptions {
  level?: LoggerLevelEnum
}

/**
 * 控制台日志
 */
export class ConsoleLogger implements NestLoggerAdapter {
  private readonly stream: PinoPretty.PrettyStream

  constructor(options: NestConsoleLoggerConfig) {
    this.stream = PinoPretty({
      ...options,
      destination: process.stdout,
    })
  }

  public write(msg: string): void {
    this.stream.push(msg)
  }
}
