import type { ExampleRequestDataType } from '@142vip/grpc'
import { clientStreamToServer, clientStreamToServerStream, clientToServer, clientToServerStream } from '@142vip/grpc'
import { BaseGrpcService } from './base.grpc.service'

export class EggGrpcExampleService extends BaseGrpcService {
  async ClientToServer(requestData: ExampleRequestDataType) {
    return await clientToServer(requestData)
  }

  async ClientToServerStream(requestData: ExampleRequestDataType) {
    return await clientToServerStream(requestData)
  }

  async ClientStreamToServer(requestData: ExampleRequestDataType) {
    return await clientStreamToServer(requestData)
  }

  async ClientStreamToServerStream(requestData: ExampleRequestDataType) {
    return await clientStreamToServerStream(requestData)
  }
}
