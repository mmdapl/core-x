const { VipEggPluginLogger, SequelizeORM } = require('@142vip/egg')
// 最大重试次数
const Max_Retry_Count = 3

/**
 * 初始化Sequelize
 */
async function createEggSequelizeInstance(pluginConfig, app) {
  const pluginLogger = VipEggPluginLogger.getInstance(pluginConfig, app)

  const sequelizeORM = new SequelizeORM(pluginConfig)
  const sequelize = sequelizeORM.getConnect()

  // 判断是否连接
  try {
    await authenticateRetry(sequelize, Max_Retry_Count)
    pluginLogger.info('连接成功！！！')
  }
  catch (error) {
    pluginLogger.error(error)
  }

  /**
   * 连接重试
   */
  async function authenticateRetry(sequelizeConnect, Max_Retry_Count) {
    try {
      await sequelizeConnect.authenticate()
      pluginLogger.info('plugin init')
    }
    catch (e) {
      // 过滤掉sequelize报错
      if (e.name !== 'SequelizeConnectionRefusedError')
        throw e

      // 超过重试次数
      if (Max_Retry_Count < 0) {
        throw e
      }

      pluginLogger.warn(`Sequelize Error: ${e.message}, sleep 2 seconds to retry...`)
      pluginLogger.info('plugin init')
      await authenticateRetry(sequelizeConnect, --Max_Retry_Count)
    }
  }

  // todo 基于Sequelize对象，自动加载entity

  return sequelize
}

module.exports = {
  createEggSequelizeInstance,
}
