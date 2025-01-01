const { registerPlugin } = require('@142vip/egg')
const { RegisterEggPluginName } = require('@142vip/egg')
const { createRedisInstance } = require('./core/redis')

class EggRedisAgentBoot {
  constructor(agent) {
    this.agent = agent
  }

  // 所有文件已加载，此时可以启动插件。
  async didLoad() {
    // 所有文件已加载，此时可以启动插件。
    if (this.agent.config[RegisterEggPluginName.EGG_REDIS]) {
      registerPlugin(RegisterEggPluginName.EGG_REDIS, this.agent, createRedisInstance)
    }
  }
}

module.exports = EggRedisAgentBoot
