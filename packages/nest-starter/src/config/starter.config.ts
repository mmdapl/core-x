import { Type } from 'class-transformer'
import { IsNumber, IsOptional, ValidateNested } from 'class-validator'
import { LoggerConfig } from './plugin/logger.config'
import { RedisConfig } from './plugin/redis.config'
import { SequelizeConfig } from './plugin/sequelize.config'
import { SwaggerConfig } from './plugin/swagger.config'
import { TypeOrmConfig } from './plugin/typeorm.config'

import 'reflect-metadata'

export class StarterConfig {
  @IsNumber()
  port!: number

  @IsOptional()
  globalPrefix?: string

  @IsOptional()
  @ValidateNested()
  @Type(() => RedisConfig)
  redis?: RedisConfig

  @IsOptional()
  @ValidateNested()
  @Type(() => TypeOrmConfig)
  typeorm?: TypeOrmConfig

  @IsOptional()
  @ValidateNested()
  @Type(() => SequelizeConfig)
  sequelize?: SequelizeConfig

  @IsOptional()
  enableSwagger?: boolean

  @IsOptional()
  @ValidateNested()
  @Type(() => SwaggerConfig)
  swagger?: SwaggerConfig

  @IsOptional()
  enableLogger?: boolean

  @IsOptional()
  @ValidateNested()
  @Type(() => LoggerConfig)
  logger?: LoggerConfig
}
