import type { RegisterEggPluginName } from './plugin'
import { PluginLoader } from './plugin'

type EggConfig = Record<string, any>

interface EggApp {
  config: EggConfig
}

/**
 * egg启动的生命周期
 * - 参考：https://www.eggjs.org/zh-CN/basics/app-start
 */
export class EggAppBoot {
  private app: EggApp
  private readonly pluginName: RegisterEggPluginName
  constructor(app: EggApp, pluginName: RegisterEggPluginName) {
    this.app = app
    this.pluginName = pluginName
  }

  /**
   * 是否加载插件
   * @param loader
   */
  loaderPlugin(loader: PluginLoader = PluginLoader.APP) {
    // 获取
    const { loaders = [] } = this.app.config[this.pluginName]
    return loaders.includes(loader)
  }
}
