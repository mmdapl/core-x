const { defaultPluginConfig } = require('@142vip/egg')
const { name: pkgName } = require('../package.json')

module.exports = {
  grpcClient: defaultPluginConfig(pkgName, {
    default: {

    },
    client: {

    },
  }),
}
