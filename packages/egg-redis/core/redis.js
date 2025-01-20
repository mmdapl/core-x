const assert = require('node:assert')
const { VipEggPluginLogger, RedisMode } = require('@142vip/egg')

/**
 * 参考：https://www.npmjs.com/package/ioredis
 */
class EggRedis {
  constructor(config, app) {
    this.config = config
    this.app = app
    this.pluginLogger = VipEggPluginLogger.getInstance(config.pluginName, app)
    this.RedisClass = config.Redis ?? require('ioredis')
  }

  static getInstance(pluginConfig, app) {
    if (!EggRedis.instance) {
      EggRedis.instance = new EggRedis(pluginConfig, app)._createClient()
    }
    return EggRedis.instance
  }

  _createClient() {
    this.pluginLogger.log('plugin init successful!')

    let redisClient
    // 集群模式
    if (this.config.mode === RedisMode.CLUSTER) {
      redisClient = this.addCluster()
    }
    else if (this.config.mode === RedisMode.SENTINEL) {
      redisClient = this.addSentinel()
    }
    else {
      redisClient = this.addStandalone()
    }

    /**
     * 监听redis事件
     */

    redisClient.on('connect', () => {
      this.pluginLogger.log('client connect success')
    })
    redisClient.on('error', (err) => {
      this.pluginLogger.error('client error: %s', err)
      this.pluginLogger.error(err)
    })

    return redisClient
  }

  // 单例
  addStandalone() {
    const config = this.config
    assert((config.host && config.port && config.password !== undefined && config.db !== undefined) || config.path, `'host: ${config.host}', 'port: ${config.port}', 'password: ${config.password}', 'db: ${config.db}' or 'path:${config.path}' are required on config`)
    if (config.host) {
      this.pluginLogger.log('server connecting redis://:***@%s:%s/%s', config.host, config.port, config.db)
    }
    else {
      this.pluginLogger.log('server connecting %s start', config.path || config)
    }

    return new this.RedisClass(config)
  }

  /**
   * 哨兵模式
   */
  addSentinel() {
    const sentinelsOptions = this.config.sentinels

    assert(sentinelsOptions && sentinelsOptions.length !== 0, 'sentinels configuration is required when use redis sentinel')

    sentinelsOptions.forEach((sentinel) => {
      assert(sentinel.host && sentinel.port, `'host: ${sentinel.host}', 'port: ${sentinel.port}' are required on config`)
    })

    // assert(config.name && config.password !== undefined && config.db !== undefined, `'name of master: ${config.name}', 'password: ${config.password}', 'db: ${config.db}' are required on config`)

    this.pluginLogger.log('sentinel connecting start')

    return new this.RedisClass({
      sentinels: sentinelsOptions,
      ...this.config,
    })
  }

  /**
   * 集群
   */
  addCluster() {
    const clusterNodes = this.config.nodes
    const clusterOptions = this.config

    clusterNodes.forEach((client) => {
      assert(client.host && client.port, `'host: ${client.host}', 'port: ${client.port}' are required on config`)
    })
    this.pluginLogger.log('cluster connecting start')

    return new this.RedisClass.Cluster(clusterNodes, clusterOptions)
  }
}

/**
 * 创建redis实例
 * @param pluginConfig
 * @param app
 */
function createRedisInstance(pluginConfig, app) {
  const pluginLogger = VipEggPluginLogger.getInstance(pluginConfig, app)
  try {
    const client = EggRedis.getInstance(pluginConfig, app)
    pluginLogger.log(``)
    return client
  }

  catch (e) {
    pluginLogger.error(`dataBase create failed,check config carefully!!!!`)
    pluginLogger.error(e.message)
  }
}

module.exports = {
  createRedisInstance,
}
