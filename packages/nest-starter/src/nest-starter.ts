import { NestModule } from '@142vip/nest'
import { LoggerLevelEnum, NestLoggerModule } from '@142vip/nest-logger'
import { NestRedisModule } from '@142vip/nest-redis'
import { NestTypeOrmModule } from '@142vip/nest-typeorm'
import { vipLogger } from '@142vip/utils'
import {
  ClassSerializerInterceptor,
  HttpStatus,
  INestApplication,
  NestApplicationOptions,
  VersioningType,
} from '@nestjs/common'
import { APP_INTERCEPTOR, NestFactory } from '@nestjs/core'
import { StarterConfig } from './config'
import { NestConfigModule, nestStaterConfig } from './config.module'
import { NestRootModule } from './nest-root.module'
import { NestUtil } from './nest-util'
import { SwaggerManager } from './swagger/swagger.manager'

/**
 * Nest框架启动器
 */
export class NestStarter {
  private static instance: NestStarter | null
  /**
   * 启动配置
   * @private
   */
  private readonly starterConfig: StarterConfig = nestStaterConfig
  /**
   * @param nestApplicationOptions
   */
  protected constructor(
    protected readonly nestApplicationOptions?: NestApplicationOptions,
  ) { }

  /**
   * 单例
   * @param nestApplicationOptions 应用启动选项
   */
  public static getInstance(
    nestApplicationOptions?: NestApplicationOptions,
  ): NestStarter {
    // 开启日志
    if (nestStaterConfig?.enableLogger)
      vipLogger.logByBlank(JSON.stringify(nestStaterConfig, null, 2))

    if (this.instance == null)
      this.instance = new this(nestApplicationOptions)

    return this.instance
  }

  /**
   * 入口
   */
  public async start(appRootModule: NestModule): Promise<void> {
    const nestRootModule = NestRootModule.register({
      imports: this.registerGlobalModules().concat(appRootModule),
      providers: this.getProviders(),
    })

    /**
     * 创建应用
     */
    const app = await NestFactory.create(nestRootModule, {
      bufferLogs: true,
      ...this.nestApplicationOptions,
    })

    this.setGlobalConfig(app)

    // 应用启动
    await app.listen(this.starterConfig.port!)

    // 优化日志
    void new NestUtil(app, this.starterConfig).printAppModuleStarterLogger()
  }

  /**
   * 设置全局配置
   * @private
   */
  private setGlobalConfig(app: INestApplication): INestApplication {
    // 应用日志
    if (this.starterConfig.enableLogger)
      NestLoggerModule.useLogger(app)

    // 路由版本功能
    // apiVersioning必须在swagger之前加载
    app.enableVersioning({ type: VersioningType.URI })

    if (this.starterConfig.enableSwagger && this.starterConfig.swagger != null) {
      new SwaggerManager(this.starterConfig.swagger).register(app)

      // TODO 打印swagger相关信息
    }

    // 启用关闭钩子（for优雅下线）
    app.enableShutdownHooks()

    // 添加健康检查路由
    app.getHttpAdapter()
      .get('/health', (_req, res) => res.status(HttpStatus.OK).send('SERVER OK'))

    return app
  }

  /**
   * 注册全局模块
   * @private
   */
  private registerGlobalModules(): NestModule[] {
    const imports: NestModule[] = []

    // 默认为用户注册配置
    imports.push(NestConfigModule)

    if (this.starterConfig.enableLogger) {
      imports.push(NestLoggerModule.register({ consoleLogger: { level: LoggerLevelEnum.trace } }))
    }

    // 注册Redis模块
    if (this.starterConfig.redis != null) {
      imports.push(NestRedisModule.register(this.starterConfig.redis))
    }

    // 注册TypeOrm模块
    if (this.starterConfig.typeorm != null) {
      imports.push(NestTypeOrmModule.register(this.starterConfig.typeorm))
    }

    return imports
  }

  private getProviders() {
    return [
      /**
       * 传播上下文
       */
      // {
      //   provide: APP_INTERCEPTOR,
      //   useClass: PropagationInterceptor,
      // },
      /**
       * 统一响应体
       */
      // {
      //   provide: APP_INTERCEPTOR,
      //   useClass: ResponseInterceptor,
      // },
      /**
       * 序列化类(过滤不正常字段)
       */
      {
        provide: APP_INTERCEPTOR,
        useClass: ClassSerializerInterceptor,
      },
      /**
       * 校验入参
       */
      // {
      //   provide: APP_PIPE,
      //   useValue: new CustomValidationPipe({
      //     // 下面两个class-transformer参数用于尝试将传进来的参数转成dto定义的类型
      //     transform: true,
      //     transformOptions: { enableImplicitConversion: true }, // TODO to delete it
      //     // 是否禁用DTO参数校验错误详情
      //     disableErrorMessages: this.starterConfig.disableErrorMessages,
      //     // 下面两个class-validator参数用于禁止未知的参数
      //     // whitelist: true,
      //     // forbidNonWhitelisted: true,
      //     ...(this.starterConfig.disableErrorMessages
      //       ? {
      //           exceptionFactory: (_errors): PlatformException => {
      //             return new PlatformException(ErrorCodes.BAD_REQUEST, HttpStatus.BAD_REQUEST)
      //           },
      //         }
      //       : {}),
      //   }),
      // },
      /**
       * 拦截框架内部异常
       */
      // {
      //   provide: APP_FILTER,
      //   useClass: GlobalFilter,
      // },
      // /**
      //  * 限制请求来源页
      //  */
      // ...(this.starterConfig.allowedReferers != null
      //   ? [{
      //       provide: APP_GUARD,
      //       useClass: RefererGuard,
      //     }]
      //   : []),
    ]
  }
}
