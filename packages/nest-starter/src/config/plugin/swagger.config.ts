import { IsString } from 'class-validator'

export class SwaggerConfig {
  @IsString()
  docPath: string = '/doc'

  envs: Record<string, string> = { 本地环境: 'http://127.0.0.1' }
}
