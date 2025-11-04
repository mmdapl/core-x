# @142vip/nest-starter

[![NPM version](https://img.shields.io/npm/v/@142vip/nest-starter?labelColor=0b3d52&color=1da469&label=version)](https://www.npmjs.com/package/@142vip/nest-starter)

## 安装

```shell
# npm
npm install @142vip/nest-starter
# pnpm
pnpm i @142vip/nest-starter
```

## 配置

```ts
import { NestAppConfig } from '@142vip/nest-starter'
import { IsNumber } from 'class-validator'

export class Config extends NestAppConfig {
  @IsNumber()
  test!: number
}
```

## 使用

```ts
import { NestStarter } from '@142vip/nest-starter'
import { AppModule } from './app.module'

// 统一启动类
void NestStarter.getInstance().start(AppModule)
```

## 参考

## 证书

[MIT](https://opensource.org/license/MIT)

Copyright (c) 2019-present, @142vip 储凡

**仅供学习参考，商业使用请保留作者版权信息，作者不保证也不承担任何软件的使用风险。**
