const { VipEggPluginLogger } = require('@142vip/egg')
/**
 * 初始化Sequelize
 */
function createEggSequelizeInstance(pluginConfig, app) {
  const pluginLogger = VipEggPluginLogger.getInstance(pluginConfig, app)

  pluginLogger.info('plugin init')
}

module.exports = {
  createEggSequelizeInstance,
}
