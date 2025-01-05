const { VipEggPluginLogger } = require('@142vip/egg')

function createEggGrpcServerInstance(pluginConfig, app) {
  const pluginLogger = VipEggPluginLogger.getInstance(pluginConfig, app)
  try {
    pluginLogger.info(`GrpcServer create success , the name is ${pluginConfig.name}`)
    return {}
  }
  catch (e) {
    pluginLogger.error(`GrpcServer create failed ，check egg-grpc-server config carefully ${e.message}`)
  }
}

module.exports = {
  createEggGrpcServerInstance,
}
