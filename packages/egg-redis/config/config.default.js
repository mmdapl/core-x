const { PluginLoader } = require('@142vip/egg/src')
const { name: pluginName } = require('../package.json')

module.exports = {
  redis: {
    default: {
      pluginName,
      // 默认redis简单模式，同时支持单例、集群、哨兵模式
      mode: 'default',
    },
    // 可选，支持自定义Redis模块
    Redis: require('ioredis'),
    app: true,
    agent: false,
    loader: PluginLoader.APP,
  },
}

/**
 * 简单模式
 */
module.exports = {
  redis: {
    port: 6379, // Redis port
    host: '127.0.0.1', // Redis host
    username: 'default', // needs Redis >= 6
    password: 'my-top-secret', // 支持无密码
    db: 0, // Defaults to 0
  },
}

/**
 * 哨兵模式
 */
module.exports = {
  redis: {
    mode: 'sentinels',
    // 必选
    nodes: [
      { host: 'localhost', port: 26379 },
      { host: 'localhost', port: 26380 },
    ],
    // 可选
    options: {

    },
  },
}

/**
 * 集群模式配置
 */
module.exports = {
  redis: {
    mode: 'cluster',
    nodes: [
      {
        port: 6380,
        host: '127.0.0.1',
      },
      {
        port: 6381,
        host: '127.0.0.1',
      },
    ],
    // 可选，集群连接配置
    options: {

    },
  },
}
