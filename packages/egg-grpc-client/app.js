const { RegisterEggPluginName, EggPluginBoot } = require('@142vip/egg')
const { createEggGrpcClientInstance } = require('./core/grpc-client')

class EggGrpcClientAppBoot extends EggPluginBoot {
  constructor(agent) {
    super({
      pluginName: RegisterEggPluginName.EGG_GRPC_CLIENT,
      appOrAgent: agent,
      createEggPluginInstance: createEggGrpcClientInstance,
    })
  }
}

module.exports = EggGrpcClientAppBoot
