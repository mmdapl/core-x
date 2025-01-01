const { VipEggPluginLogger } = require('@142vip/egg')
const { name: pkgName } = require('../package.json')

function createEggGrpcClientInstance(config, app) {
  const pluginLogger = VipEggPluginLogger.getInstance(pkgName, app)

  pluginLogger.info('plugin init')
}

module.exports = {
  createEggGrpcClientInstance,
}
