import type { OptionsSync } from 'cosmiconfig/dist/types'
import { cosmiconfigSync } from 'cosmiconfig'
import { VipLodash } from './lodash'

/**
 * 配置加载
 */
export class VipConfig {
  /**
   * 加载配置
   * - 本地配置，形如：xxx.config.ts
   * - 包配置，package.json中的xxx字段
   */
  public loadCliConfig<T>(configName: string, defaultValue: any, cosmiconfigOptions?: Partial<OptionsSync>): T {
    const cliConfig = this.loadConfig(configName, cosmiconfigOptions)
    if (cliConfig == null) {
      return defaultValue
    }
    return VipLodash.merge({}, defaultValue, cliConfig) as T
  }

  /**
   * 加载cli配置
   * @param configName
   * @param cosmiconfigOptions
   */
  public loadConfig<T>(configName: string, cosmiconfigOptions?: Partial<OptionsSync>): T | undefined {
    const explorerSync = cosmiconfigSync(configName, cosmiconfigOptions)

    const result = explorerSync.search()
    if (result == null || result.isEmpty) {
      return undefined
    }

    return result.config as T
  }

  /**
   * 合并配置
   * @param cliConfig cli自定义配置
   * @param commanderConfig 用户在cli终端输入的配置
   */
  public mergeCommanderConfig<T>(cliConfig: Partial<T>, commanderConfig: Partial<T>): T {
    return VipLodash.merge({}, cliConfig, commanderConfig) as T
  }
}

export const vipConfig = new VipConfig()
