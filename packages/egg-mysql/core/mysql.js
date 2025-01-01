const { VipEggPluginLogger } = require('@142vip/egg')
const mysql = require('mysql2/promise')
const { name: pkgName } = require('../package.json')
const { createDataBase } = require('./database')

async function creatPool(config) {
  await createDataBase(config)

  const pool = mysql.createPool({
    host: config.host,
    port: config.port,
    user: config.userName,
    password: config.password,
    database: config.database,
    waitForConnections: true,
    connectionLimit: 10,
    maxIdle: 10, // 最大空闲连接数，默认等于 `connectionLimit`
    idleTimeout: 60000, // 空闲连接超时，以毫秒为单位，默认值为 60000 ms
    queueLimit: 0,
    enableKeepAlive: true,
    keepAliveInitialDelay: 0,
  })

  return pool.promise()
}

/**
 * 创建MySQL实例
 */
function createMysqlInstance(config, app) {
  const pluginLogger = VipEggPluginLogger.getInstance(pkgName, app)

  try {
    const client = creatPool(config)
    pluginLogger.info(`DataBase create success , the name is ${config.database}`)
    return client
  }
  catch (e) {
    pluginLogger.error(`DataBase create failed ，check egg-sequelize-plus config carefully ${e.message}`)
  }
}

module.exports = {
  createMysqlInstance,
}
