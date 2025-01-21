import type { AxiosInstance, CreateAxiosDefaults } from 'axios'
import axios from 'axios'
import { InterceptorType } from './interceptors'

/**
 * axios
 * - 参考：https://www.npmjs.com/package/axios#features
 */
export class VipAxios {
  public static vipAxios: VipAxios
  private readonly config: CreateAxiosDefaults
  private readonly axiosInstance: AxiosInstance

  constructor(config: CreateAxiosDefaults) {
    this.config = config
    this.axiosInstance = axios.create(config)
  }

  /**
   * 创建单例
   */
  public static getInstance(config: CreateAxiosDefaults): VipAxios {
    if (this.vipAxios == null) {
      this.vipAxios = new VipAxios(config)
    }
    return this.vipAxios
  }

  /**
   * 获取axios实例
   */
  public getAxios(): AxiosInstance {
    return this.axiosInstance
  }

  /**
   * 获取配置
   */
  public getAxiosConfig(): CreateAxiosDefaults {
    return this.config
  }

  /**
   * 清除拦截器
   */
  public clearInterceptor(type: InterceptorType): void {
    // 移除请求拦截器
    if (type === InterceptorType.REQUEST) {
      this.axiosInstance.interceptors.request.clear()
    }
    // 移除响应拦截器
    if (type === InterceptorType.RESPONSE) {
      this.axiosInstance.interceptors.response.clear()
    }
  }
}
