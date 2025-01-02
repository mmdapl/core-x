const {
  registerPlugin,
  RegisterEggPluginName,
  EggAppBoot,
  PluginLoader,
} = require('@142vip/egg')
const { createRedisInstance } = require('./core/redis')

class EggRedisAgentBoot extends EggAppBoot {
  constructor(agent) {
    super(agent, RegisterEggPluginName.EGG_REDIS)
    this.agent = agent
  }

  // 所有文件已加载，此时可以启动插件。
  async didLoad() {
    if (this.loaderPlugin(PluginLoader.AGENT)) {
      registerPlugin(RegisterEggPluginName.EGG_REDIS, this.agent, createRedisInstance)
    }
  }
}

module.exports = EggRedisAgentBoot
