const { RegisterEggPluginName, EggPluginBoot } = require('@142vip/egg')
const { createRedisInstance } = require('./core/redis')

class EggRedisAgentBoot extends EggPluginBoot {
  constructor(agent) {
    super({
      pluginName: RegisterEggPluginName.EGG_REDIS,
      appOrAgent: agent,
      createEggPluginInstance: createRedisInstance,
    })
  }
}

module.exports = EggRedisAgentBoot
