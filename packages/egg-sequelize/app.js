const { RegisterEggPluginName, EggPluginBoot } = require('@142vip/egg')
const { createEggSequelizeInstance } = require('./core/sequelize')

class EggSequelizeAppBoot extends EggPluginBoot {
  constructor(app) {
    super({
      pluginName: RegisterEggPluginName.EGG_SEQUELIZE,
      appOrAgent: app,
      createEggPluginInstance: createEggSequelizeInstance,
    })
  }
}

module.exports = EggSequelizeAppBoot
