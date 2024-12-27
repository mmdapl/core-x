const { registerPlugin } = require('@142vip/egg')
const { createMysqlInstance } = require('./core/mysql')

class EggMysqlAppBoot {
  constructor(app) {
    this.app = app
  }

  configWillLoad() {
    // 预备调用 configDidLoad，
    // Config 和 plugin 文件已被引用，
    // 这是修改配置的最后机会。
    console.log(this.app)
  }

  configDidLoad() {
    // Config 和 plugin 文件已加载。
  }

  async didLoad() {
    // 所有文件已加载，此时可以启动插件。
    if (this.app.config.mysql) {
      console.log(111, this.app.config.mysql)
      registerPlugin('mysql', this.app, createMysqlInstance)
    }
  }

  async willReady() {
    // 所有插件已启动，这里可以执行一些在应用准备好之前的操作。
  }

  async didReady() {
    // Worker 已准备好，可以执行一些不会阻塞应用启动的操作。
  }

  async serverDidReady() {
    // 服务器已监听。
  }

  async beforeClose() {
    // 应用关闭前执行的操作。
  }
}

module.exports = EggMysqlAppBoot
