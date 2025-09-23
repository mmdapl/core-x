import { describe, expect, it } from '@jest/globals'
import { app } from 'egg-mock/bootstrap'
import { EGG_SERVER_ENV, PluginInstanceName } from '../plugin.config'

/**
 * @142vip/egg-axios 测试
 */
describe('默认环境加载插件配置 - @142vip/egg-axios', () => {
  process.env.EGG_SERVER_ENV = EGG_SERVER_ENV.DEFAULT

  it('环境变量初始化测试', () => {
    expect(app.config.env).toBe(PluginInstanceName.DEFAULT)
    expect(process.env.EGG_SERVER_ENV).toBe(EGG_SERVER_ENV.DEFAULT)
  })

  it('插件默认配置测试', () => {
    const config = app.config
    expect(config).toBeDefined()
  })
})
