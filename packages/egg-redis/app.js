const { RegisterEggPluginName, EggPluginBoot } = require('@142vip/egg')
const { createRedisInstance } = require('./core/redis')

class EggRedisAppBoot extends EggPluginBoot {
  constructor(app) {
    super({
      pluginName: RegisterEggPluginName.EGG_REDIS,
      appOrAgent: app,
      createEggPluginInstance: createRedisInstance,
    })
  }
}

module.exports = EggRedisAppBoot
