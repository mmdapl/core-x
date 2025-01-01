const { registerPlugin } = require('@142vip/egg')
const { RegisterEggPluginName } = require('@142vip/egg')
const { createMysqlInstance } = require('./core/mysql')

/**
 * agent启动器
 */
class EggMysqlAgentBoot {
  constructor(agent) {
    this.agent = agent
  }

  configWillLoad() {
    console.log(this.agent)
  }

  configDidLoad() {
  }

  async didLoad() {
    // 所有文件已加载，此时可以启动插件。
    if (this.agent.config[RegisterEggPluginName.EGG_MYSQL]) {
      registerPlugin(RegisterEggPluginName.EGG_MYSQL, this.agent, createMysqlInstance)
    }
  }
}

module.exports = EggMysqlAgentBoot
