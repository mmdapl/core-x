interface EggCoreLogger {
  info: (msg: any, ...args: any[]) => void
  warn: (msg: any, ...args: any[]) => void
  error: (msg: any, ...args: any[]) => void
  debug: (msg: any, ...args: any[]) => void
}

/**
 * egg插件日志
 */
export class VipEggPluginLogger {
  public static instance: VipEggPluginLogger
  private readonly logger: EggCoreLogger
  private readonly pluginName: string

  constructor(pluginName: string, logger: EggCoreLogger) {
    this.logger = logger
    this.pluginName = pluginName
  }

  /**
   * 单例对象
   */
  public static getInstance(pluginName: string, logger: EggCoreLogger) {
    if (this.instance == null) {
      this.instance = new VipEggPluginLogger(pluginName, logger)
    }
    return this.instance
  }

  public info(message: string) {
    this.logger.info(`[${this.pluginName}] ${message}`)
  }

  public warn(message: string) {
    this.logger.warn(`[${this.pluginName}] ${message}`)
  }

  public error(message: string) {
    this.logger.error(`[${this.pluginName}] ${message}`)
  }

  public debug(message: string) {
    this.logger.debug(`[${this.pluginName}] ${message}`)
  }
}
