import { expect } from '@jest/globals'
import { app } from 'egg-mock/bootstrap'
import { defaultEggMysqlPluginConfig, EGG_SERVER_ENV } from '../plugin.config'

/**
 * @142vip/egg-mysql 测试
 */
describe('默认环境加载插件配置', () => {
  process.env.EGG_SERVER_ENV = EGG_SERVER_ENV.MYSQL

  it('环境变量初始化测试', () => {
    expect(app.config.env).toBe('default')
    expect(process.env.EGG_SERVER_ENV).toBe(EGG_SERVER_ENV.MYSQL)
  })

  it('插件默认配置测试', () => {
    const config = app.config.mysql
    expect(config).toBeDefined()
    expect(config).toEqual(defaultEggMysqlPluginConfig)
  })
})
