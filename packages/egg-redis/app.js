const {
  registerPlugin,
  RegisterEggPluginName,
  EggAppBoot,
  PluginLoader,
} = require('@142vip/egg')
const { createRedisInstance } = require('./core/redis')

class EggRedisAppBoot extends EggAppBoot {
  constructor(app) {
    super(app, RegisterEggPluginName.EGG_REDIS)
    this.app = app
  }

  // 所有文件已加载，此时可以启动插件。
  async didLoad() {
    if (this.loaderPlugin(PluginLoader.APP)) {
      registerPlugin(RegisterEggPluginName.EGG_REDIS, this.app, createRedisInstance)
    }
  }
}

module.exports = EggRedisAppBoot
