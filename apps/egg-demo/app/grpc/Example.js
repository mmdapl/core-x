const BaseGrpcService = require('@142vip/egg-grpc-server/core/base-grpc.service')

/**
 * 直接继承GrpcExampleService方法，用来演示
 * - 可以另外拓展
 */
class Example extends BaseGrpcService {
  async test() {
    const { ctx } = this
    console.log('test:', ctx.method)
  }

  // async ClientToServer(requestData) {
  //   console.log(11, this)
  //   const { app } = this
  //   console.log(123, app)
  //   console.log(123123, app.grpc)
  //   return await clientToServer(requestData)
  // }
}

module.exports = Example
