const { RegisterEggPluginName, EggPluginBoot } = require('@142vip/egg')
const { createEggSwaggerInstance } = require('./core/swagger')

class EggSwaggerAppBoot extends EggPluginBoot {
  constructor(app) {
    super({
      pluginName: RegisterEggPluginName.EGG_SWAGGER,
      appOrAgent: app,
      createEggPluginInstance: createEggSwaggerInstance,
    })
  }
}

module.exports = EggSwaggerAppBoot
