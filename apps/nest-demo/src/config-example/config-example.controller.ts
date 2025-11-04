import { StarterConfig } from '@142vip/nest-starter'
import { Controller, Get } from '@nestjs/common'
import { ConfigExampleService } from './config-example.service'

@Controller('config-example')
export class ConfigExampleController {
  constructor(
    private readonly configExampleService: ConfigExampleService,
  ) {}

  @Get('/')
  public 'Get /'(): StarterConfig {
    return this.configExampleService.getStarterConfig()
  }
}
