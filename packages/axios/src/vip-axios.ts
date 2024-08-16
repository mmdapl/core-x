import type { CreateAxiosDefaults } from 'axios'
import axios from 'axios'

/**
 * 创建axios实例
 * @param config
 */
export function getInstance(config?: CreateAxiosDefaults) {
  return axios.create(config)
}
