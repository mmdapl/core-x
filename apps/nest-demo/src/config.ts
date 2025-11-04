import { NestAppConfig } from '@142vip/nest-starter'
import { IsNumber } from 'class-validator'

export class Config extends NestAppConfig {
  @IsNumber()
  test!: number
}
