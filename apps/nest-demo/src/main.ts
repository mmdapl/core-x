import { NestStarter } from '@142vip/nest-starter'
import { AppModule } from './app.module'

// 统一启动类
void NestStarter.getInstance().start(AppModule)
