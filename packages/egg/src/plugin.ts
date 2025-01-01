type CreateInstance = (config: any, app: EggApp) => any
type EggConfig = Record<string, any>

interface EggApp {
  config: EggConfig
  addSingleton: (pluginName: string, createInstance: CreateInstance) => void
}

/**
 * 注册的Egg插件key
 */
export enum RegisterEggPluginName {
  EGG_AXIOS = 'axios',
  EGG_MYSQL = 'mysql',
  EGG_REDIS = 'redis',
  EGG_SEQUELIZE = 'sequelize',
  EGG_RABBIT = 'rabbit',
  EGG_VALIDATE = 'validate',
  EGG_SWAGGER = 'swagger',
  EGG_GRPC_CLIENT = 'grpcClient',
  EGG_GRPC_SERVER = 'grpcServer',
}

/**
 * 插件注册
 * @param name
 * @param app
 * @param createInstance
 */
export function registerPlugin(name: RegisterEggPluginName, app: EggApp, createInstance: CreateInstance) {
  // 配置 agent 或者 app 才加载单例
  if (app.config[name] != null) {
    app.addSingleton(name, createInstance)
  }
}

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
