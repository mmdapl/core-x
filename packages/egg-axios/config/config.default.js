const { defaultPluginConfig } = require('@142vip/egg')
const { name: pkgName } = require('../package.json')
const { requestInterceptorsHandler, responseInterceptorsHandler } = require('../core/interceptors')

module.exports = {
  axios: defaultPluginConfig(pkgName, {
    default: {
      requestInterceptorsHandler,
      responseInterceptorsHandler,
      timeout: 5 * 1000,
    },
    client: {

    },
  }),
}
