const { defaultPluginConfig } = require('@142vip/egg')
const { name: pkgName } = require('../package.json')

module.exports = {
  grpcServer: defaultPluginConfig(pkgName, {
    default: {
      loaderOptions: {
        keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true,
      },
    },
    client: {
      connectUri: '127.0.0.1:50051',
      protoPaths: ['./proto/helloworld.proto'],
      loaderOptions: {
        keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true,
      },
    },
  }),
}
