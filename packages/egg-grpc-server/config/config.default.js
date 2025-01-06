const { defaultPluginConfig } = require('@142vip/egg')
const { name: pkgName } = require('../package.json')

module.exports = {
  grpcServer: defaultPluginConfig(pkgName, {
    default: {

    },
    client: {

    },
  }),
}
