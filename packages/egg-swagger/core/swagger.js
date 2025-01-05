const { VipEggPluginLogger } = require('@142vip/egg')

function createEggSwaggerInstance(pluginConfig, app) {
  const pluginLogger = VipEggPluginLogger.getInstance(pluginConfig, app)

  pluginLogger.info('plugin init')
}

module.exports = {
  createEggSwaggerInstance,
}
