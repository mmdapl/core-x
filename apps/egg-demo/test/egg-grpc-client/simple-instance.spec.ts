import { app } from 'egg-mock/bootstrap'
import { EGG_SERVER_ENV } from '../plugin.config'

describe('@142vip/egg-grpc-client 测试 - 单实例 - default', () => {
  process.env.EGG_SERVER_ENV = EGG_SERVER_ENV.GRPC_CLIENT

  it('12312', () => {
    console.log(111, app.config)
    console.log('grpcClient', app)
    const aa = app.grpcClient.getInstanceNames()
    console.log(111, aa)
  })
})
