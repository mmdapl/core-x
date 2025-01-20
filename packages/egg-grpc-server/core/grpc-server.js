const { VipEggPluginLogger } = require('@142vip/egg')
const { GrpcServer, ProtoLoader } = require('@142vip/grpc')

async function createEggGrpcServerInstance(pluginConfig, app) {
  const pluginLogger = VipEggPluginLogger.getInstance(pluginConfig, app)

  const grpcServer = GrpcServer.getInstance()
  const { connectUri, protoPaths, loaderOptions } = pluginConfig
  try {
    pluginLogger.log(`GrpcServer create success , the name is ${pluginConfig.name}`)

    for (const protoPath of protoPaths) {
      const protoLoader = ProtoLoader.getInstance(protoPath, loaderOptions)
      const serviceClassDefinition = protoLoader.getServiceClassDefinition()

      // todo
      grpcServer.addService(serviceClassDefinition, pluginConfig.implementation)
    }

    // 服务监听
    await grpcServer.listen(connectUri)

    return grpcServer
  }
  catch (e) {
    pluginLogger.error(`GrpcServer create failed ，check egg-grpc-server config carefully ${e.message}`)
  }
}

module.exports = {
  createEggGrpcServerInstance,
}
