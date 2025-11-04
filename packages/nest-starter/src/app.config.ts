import { Type } from 'class-transformer'
import { ValidateNested } from 'class-validator'
import { StarterConfig } from './config'
import 'reflect-metadata'

export class NestAppConfig {
  @ValidateNested()
  @Type(() => StarterConfig)
  starter!: StarterConfig
}
