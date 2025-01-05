const { RegisterEggPluginName, EggPluginBoot } = require('@142vip/egg')
const { createEggAxiosInstance } = require('./core/axios')

class EggAxiosAgentBoot extends EggPluginBoot {
  constructor(agent) {
    super({
      pluginName: RegisterEggPluginName.EGG_AXIOS,
      appOrAgent: agent,
      createEggPluginInstance: createEggAxiosInstance,
    })
  }
}

module.exports = EggAxiosAgentBoot
