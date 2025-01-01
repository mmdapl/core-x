const { RegisterEggPluginName, registerPlugin } = require('@142vip/egg')
const { createEggSequelizeInstance } = require('./core/sequelize')

class EggSequelizeAgentBoot {
  constructor(app) {
    this.app = app
  }

  // 所有文件已加载，此时可以启动插件。
  async didLoad() {
    if (this.app.config[RegisterEggPluginName.EGG_SEQUELIZE]) {
      registerPlugin(RegisterEggPluginName.EGG_SEQUELIZE, this.app, createEggSequelizeInstance)
    }
  }
}

module.exports = EggSequelizeAgentBoot
