import { StarterConfig } from '@142vip/nest-starter'

export class ConfigExampleService {
  constructor(
    private readonly starterConfig: StarterConfig,
  ) { }

  public getStarterConfig(): StarterConfig {
    return this.starterConfig
  }
}
