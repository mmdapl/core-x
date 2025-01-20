const { VipEggPluginLogger } = require('@142vip/egg')
const { GrpcClient, ProtoLoader } = require('@142vip/grpc')

/**
 * 创建egg grpc连接实例
 * @param pluginConfig
 * @param app
 */
function createEggGrpcClientInstance(pluginConfig, app) {
  const pluginLogger = VipEggPluginLogger.getInstance(pluginConfig, app)

  const { connectUri, protoPaths, loaderOptions } = pluginConfig

  const grpcClient = GrpcClient.getInstance()
  // 加载proto
  for (const protoPath of protoPaths) {
    const protoLoader = ProtoLoader.getInstance(protoPath, loaderOptions)
    const serviceClassDefinition = protoLoader.getServiceClassDefinition()

    // 建立连接
    grpcClient.connect(connectUri, serviceClassDefinition)
  }

  grpcClient.connect()

  if (grpcClient.getConnectSize() === 0) {
    pluginLogger.error('grpc client connect size is 0')
  }

  const clientService = grpcClient.getService()
  pluginLogger.log('plugin init')

  return clientService
}

module.exports = {
  createEggGrpcClientInstance,
}
