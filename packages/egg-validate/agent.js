const { RegisterEggPluginName, EggPluginBoot } = require('@142vip/egg')
const { createEggValidateInstance } = require('./core/validate')

class EggValidateAgentBoot extends EggPluginBoot {
  constructor(app) {
    super({
      pluginName: RegisterEggPluginName.EGG_VALIDATE,
      appOrAgent: app,
      createEggPluginInstance: createEggValidateInstance,
    })
  }
}

module.exports = EggValidateAgentBoot
