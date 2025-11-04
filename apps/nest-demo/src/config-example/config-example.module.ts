import { Module } from '@nestjs/common'
import { ConfigExampleController } from './config-example.controller'
import { ConfigExampleService } from './config-example.service'

@Module({
  controllers: [ConfigExampleController],
  providers: [ConfigExampleService],
})
export class ConfigExampleModule {}
