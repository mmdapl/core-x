const { registerPlugin, RegisterEggPluginName } = require('@142vip/egg')
const { createEggGrpcServerInstance } = require('./core/grpc-server')

class EggGrpcServerAppBoot {
  constructor(app) {
    this.app = app
  }

  // 所有文件已加载，此时可以启动插件。
  async didLoad() {
    if (this.app.config[RegisterEggPluginName.EGG_GRPC_SERVER]) {
      registerPlugin(RegisterEggPluginName.EGG_GRPC_SERVER, this.app, createEggGrpcServerInstance)
    }
  }
}

module.exports = EggGrpcServerAppBoot
