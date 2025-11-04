import { InjectPinoLogger, PinoLogger } from 'nestjs-pino'

/**
 * 注册日志
 */
export function InjectLogger(context?: string): PropertyDecorator & ParameterDecorator {
  return InjectPinoLogger(context)
}

export class NestLogger extends PinoLogger {

}
