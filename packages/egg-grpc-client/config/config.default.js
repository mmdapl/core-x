const { defaultPluginConfig } = require('@142vip/egg')
const { exampleProto, GrpcConnectURI } = require('@142vip/grpc')
const { name: pkgName } = require('../package.json')

module.exports = {
  grpcClient: defaultPluginConfig(pkgName, {
    client: {
      connectUri: GrpcConnectURI.PORT_50001,
      protoPaths: [exampleProto],
    },
  }),
}
