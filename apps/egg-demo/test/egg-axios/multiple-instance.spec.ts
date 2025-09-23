import { PluginLoadType } from '@142vip/egg'
import { EGG_SERVER_ENV } from '../plugin.config'
import { testVipAxios } from './egg.axios'

describe('网络请求测试 - 多实例 - axios1', () => {
  process.env.EGG_SERVER_ENV = EGG_SERVER_ENV.AXIOS_MULTIPLE
  testVipAxios(PluginLoadType.MULTIPLE, 'axios1')
})

describe('网络请求测试 - 多实例 - axios2', () => {
  process.env.EGG_SERVER_ENV = EGG_SERVER_ENV.AXIOS_MULTIPLE
  testVipAxios(PluginLoadType.MULTIPLE, 'axios2')
})
