const { registerPlugin, RegisterEggPluginName } = require('@142vip/egg')
const { PluginLoader } = require('@142vip/egg')
const { createRedisInstance } = require('./core/redis')

class EggRedisAppBoot {
  constructor(app) {
    this.app = app
  }

  // 所有文件已加载，此时可以启动插件。
  async didLoad() {
    const { loader } = this.app.config[RegisterEggPluginName.EGG_REDIS]
    if (loader.includes(PluginLoader.APP)) {
      registerPlugin(RegisterEggPluginName.EGG_REDIS, this.app, createRedisInstance)
    }
  }
}

module.exports = EggRedisAppBoot
