[API 参考](../../../index.md) / [@142vip/data-source](../index.md) / VipDTableApi

# 类: VipDTableApi

定义于: [core/apis/vip-dtable-api.ts:17](https://github.com/142vip/core-x/blob/d59cdcda9f62fc93dcb0efb54c66772997c75711/packages/data-source/src/core/apis/vip-dtable-api.ts#L17)

DTable API

## theme_extends

- [`DataSourceManager`](DataSourceManager.md)

## 构造函数

### 构造函数

> **new VipDTableApi**(): `VipDTableApi`

#### 返回

`VipDTableApi`

#### 继承自

[`DataSourceManager`](DataSourceManager.md).[`constructor`](DataSourceManager.md#constructor)

## 方法

### getConnectionData()

> **getConnectionData**(`config`): `Promise`\<[`DataSourceParseResponse`](../interfaces/DataSourceParseResponse.md)\<[`DTableAPIData`](../interfaces/DTableAPIData.md)\>\>

定义于: [core/apis/vip-dtable-api.ts:18](https://github.com/142vip/core-x/blob/d59cdcda9f62fc93dcb0efb54c66772997c75711/packages/data-source/src/core/apis/vip-dtable-api.ts#L18)

#### 参数

##### config

`AxiosRequestConfig`

#### 返回

`Promise`\<[`DataSourceParseResponse`](../interfaces/DataSourceParseResponse.md)\<[`DTableAPIData`](../interfaces/DTableAPIData.md)\>\>

#### 重写了

[`DataSourceManager`](DataSourceManager.md).[`getConnectionData`](DataSourceManager.md#getconnectiondata)

***

### getDataBaseNameList()

> **getDataBaseNameList**(): `Promise`\<[`DataSourceParseResponse`](../interfaces/DataSourceParseResponse.md)\<`string`[]\>\>

定义于: [data-source.manager.ts:15](https://github.com/142vip/core-x/blob/d59cdcda9f62fc93dcb0efb54c66772997c75711/packages/data-source/src/data-source.manager.ts#L15)

#### 返回

`Promise`\<[`DataSourceParseResponse`](../interfaces/DataSourceParseResponse.md)\<`string`[]\>\>

#### 继承自

[`DataSourceManager`](DataSourceManager.md).[`getDataBaseNameList`](DataSourceManager.md#getdatabasenamelist)

***

### getTableColumns()

> **getTableColumns**(`_tableName`, `_schema?`): `Promise`\<[`DataSourceParseResponse`](../interfaces/DataSourceParseResponse.md)\<[`DataSourceColumn`](../interfaces/DataSourceColumn.md)[]\>\>

定义于: [data-source.manager.ts:29](https://github.com/142vip/core-x/blob/d59cdcda9f62fc93dcb0efb54c66772997c75711/packages/data-source/src/data-source.manager.ts#L29)

获取表字段列表

#### 参数

##### \_tableName

`string`

##### \_schema?

`string`

#### 返回

`Promise`\<[`DataSourceParseResponse`](../interfaces/DataSourceParseResponse.md)\<[`DataSourceColumn`](../interfaces/DataSourceColumn.md)[]\>\>

#### 继承自

[`DataSourceManager`](DataSourceManager.md).[`getTableColumns`](DataSourceManager.md#gettablecolumns)

***

### getTableNames()

> **getTableNames**(): `Promise`\<[`DataSourceParseResponse`](../interfaces/DataSourceParseResponse.md)\<[`DataSourceTable`](../interfaces/DataSourceTable.md)[]\>\>

定义于: [data-source.manager.ts:22](https://github.com/142vip/core-x/blob/d59cdcda9f62fc93dcb0efb54c66772997c75711/packages/data-source/src/data-source.manager.ts#L22)

获取表名列表

#### 返回

`Promise`\<[`DataSourceParseResponse`](../interfaces/DataSourceParseResponse.md)\<[`DataSourceTable`](../interfaces/DataSourceTable.md)[]\>\>

#### 继承自

[`DataSourceManager`](DataSourceManager.md).[`getTableNames`](DataSourceManager.md#gettablenames)

***

### parseData()

> **parseData**(): `Promise`\<[`DataSourceParseResponse`](../interfaces/DataSourceParseResponse.md)\<`unknown`\>\>

定义于: [data-source.manager.ts:7](https://github.com/142vip/core-x/blob/d59cdcda9f62fc93dcb0efb54c66772997c75711/packages/data-source/src/data-source.manager.ts#L7)

#### 返回

`Promise`\<[`DataSourceParseResponse`](../interfaces/DataSourceParseResponse.md)\<`unknown`\>\>

#### 继承自

[`DataSourceManager`](DataSourceManager.md).[`parseData`](DataSourceManager.md#parsedata)

***

### testConnect()

> **testConnect**(): `Promise`\<[`DataSourceParseResponse`](../interfaces/DataSourceParseResponse.md)\<`unknown`\>\>

定义于: [data-source.manager.ts:11](https://github.com/142vip/core-x/blob/d59cdcda9f62fc93dcb0efb54c66772997c75711/packages/data-source/src/data-source.manager.ts#L11)

#### 返回

`Promise`\<[`DataSourceParseResponse`](../interfaces/DataSourceParseResponse.md)\<`unknown`\>\>

#### 继承自

[`DataSourceManager`](DataSourceManager.md).[`testConnect`](DataSourceManager.md#testconnect)
