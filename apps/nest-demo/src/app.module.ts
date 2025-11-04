import { NestRedisModule } from '@142vip/nest-redis'
import { Module } from '@nestjs/common'
import { ConfigExampleModule } from './config-example/config-example.module'
import { RedisExampleModule } from './redis-example/redis-example.module'

@Module({
  imports: [
    // 全局模块
    NestRedisModule.register({ url: 'redis://172.16.202.252:6379' }),

    // 最佳实践
    RedisExampleModule,

    ConfigExampleModule,
  ],
})
export class AppModule {}
