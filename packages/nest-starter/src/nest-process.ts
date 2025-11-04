import { VipNodeJS } from '@142vip/utils'

enum NestProcessNodeEnv {
  LOCAL = 'local',
  TEST = 'test',
  DEVELOP = 'dev',
}

class NestProcess {
  private static instance: NestProcess | null

  public static getInstance(): NestProcess {
    if (this.instance == null)
      this.instance = new NestProcess()

    return this.instance
  }

  /**
   * 获取当前进程的运行环境
   */
  public getNodeEnv(): string | undefined {
    return this.getEnv('NODE_ENV')
  }

  /**
   * 获取加载配置的运行环境
   * - 使用RUN_ENV环境变量
   */
  public getRunEnv(): string | undefined {
    return this.getEnv('RUN_ENV')
  }

  /**
   * 获取启动的应用
   * - 使用APP环境变量
   */
  public getAppEnv(): string | undefined {
    return this.getEnv('APP')
  }

  /**
   * 是否本地环境启动Nestjs应用
   *  - local.config 配置
   */
  public isLocalStartNest(): boolean {
    return this.getNodeEnv() === NestProcessNodeEnv.LOCAL
  }

  /**
   * 是否测试环境启动Nestjs应用
   *  - test.config 配置
   */
  public isTestStartNest(): boolean {
    return this.getNodeEnv() === NestProcessNodeEnv.TEST
  }

  /**
   * 是否开发环境启动Nestjs应用
   *  - dev.config 配置
   */
  public isDevelopStartNest(): boolean {
    return this.getNodeEnv() === NestProcessNodeEnv.DEVELOP
  }

  /**
   * 是否为开发模式
   * - 本地环境
   * - 开发环境
   * - 测试环境
   */
  public isDevelopMode(): boolean {
    const nodeEnv = this.getNodeEnv()
    return nodeEnv != null && Object.values(NestProcessNodeEnv).includes(nodeEnv as NestProcessNodeEnv)
  }

  /**
   * 根据key获取环境变量
   */
  public getEnv(envKey: string): string | undefined {
    return VipNodeJS.getProcessEnv(envKey)
  }

  /**
   * 获取进程当前路径
   */
  public getCwd(): string {
    return VipNodeJS.getProcessCwd()
  }
}

export const nestProcess = NestProcess.getInstance()
