const { RegisterEggPluginName, registerPlugin } = require('@142vip/egg')
const { createEggSwaggerInstance } = require('./core/swagger')

class EggSwaggerAgentBoot {
  constructor(agent) {
    this.agent = agent
  }

  // 所有文件已加载，此时可以启动插件。
  async didLoad() {
    if (this.agent.config[RegisterEggPluginName.EGG_SWAGGER]) {
      registerPlugin(RegisterEggPluginName.EGG_SWAGGER, this.agent, createEggSwaggerInstance)
    }
  }
}

module.exports = EggSwaggerAgentBoot
