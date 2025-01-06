const { defaultPluginConfig } = require('@142vip/egg')
const { name: pkgName } = require('../package.json')

module.exports = {
  swagger: defaultPluginConfig(pkgName, {
    default: {

    },
    client: {

    },
  }),
}
