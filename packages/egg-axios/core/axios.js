const { VipEggPluginLogger } = require('@142vip/egg')
const axios = require('axios')
const { VipLodash } = require('@142vip/utils')
const { name: pkgName } = require('../package.json')
const {
  responseInterceptorsHandler,
  requestInterceptorsHandler,
} = require('./interceptors')

function createEggAxiosInstance(config, app) {
  const pluginLogger = VipEggPluginLogger.getInstance(pkgName, app)

  // 默认配置
  const defaultConfig = {
    headers: {
      common: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    },
    // default 5 seconds timeout
    timeout: 5000,
  }
  // 获取插件用户自定义配置
  const userAxiosConfig = app.config.axios

  // axios对象初始化配置合并
  axios.defaults = VipLodash.merge(axios.defaults, defaultConfig, userAxiosConfig)
  pluginLogger.debug(`default configs: ${JSON.stringify(axios.defaults)}`)

  //  添加请求拦截器
  axios.interceptors.request.use(
    userAxiosConfig.requestInterceptorsHandler ?? requestInterceptorsHandler,
    (error) => {
      pluginLogger.error(`send request error in interceptors, ${error.message}`)
      return Promise.reject(error)
    },
  )

  // 响应拦截器
  axios.interceptors.response.use(
    config.responseInterceptorsHandler ?? responseInterceptorsHandler,
    (error) => {
      pluginLogger.error(`receive response error in interceptors, ${error.message}`)
      return Promise.reject(error)
    },
  )

  return axios
}
module.exports = {
  createEggAxiosInstance,
}
