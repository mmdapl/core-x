[API 参考](../../../index.md) / [@142vip/data-source](../index.md) / DataSourceManager

# 类: DataSourceManager

定义于: [data-source.manager.ts:6](https://github.com/142vip/core-x/blob/d59cdcda9f62fc93dcb0efb54c66772997c75711/packages/data-source/src/data-source.manager.ts#L6)

数据源管理器

## theme_extended_by

- [`VipAliGatewayApi`](VipAliGatewayApi.md)
- [`VipDTableApi`](VipDTableApi.md)
- [`VipDtStackApi`](VipDtStackApi.md)
- [`VipHttpApi`](VipHttpApi.md)
- [`VipClickhouse`](VipClickhouse.md)
- [`VipDameng`](VipDameng.md)
- [`VipIbmDB`](VipIbmDB.md)
- [`VipKingBase`](VipKingBase.md)
- [`VipSqlServer`](VipSqlServer.md)
- [`VipMysql`](VipMysql.md)
- [`VipOracle`](VipOracle.md)
- [`VipPostgreSql`](VipPostgreSql.md)
- [`VipCsv`](VipCsv.md)

## 构造函数

### 构造函数

> **new DataSourceManager**(): `DataSourceManager`

#### 返回

`DataSourceManager`

## 方法

### getConnectionData()

> **getConnectionData**(`_options`): `Promise`\<[`DataSourceParseResponse`](../interfaces/DataSourceParseResponse.md)\<`unknown`\>\>

定义于: [data-source.manager.ts:33](https://github.com/142vip/core-x/blob/d59cdcda9f62fc93dcb0efb54c66772997c75711/packages/data-source/src/data-source.manager.ts#L33)

#### 参数

##### \_options

`unknown`

#### 返回

`Promise`\<[`DataSourceParseResponse`](../interfaces/DataSourceParseResponse.md)\<`unknown`\>\>

***

### getDataBaseNameList()

> **getDataBaseNameList**(): `Promise`\<[`DataSourceParseResponse`](../interfaces/DataSourceParseResponse.md)\<`string`[]\>\>

定义于: [data-source.manager.ts:15](https://github.com/142vip/core-x/blob/d59cdcda9f62fc93dcb0efb54c66772997c75711/packages/data-source/src/data-source.manager.ts#L15)

#### 返回

`Promise`\<[`DataSourceParseResponse`](../interfaces/DataSourceParseResponse.md)\<`string`[]\>\>

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

***

### getTableNames()

> **getTableNames**(): `Promise`\<[`DataSourceParseResponse`](../interfaces/DataSourceParseResponse.md)\<[`DataSourceTable`](../interfaces/DataSourceTable.md)[]\>\>

定义于: [data-source.manager.ts:22](https://github.com/142vip/core-x/blob/d59cdcda9f62fc93dcb0efb54c66772997c75711/packages/data-source/src/data-source.manager.ts#L22)

获取表名列表

#### 返回

`Promise`\<[`DataSourceParseResponse`](../interfaces/DataSourceParseResponse.md)\<[`DataSourceTable`](../interfaces/DataSourceTable.md)[]\>\>

***

### parseData()

> **parseData**(): `Promise`\<[`DataSourceParseResponse`](../interfaces/DataSourceParseResponse.md)\<`unknown`\>\>

定义于: [data-source.manager.ts:7](https://github.com/142vip/core-x/blob/d59cdcda9f62fc93dcb0efb54c66772997c75711/packages/data-source/src/data-source.manager.ts#L7)

#### 返回

`Promise`\<[`DataSourceParseResponse`](../interfaces/DataSourceParseResponse.md)\<`unknown`\>\>

***

### testConnect()

> **testConnect**(): `Promise`\<[`DataSourceParseResponse`](../interfaces/DataSourceParseResponse.md)\<`unknown`\>\>

定义于: [data-source.manager.ts:11](https://github.com/142vip/core-x/blob/d59cdcda9f62fc93dcb0efb54c66772997c75711/packages/data-source/src/data-source.manager.ts#L11)

#### 返回

`Promise`\<[`DataSourceParseResponse`](../interfaces/DataSourceParseResponse.md)\<`unknown`\>\>
