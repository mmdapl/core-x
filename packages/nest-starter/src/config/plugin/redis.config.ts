import { IsOptional, IsString } from 'class-validator'

export class RedisConfig {
  @IsOptional()
  @IsString()
  url?: string
}
