const { RegisterEggPluginName, EggPluginBoot } = require('@142vip/egg')
const { createEggSwaggerInstance } = require('./core/swagger')

class EggSwaggerAgentBoot extends EggPluginBoot {
  constructor(agent) {
    super({
      pluginName: RegisterEggPluginName.EGG_SWAGGER,
      appOrAgent: agent,
      createEggPluginInstance: createEggSwaggerInstance,
    })
  }
}

module.exports = EggSwaggerAgentBoot
