const {
  GrpcConnectURI,
  GrpcServer,
  ProtoLoader,
  clientToServer,
  clientStreamToServer,
  clientToServerStream,
  clientStreamToServerStream,
  exampleProto,
  exampleProtoServicePath,
} = require('@142vip/grpc')

/**
 * grpc 服务端示例
 */
async function exampleServerMain() {
  const protoLoader = new ProtoLoader([exampleProto])

  const grpcServer = new GrpcServer()
  /**
   * 函数功能
   */
  const handlers = {
    clientToServer,
    clientStreamToServer,
    clientToServerStream,
    clientStreamToServerStream,
  }

  const serviceDef = protoLoader.getServerServiceDefinition(exampleProtoServicePath)

  // 注册服务
  grpcServer.registerService(serviceDef, handlers)

  // 监听
  const port = await grpcServer.listen(GrpcConnectURI.PORT_50001)
  console.log('example-server:', grpcServer)
  console.log('grpcServer--->', port)
}

void exampleServerMain()
