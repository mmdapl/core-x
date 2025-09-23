const { join } = require('node:path')
const { VipEggPluginLogger } = require('@142vip/egg')
const { GrpcServer, ProtoLoader } = require('@142vip/grpc')
const { vipLodash } = require('@142vip/utils')

const GRPC_SERVICE_PATH = 'app/grpc'
const GRPC_NAME = '__grpc'

/**
 * 将service方法与proto文件定义的方法进行绑定
 * @param service
 * @param serviceMethod
 */
function bindServiceMethod(service, serviceMethod) {
  const handlers = {}
  for (const methodName of Object.keys(service)) {
    const methodNameLower = vipLodash.lowerFirst(methodName)
    const methodNameUpper = vipLodash.upperFirst(methodName)
    const method = serviceMethod[methodName] ?? serviceMethod[methodNameLower] ?? serviceMethod[methodNameUpper]
    // 绑定 this 上下文到 serviceMethod
    handlers[methodNameLower] = method ? method.bind(serviceMethod) : undefined
  }

  return handlers
}

/**
 * 创建grpc服务端实例
 * @param pluginConfig
 * @param app
 */
function createEggGrpcServerInstance(pluginConfig, app) {
  const pluginLogger = VipEggPluginLogger.getInstance(pluginConfig, app)

  const grpcServer = new GrpcServer()
  const { connectUri, protoPaths, loaderOptions, grpcServicePath, instanceName = 'default' } = pluginConfig

  // 将grpc对应的实现类，挂载app上，app.grpc
  const grpcServiceDir = join(app.config.baseDir, grpcServicePath ?? GRPC_SERVICE_PATH)
  app.loader.loadToApp(grpcServiceDir, GRPC_NAME, {
    // 类加载时初始化
    initializer(Service) {
      return new Service(app)
    },
  })

  const grpcServiceMap = app[GRPC_NAME]

  if (grpcServiceMap == null)
    throw new Error('grpc service not found')

  try {
    const protoLoader = new ProtoLoader(protoPaths, loaderOptions)

    // 获取详情
    for (const { ServiceClientConstructor, serviceName } of protoLoader.getGrpcServiceDetail()) {
      const serviceMethodHandler = grpcServiceMap[serviceName]
      if (serviceMethodHandler == null) {
        pluginLogger.error(`GrpcServer create failed , the service ${serviceName} not found`)
        return
      }

      grpcServer.registerService(ServiceClientConstructor.service, bindServiceMethod(ServiceClientConstructor.service, serviceMethodHandler))
    }

    // app启动时，监听端口、多服务
    app.beforeStart(async () => {
      const instance = app.grpcServer.getInstance(instanceName)
      const port = await instance.listen(connectUri)
      pluginLogger.log(`GrpcServer create success,the instance name is ${instanceName},port: ${port}. connect: grpc://${connectUri}`)
    })

    // 应用关闭时清理实例
    app.beforeClose(() => {
      pluginLogger.log('应用关闭，关闭GRPC服务')
      const grpcServerInstanceMaps = app.grpcServer.getInstances()
      // 强制关闭所有grpc实例
      Object.values(grpcServerInstanceMaps).forEach((instance) => {
        instance.forceShutdown()
      })
    })

    return grpcServer
  }
  catch (e) {
    pluginLogger.error(`GrpcServer create failed ，check egg-grpc-server config carefully ${e.message}`)
  }
}

module.exports = {
  createEggGrpcServerInstance,
}
