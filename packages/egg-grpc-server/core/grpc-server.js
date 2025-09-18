const { VipEggPluginLogger } = require('@142vip/egg')
const { GrpcServer, ProtoLoader } = require('@142vip/grpc')

async function createEggGrpcServerInstance(pluginConfig, app) {
  const pluginLogger = VipEggPluginLogger.getInstance(pluginConfig, app)

  const grpcServer = new GrpcServer()
  const { connectUri, protoPaths, loaderOptions } = pluginConfig
  try {
    pluginLogger.log(`GrpcServer create success , the name is ${pluginConfig.name}`)

    const protoLoader = new ProtoLoader(protoPaths, loaderOptions)
    const servicePaths = protoLoader.getServicePaths()

    for (const servicePath of servicePaths) {
      const serviceDef = protoLoader.getServerServiceDefinition(servicePath)
      // TODO 对应实现方法
      grpcServer.registerService(serviceDef, {})
    }
    // 服务监听
    const port = await grpcServer.listen(connectUri)

    console.log('GrpcServer create success , the port is ', port)

    return grpcServer
  }
  catch (e) {
    pluginLogger.error(`GrpcServer create failed ，check egg-grpc-server config carefully ${e.message}`)
  }
}

module.exports = {
  createEggGrpcServerInstance,
}
