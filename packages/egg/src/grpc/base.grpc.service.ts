import type { EggApp, EggConfig } from '../egg.interface'

/**
 * Egg框架中，使用grpc的基础service类，注入app对象
 */
export class BaseGrpcService {
  private readonly app: EggApp
  private readonly ctx
  private readonly config: EggConfig
  constructor(app: EggApp) {
    this.app = app
    this.ctx = app.createAnonymousContext()
    // app.config
    this.config = app.config
  }

  /**
   * 检查grpc中使用Egg内置对象是否正常
   */
  public testGrpcWithEgg() {
    return {
      app: this.app,
      ctx: this.ctx,
      config: this.config,
    }
  }
}
