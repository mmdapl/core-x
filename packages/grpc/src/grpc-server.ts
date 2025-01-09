import type { ServiceDefinition, UntypedServiceImplementation } from '@grpc/grpc-js'
import { Server, ServerCredentials } from '@grpc/grpc-js'
import { Singleton } from './singleton'

export class GrpcServer extends Singleton<GrpcServer> {
  private readonly server: Server
  constructor() {
    super()
    this.server = new Server()
  }

  /**
   * 添加服务
   */
  public addService(service: ServiceDefinition, implementation: UntypedServiceImplementation): void {
    this.server.addService(service, implementation)
  }

  /**
   * 移除服务
   * @param service
   */
  public removeService(service: ServiceDefinition): void {
    this.server.removeService(service)
  }

  /**
   * 监听端口，即启动
   * @param connectUri
   */
  public async listen(connectUri: string): Promise<number> {
    return new Promise((resolve, reject) => {
      this.server.bindAsync(connectUri, ServerCredentials.createInsecure(), (error, port) => {
        // 启动成功
        if (error == null) {
          console.log('启动成功')
          resolve(port)
        }
        else {
          reject(error)
        }
      })
    })
  }
}
