const { RegisterEggPluginName, EggPluginBoot } = require('@142vip/egg')
const { createEggGrpcServerInstance } = require('./core/grpc-server')

class EggGrpcServerAppBoot extends EggPluginBoot {
  constructor(app) {
    super({
      pluginName: RegisterEggPluginName.EGG_GRPC_SERVER,
      appOrAgent: app,
      createEggPluginInstance: createEggGrpcServerInstance,
    })
  }
}

module.exports = EggGrpcServerAppBoot
