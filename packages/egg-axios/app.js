const { registerPlugin, RegisterEggPluginName } = require('@142vip/egg')
const { createEggAxiosInstance } = require('./core/axios')

class EggAgentAppBoot {
  constructor(app) {
    this.app = app
  }

  // 所有文件已加载，此时可以启动插件。
  async didLoad() {
    if (this.app.config[RegisterEggPluginName.EGG_AXIOS]) {
      registerPlugin(RegisterEggPluginName.EGG_AXIOS, this.app, createEggAxiosInstance)
    }
  }
}

module.exports = EggAgentAppBoot
