const { VipEggPluginLogger } = require('@142vip/egg')
const { name: pkgName } = require('../package.json')

function createEggGrpcServerInstance(config, app) {
  const pluginLogger = VipEggPluginLogger.getInstance(pkgName, app)
  try {
    pluginLogger.info(`GrpcServer create success , the name is ${config.name}`)
    return {}
  }
  catch (e) {
    pluginLogger.error(`GrpcServer create failed ，check egg-grpc-server config carefully ${e.message}`)
  }
}

module.exports = {
  createEggGrpcServerInstance,
}
