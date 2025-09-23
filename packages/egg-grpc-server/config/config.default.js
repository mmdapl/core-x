const { defaultPluginConfig, PluginLoader } = require('@142vip/egg')
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
    // Grpc只在agent.js中加载
    loaders: [PluginLoader.AGENT],
  }),
}
