interface EggApp {
  config: EggConfig
  addSingleton: (pluginName: string, createInstance: CreateInstance) => void
}
type CreateInstance = (config: any, app: EggApp) => any
type EggConfig = Record<string, any>

/**
 * 注册的Egg插件key
 */
export enum RegisterEggPluginName {
  EGG_AXIOS = 'axios',
  EGG_MYSQL = 'mysql',
  EGG_REDIS = 'redis',
  EGG_SEQUELIZE = 'sequelize',
  EGG_RABBIT = 'rabbit',
  EGG_VALIDATE = 'validate',
  EGG_SWAGGER = 'swagger',
  EGG_GRPC_CLIENT = 'grpcClient',
  EGG_GRPC_SERVER = 'grpcServer',
}

/**
 * 插件注册
 * @param name
 * @param app
 * @param createInstance
 */
export function registerPlugin(name: RegisterEggPluginName, app: EggApp, createInstance: CreateInstance) {
  // 配置 agent 或者 app 才加载单例
  if (app.config[name] != null) {
    app.addSingleton(name, createInstance)
  }
}

/**
 * 插件加载时机
 * - app.js 中
 * - agent.js 中
 */
export enum PluginLoader {
  APP = 'app',
  AGENT = 'agent',
  // 都加载
  ALL = 'app&&agent',
  // 都不加载
  NONE = 'none',
}
