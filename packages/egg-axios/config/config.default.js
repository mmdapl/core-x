const { defaultPluginConfig } = require('@142vip/egg')
const { defaultRequestInterceptor, defaultResponseInterceptor } = require('@142vip/axios')
const { name: pkgName } = require('../package.json')

module.exports = {
  axios: defaultPluginConfig(pkgName, {
    default: {
      requestInterceptorsHandler: defaultRequestInterceptor,
      responseInterceptorsHandler: defaultResponseInterceptor,
      timeout: 5 * 1000,
    },
    client: {

    },
  }),
}
