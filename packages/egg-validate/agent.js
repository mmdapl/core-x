const { RegisterEggPluginName, registerPlugin } = require('@142vip/egg')
const { createEggValidateInstance } = require('./core/validate')

class EggValidateAgentBoot {
  constructor(agent) {
    this.agent = agent
  }

  // 所有文件已加载，此时可以启动插件。
  async didLoad() {
    if (this.agent.config[RegisterEggPluginName.EGG_VALIDATE]) {
      registerPlugin(RegisterEggPluginName.EGG_VALIDATE, this.agent, createEggValidateInstance)
    }
  }
}

module.exports = EggValidateAgentBoot
