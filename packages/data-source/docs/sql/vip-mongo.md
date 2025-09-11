# vip-mongo

## 安装

```bash
# npm
npm install @142vip/data-source
# pnpm
pnpm i @142vip/data-source
```

## 使用

```ts
import type { MongoDBOptions } from '@142vip/data-source'
import { VipMongo } from '@142vip/data-source'

const options: MongoDBOptions = {
  host: '172.16.202.232',
  port: 27017,
  username: 'easyv',
  password: 'easyv',
  database: 'test',
  table: 'test',
  findFilter: {},
  findOptions: {},
}
const vipMongo = new VipMongo()
const response = await vipMongo.getConnectionData(options)
```

## 单元测试

- [vip-mongo.spec.ts](../../test/sql/vip-mongo.spec.ts)

## 证书

[MIT](https://opensource.org/license/MIT)

Copyright (c) 2019-present, @142vip 储凡

**仅供学习参考，商业使用请保留作者版权信息，作者不保证也不承担任何软件的使用风险。**
