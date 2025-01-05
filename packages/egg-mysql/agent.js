const { RegisterEggPluginName, EggPluginBoot } = require('@142vip/egg')
const { createEggMysqlInstance } = require('./core/mysql')

/**
 * agent启动器
 */
class EggMysqlAgentBoot extends EggPluginBoot {
  constructor(agent) {
    super({
      pluginName: RegisterEggPluginName.EGG_MYSQL,
      appOrAgent: agent,
      createEggPluginInstance: createEggMysqlInstance,
    })
  }
}

module.exports = EggMysqlAgentBoot
