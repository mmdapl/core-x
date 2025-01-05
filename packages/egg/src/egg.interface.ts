export interface EggApp {
  config: EggConfig
  addSingleton: <T>(pluginName: string, createPluginInstance: CreatePluginInstance) => T
  coreLogger: EggCoreLogger
}

/**
 * 日志
 */
export interface EggCoreLogger {
  info: (msg: string, ...args: any[]) => void
  warn: (msg: string, ...args: any[]) => void
  error: (msg: string, ...args: any[]) => void
  debug: (msg: string, ...args: any[]) => void
}

/**
 * 插件实例
 */
export type CreatePluginInstance = <T>(config: PluginConfig, app: EggApp) => T

/**
 * 配置
 */
export interface EggConfig extends Record<string, any> {

  // 插件配置
  RegisterEggPluginName: PluginConfig
}

/**
 * 插件配置
 */
export interface PluginConfig {
  // 默认配置插件名
  pluginName: string

  [propName: string]: unknown
}
