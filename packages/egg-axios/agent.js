const { registerPlugin } = require('@142vip/egg')
const { createEggAxiosInstance } = require('./core/axios')

class EggAxiosAgentBoot {
  constructor(agent) {
    this.agent = agent
  }

  // 所有文件已加载，此时可以启动插件。
  async didLoad() {
    if (this.agent.config.axios) {
      registerPlugin('axios', this.agent, createEggAxiosInstance)
    }
  }
}

module.exports = EggAxiosAgentBoot
