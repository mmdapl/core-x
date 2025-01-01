const { RegisterEggPluginName, registerPlugin } = require('@142vip/egg')
const { createEggValidateInstance } = require('./core/validate')

class EggValidateAppBoot {
  constructor(app) {
    this.app = app
  }

  // 所有文件已加载，此时可以启动插件。
  async didLoad() {
    if (this.app.config[RegisterEggPluginName.EGG_VALIDATE]) {
      registerPlugin(RegisterEggPluginName.EGG_VALIDATE, this.app, createEggValidateInstance)
    }
  }
}

module.exports = EggValidateAppBoot
