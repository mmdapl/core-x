const { VipEggPluginLogger } = require('@142vip/egg')
const { name: pkgName } = require('../package.json')

function createEggSwaggerInstance(config, app) {
  const pluginLogger = VipEggPluginLogger.getInstance(pkgName, app)

  pluginLogger.info('plugin init')
}

module.exports = {
  createEggSwaggerInstance,
}
