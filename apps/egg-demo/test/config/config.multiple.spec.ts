import { describe, expect, it } from '@jest/globals'
import { app } from 'egg-mock/bootstrap'
import { axiosMultipleConfig } from '../egg-axios/egg.axios'
import { EGG_SERVER_ENV, PluginInstanceName } from '../plugin.config'

/**
 * 多实例配置测试 - 实例的配置与插件的配置相等
 */
describe('多实例配置测试 - @142vip/egg-axios', () => {
  process.env.EGG_SERVER_ENV = EGG_SERVER_ENV.AXIOS_MULTIPLE

  it('环境变量初始化测试', () => {
    expect(process.env.EGG_SERVER_ENV).toBe(EGG_SERVER_ENV.AXIOS_MULTIPLE)
  })

  it('实例的配置与插件的配置相等', async () => {
    const instanceNames = await app.axios.getInstanceNames()
    expect(instanceNames).toEqual([PluginInstanceName.EXAMPLE1, PluginInstanceName.EXAMPLE2])
    const vipAxios1 = await app.axios.getInstance(PluginInstanceName.EXAMPLE1)
    const vipAxios2 = await app.axios.getInstance(PluginInstanceName.EXAMPLE2)

    // axios实例的配置
    const instanceConfig1 = vipAxios1.getConfig()
    const instanceConfig2 = vipAxios2.getConfig()

    expect(instanceConfig1).not.toEqual(instanceConfig2)

    expect(instanceConfig1.instanceName).toBe(PluginInstanceName.EXAMPLE1)
    expect(instanceConfig2.instanceName).toBe(PluginInstanceName.EXAMPLE2)

    // 比较timeout字段
    expect(instanceConfig1.timeout).toEqual(axiosMultipleConfig.clients[PluginInstanceName.EXAMPLE1].timeout)
    expect(instanceConfig2.timeout).toEqual(axiosMultipleConfig.clients[PluginInstanceName.EXAMPLE2].timeout)
  })
})
