const { registerPlugin, RegisterEggPluginName } = require('@142vip/egg')
const { createEggGrpcClientInstance } = require('./core/grpc-client')

class EggGrpcClientAgentBoot {
  constructor(agent) {
    this.agent = agent
  }

  // 所有文件已加载，此时可以启动插件。
  async didLoad() {
    if (this.agent.config[RegisterEggPluginName.EGG_GRPC_CLIENT]) {
      registerPlugin(RegisterEggPluginName.EGG_GRPC_CLIENT, this.agent, createEggGrpcClientInstance)
    }
  }
}

module.exports = EggGrpcClientAgentBoot
