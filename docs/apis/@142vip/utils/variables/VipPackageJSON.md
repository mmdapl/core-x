[API 参考](../../../index.md) / [@142vip/utils](../index.md) / VipPackageJSON

# 变量: VipPackageJSON

> `const` **VipPackageJSON**: `object`

定义于: [packages/utils/src/core/package-json.ts:214](https://github.com/142vip/core-x/blob/1eb80b292cacf818428b26e34edc36554f5c80fb/packages/utils/src/core/package-json.ts#L214)

package.json处理

## 类型声明

### getCurrentVersion()

> **getCurrentVersion**: (`cwd?`) => `null` \| `string`

读取package.json文件，获取version字段

#### 参数

##### cwd?

`string`

#### 返回

`null` \| `string`

### getPackageJSON()

> **getPackageJSON**: \<`T`\>(`cwd?`) => `T` & [`PackageJSONMainFest`](../interfaces/PackageJSONMainFest.md)

获取package.json信息

#### 类型参数

##### T

`T`

#### 参数

##### cwd?

`string`

#### 返回

`T` & [`PackageJSONMainFest`](../interfaces/PackageJSONMainFest.md)

### getPackagePath()

> **getPackagePath**: (`cwd?`) => `string`

获取package.json的路径

#### 参数

##### cwd?

`string`

#### 返回

`string`

### getPkgGreenLabel()

> **getPkgGreenLabel**: (`pkgName`) => `string`

#### 参数

##### pkgName

`string`

#### 返回

`string`

### getPkgRedLabel()

> **getPkgRedLabel**: (`pkgName`) => `string`

#### 参数

##### pkgName

`string`

#### 返回

`string`

### getReleaseVersion()

> **getReleaseVersion**: (`currentVersion`, `releaseType`) => `null` \| `string`

基于当前版本，生成新的version

#### 参数

##### currentVersion

`string`

##### releaseType

`ReleaseType`

#### 返回

`null` \| `string`

### getVersionGitTag()

> **getVersionGitTag**: () => `null` \| `string`

获取仓库Version对应的tag
- 优先从package.json中获取version
- version对应的tag不存在时，再从git记录中获取最新tag

#### 返回

`null` \| `string`

### hasScript()

> **hasScript**: (`packageJSON`, `script`) => `boolean`

判断package.json文件中是否存在指定的脚本

#### 参数

##### packageJSON

[`PackageJSONMainFest`](../interfaces/PackageJSONMainFest.md)

##### script

`string`

#### 返回

`boolean`

### isExistPackageJSON()

> **isExistPackageJSON**: (`cwd?`) => `boolean`

判断package.json是否存在，存在则返回绝对路径

#### 参数

##### cwd?

`string`

#### 返回

`boolean`

### isExistPackageLock()

> **isExistPackageLock**: (`cwd?`) => `boolean`

判断package-lock.json是否存在

#### 参数

##### cwd?

`string`

#### 返回

`boolean`

### isExistPnpmLock()

> **isExistPnpmLock**: (`cwd?`) => `boolean`

判断是否存在pnpm-lock.yaml文件

#### 参数

##### cwd?

`string`

#### 返回

`boolean`

### isPackageJSON()

> **isPackageJSON**: (`packageJSON`) => `boolean`

判断是否为package.json读取的JSON对象
- name|version | description  必须存在一个

#### 参数

##### packageJSON

[`PackageJSONMainFest`](../interfaces/PackageJSONMainFest.md)

#### 返回

`boolean`

### promptReleaseVersion()

> **promptReleaseVersion**: (`currentVersion`, `preid?`) => `Promise`\<`string`\>

提供选择框，支持用户自动选择version

#### 参数

##### currentVersion

`string`

##### preid?

`string`

#### 返回

`Promise`\<`string`\>

### replaceOrAddToJSON()

> **replaceOrAddToJSON**: (`json`, `cwd?`) => `void`

增加或替换JSON数据
- add      增加key、value
- replace  替换某个key的值

#### 参数

##### json

`Record`\<`string`, `unknown`\>

##### cwd?

`string`

#### 返回

`void`

### runScript()

> **runScript**: (`scriptName`, `cwd?`) => `Promise`\<`void`\>

执行脚本

#### 参数

##### scriptName

`string`

##### cwd?

`string`

#### 返回

`Promise`\<`void`\>

### updateVersion()

> **updateVersion**: (`newVersion`, `cwd?`) => `void`

更新package.json中的version字段

#### 参数

##### newVersion

`string`

##### cwd?

`string`

#### 返回

`void`
