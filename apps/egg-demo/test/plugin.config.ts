const nodeRequire = require

/**
 * 插件默认的配置
 */
export const defaultEggAxiosPluginConfig = nodeRequire('@142vip/egg-axios/config/config.default').axios
export const defaultEggMysqlPluginConfig = nodeRequire('@142vip/egg-mysql/config/config.default').mysql
export const defaultEggGrpcClientPluginConfig = nodeRequire('@142vip/egg-grpc-client/config/config.default').grpcClient
export const defaultEggGrpcServerPluginConfig = nodeRequire('@142vip/egg-grpc-server/config/config.default').grpcServer

/**
 * 插件的运行环境
 */
export enum EGG_SERVER_ENV {
  DEFAULT = 'default',
  AXIOS = 'axios',
  AXIOS_MULTIPLE = 'axios-multiple',
  MYSQL = 'mysql',
  MYSQL_MULTIPLE = 'mysql-multiple',
  GRPC_CLIENT = 'grpc-client',
  GRPC_CLIENT_MULTIPLE = 'grpc-client-multiple',
  GRPC_SERVER = 'grpc-server',
  GRPC_SERVER_MULTIPLE = 'grpc-server-multiple',
}

export enum PluginInstanceName {
  DEFAULT = 'default',
  EXAMPLE1 = 'example1',
  EXAMPLE2 = 'example2',
}
