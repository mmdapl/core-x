import { INestApplication, Logger } from '@nestjs/common'
import { StarterConfig } from './config'
import { nestProcess } from './nest-process'

export class NestUtil {
  public readonly app: INestApplication
  public readonly starterConfig: StarterConfig

  constructor(app: INestApplication, starterConfig: StarterConfig) {
    this.app = app
    this.starterConfig = starterConfig
  }

  /**
   * 是否为开发模式
   * - 本地环境
   * - 开发环境
   * - 测试环境
   */
  public isDevelopMode(): boolean {
    return nestProcess.isDevelopMode()
  }

  public async printAppModuleStarterLogger() {
    // 未开启日志
    if (!this.starterConfig.enableLogger)
      return

    const logger = new Logger(NestUtil.name)

    const apiUrl = await this.app.getUrl()
    logger.log(`🚀 应用启动成功`)

    logger.log(`⚒️ 启动环境：${nestProcess.getNodeEnv()}，运行配置：${nestProcess.getRunEnv()}.config.js`)

    // 应用名存在，则打印
    const appName = nestProcess.getAppEnv()
    if (appName != null) {
      logger.log(`╰┈┈┈┈┈┈┈┈┈┈┈➤ ${appName} 🔥🔥🔥`)
    }

    logger.log(`🌐 HTTP服务: ${apiUrl}`)
    // 如果有全局前缀
    if (this.starterConfig.globalPrefix)
      logger.log(`🔗 全局路由前缀: ${this.starterConfig.globalPrefix}`)

    // 如果有GRPC服务
    // if (this.starterConfig.grpcServer?.url)
    //   logger.log(`🔌 GRPC服务: ${this.starterConfig.grpcServer.url}`)

    // 给swagger配置环境
    if (this.starterConfig.enableSwagger && this.starterConfig.swagger?.envs != null) {
      for (const [envName, apiUrl] of Object.entries(this.starterConfig.swagger.envs)) {
        logger.log(`📚 API Swagger文档，${envName}：${apiUrl}:${this.starterConfig.port}/${this.starterConfig.swagger?.docPath}`)
      }
    }
  }
}
