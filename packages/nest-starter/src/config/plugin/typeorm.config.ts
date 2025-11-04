import { IsOptional, IsString } from 'class-validator'

export class TypeOrmConfig {
  @IsString()
  url!: string

  @IsOptional()
  @IsString()
  schema?: string

  @IsOptional()
  @IsString()
  logging: boolean = false
}
