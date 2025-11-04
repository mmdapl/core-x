import { LoggerLevelEnum } from '@142vip/nest-logger'
import { Type } from 'class-transformer'
import { IsEnum, IsOptional, ValidateNested } from 'class-validator'

/**
 * 控制台日志配置
 */
export class ConsoleLoggerConfig {
  @IsOptional()
  @IsEnum(LoggerLevelEnum)
  level?: LoggerLevelEnum
}

/**
 * 文件日志配置
 */
export class FileLoggerConfig {

}

export class LoggerConfig {
  @IsOptional()
  @ValidateNested()
  @Type(() => ConsoleLoggerConfig)
  consoleLogger?: ConsoleLoggerConfig

  @IsOptional()
  @ValidateNested()
  @Type(() => FileLoggerConfig)
  fileLogger?: FileLoggerConfig
}
