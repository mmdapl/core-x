const { registerPlugin, RegisterEggPluginName } = require('@142vip/egg')
const { createEggGrpcServerInstance } = require('./core/grpc-server')

class EggGrpcServerAgentBoot {
  constructor(agent) {
    this.agent = agent
  }

  // 所有文件已加载，此时可以启动插件。
  async didLoad() {
    if (this.agent.config[RegisterEggPluginName.EGG_GRPC_SERVER]) {
      registerPlugin(RegisterEggPluginName.EGG_GRPC_SERVER, this.agent, createEggGrpcServerInstance)
    }
  }
}

module.exports = EggGrpcServerAgentBoot
