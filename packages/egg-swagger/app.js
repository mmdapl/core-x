const { RegisterEggPluginName, registerPlugin } = require('@142vip/egg')
const { createEggSwaggerInstance } = require('./core/swagger')

class EggSequelizeAppBoot {
  constructor(app) {
    this.app = app
  }

  // 所有文件已加载，此时可以启动插件。
  async didLoad() {
    if (this.app.config[RegisterEggPluginName.EGG_SWAGGER]) {
      registerPlugin(RegisterEggPluginName.EGG_SWAGGER, this.app, createEggSwaggerInstance)
    }
  }
}

module.exports = EggSequelizeAppBoot
