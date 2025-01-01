const { VipEggPluginLogger } = require('@142vip/egg')
const { name: pkgName } = require('../package.json')
/**
 * 初始化Sequelize
 * @param config
 * @param app
 */
function createEggSequelizeInstance(config, app) {
  const pluginLogger = VipEggPluginLogger.getInstance(pkgName, app)

  pluginLogger.info('plugin init')
}

module.exports = {
  createEggSequelizeInstance,
}
