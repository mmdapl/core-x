import type { EggApp, EggCoreLogger, PluginConfig } from '../egg.interface'

/**
 * egg插件日志
 */
export class VipEggPluginLogger {
  public static instance: VipEggPluginLogger
  private readonly logger: EggCoreLogger
  private readonly pluginName: string

  constructor(pluginConfig: PluginConfig, app: EggApp) {
    this.logger = app.coreLogger
    this.pluginName = pluginConfig.pluginName
  }

  /**
   * 单例对象
   */
  public static getInstance(pluginConfig: PluginConfig, app: EggApp): VipEggPluginLogger {
    if (this.instance == null) {
      this.instance = new VipEggPluginLogger(pluginConfig, app)
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
