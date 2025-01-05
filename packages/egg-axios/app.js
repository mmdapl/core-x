const { RegisterEggPluginName, EggPluginBoot } = require('@142vip/egg')
const { createEggAxiosInstance } = require('./core/axios')

class EggAxiosAgentBoot extends EggPluginBoot {
  constructor(app) {
    super({
      pluginName: RegisterEggPluginName.EGG_AXIOS,
      appOrAgent: app,
      createEggPluginInstance: createEggAxiosInstance,
    })
  }
}

module.exports = EggAxiosAgentBoot
