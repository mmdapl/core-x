import chalk from 'chalk'

export interface LoggerOptions {
  startLabel?: string
  endLabel?: string
}

/**
 * 日志对象构造参数
 */
export interface VipLoggerOptions {
  infoColor?: string
  logColor?: string
  errorColor?: string
}

/**
 * 日志输出
 * - 用于终端
 * - 用于基本日志定位
 */
export class VipLogger {
  private static logger: VipLogger
  constructor(_opts?: VipLoggerOptions) {
  }

  public static getInstance(opts?: VipLoggerOptions): VipLogger {
    if (this.logger == null) {
      this.logger = new VipLogger(opts)
    }
    return this.logger
  }

  public info(msg: string, opts?: LoggerOptions) {
    const infoText = `${chalk.green(opts?.startLabel)} ${chalk.magenta(msg)} ${chalk.yellow(opts?.endLabel)}`
    console.info(infoText)
  }

  public log(msg: string, opts?: LoggerOptions) {
    const logText = `${chalk.blue(opts?.startLabel)} ${chalk.magenta(msg)} ${chalk.yellow(opts?.endLabel)}`
    console.log(logText)
  }

  public error(msg: string, opts?: LoggerOptions) {
    const text = `${chalk.red(opts?.startLabel)} ${chalk.magenta(msg)} ${chalk.yellow(opts?.endLabel)}`
    console.error(text)
  }
}
