const { exampleProto } = require('@142vip/egg-grpc-server/example/example-grpc')
const { GrpcConnectURI } = require('@142vip/grpc')

/**
 * 多实例，加载@142vip/egg-grpc-server
 */
module.exports = {
  grpcServer: {
    clients: {
      example1: {
        connectUri: GrpcConnectURI.PORT_50001,
        protoPaths: [exampleProto],
      },
      example2: {
        connectUri: GrpcConnectURI.PORT_50002,
        protoPaths: [exampleProto],
      },
    },
  },
}
