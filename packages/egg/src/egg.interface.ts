import type { PluginConfig } from './plugin'

export interface EggApp {
  config: EggConfig
  addSingleton: <T>(pluginName: string, createPluginInstance: PluginCreateInstance) => T
  coreLogger: EggCoreLogger
  [pluginName: string]: unknown | EggPluginInstance<unknown>
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

export interface EggPluginInstance<T> {
  /**
   * 获取实例对象
   * @param name 实例名称
   * - 多实例，默认获取第一个实例
   * @returns 实例
   */
  getInstance: (name?: string) => T | undefined
  /**
   * 获取所有实例
   * - 默认实例和单实例，对象中对应Key为`default`
   * - 多实例，对象中对应Key为实例名称
   * @returns 所有实例配置key与实例对象组成的键值对
   */
  getInstances: () => Record<string, T>
  /**
   * 获取所有实例名称
   * - 默认实例和单实例，返回: ['default']
   * - 多实例，返回: 实例名称数组，例如: ['axios1','axios2']
   * @returns 所有实例名称
   */
  getInstanceNames: () => string[]
}

/**
 * 插件实例
 */
export type PluginCreateInstance = <I>(config: EggPluginConfig, app: EggApp) => EggPluginInstance<I>

/**
 * Egg 配置
 */
export interface EggConfig<C = any> extends Record<string, C> {

}
/**
 * Egg插件配置
 */
export interface EggPluginConfig extends PluginConfig {}
