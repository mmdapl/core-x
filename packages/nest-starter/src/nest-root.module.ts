import { DynamicModule, Module } from '@nestjs/common'

@Module({})
export class NestRootModule {
  public static register(rootModuleOptions: Omit<DynamicModule, 'module'>): DynamicModule {
    return {
      module: NestRootModule,
      ...rootModuleOptions,
    }
  }
}
