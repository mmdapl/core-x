import type { PluginConfig } from './plugin'
import { VipLodash } from '@142vip/utils'

/**
 * 合并配置
 * @param defaultConfig
 * @param pluginConfig
 */
export function mergeConfig<T extends PluginConfig>(defaultConfig: T, pluginConfig: T): T {
  return VipLodash.merge(defaultConfig, pluginConfig)
}
