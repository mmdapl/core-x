/**
 * 基础的Grpc服务类，所有的Grpc服务继承这个类实现
 */
class BaseGrpcService {
  constructor(app) {
    this.app = app
    this.ctx = app.createAnonymousContext()
    // app.config
    this.config = app.config
  }
}

module.exports = BaseGrpcService
