const { VipEggPluginLogger } = require('@142vip/egg')

function createEggGrpcClientInstance(pluginConfig, app) {
  const pluginLogger = VipEggPluginLogger.getInstance(pluginConfig, app)

  pluginLogger.info('plugin init')
}

module.exports = {
  createEggGrpcClientInstance,
}
