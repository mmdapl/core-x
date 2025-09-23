const { join } = require('node:path')

module.exports = {
  mysql: {
    enable: true,
    package: '@142vip/egg-mysql',
    env: ['mysql', 'mysql-multiple'],
    path: join(__dirname, '../../../packages/egg-mysql'),
  },
  axios: {
    enable: true,
    package: '@142vip/egg-axios',
    env: ['axios', 'axios-multiple'],
    path: join(__dirname, '../../../packages/egg-axios'),
  },
  grpcClient: {
    enable: true,
    package: '@142vip/egg-grpc-client',
    env: ['grpc-client', 'grpc-client-multiple'],
    path: join(__dirname, '../../../packages/egg-grpc-client'),
  },
  grpcServer: {
    enable: true,
    package: '@142vip/egg-grpc-server',
    env: ['grpc-server', 'grpc-server-multiple'],
    path: join(__dirname, '../../../packages/egg-grpc-server'),
  },
}
