const { RegisterEggPluginName, EggPluginBoot } = require('@142vip/egg')
const { createEggMysqlInstance } = require('./core/mysql')

class EggMysqlAppBoot extends EggPluginBoot {
  constructor(app) {
    super({
      pluginName: RegisterEggPluginName.EGG_MYSQL,
      appOrAgent: app,
      createEggPluginInstance: createEggMysqlInstance,
    })
  }
}

module.exports = EggMysqlAppBoot
