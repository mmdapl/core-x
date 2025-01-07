import type { AxiosInstance, CreateAxiosDefaults } from 'axios'
import { VipAxios } from './vip-axios'

export * from './interceptors'
export * from './vip-axios'

/**
 * 创建axios实例
 * @param config
 */
export function createAxiosInstance(config: CreateAxiosDefaults): AxiosInstance {
  const vipAxios = VipAxios.getInstance(config)
  return vipAxios.getAxios()
}
