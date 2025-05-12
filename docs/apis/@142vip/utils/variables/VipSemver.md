[API 参考](../../../index.md) / [@142vip/utils](../index.md) / VipSemver

# 变量: VipSemver

> `const` **VipSemver**: `object`

定义于: [packages/utils/src/pkgs/semver.ts:101](https://github.com/142vip/core-x/blob/1eb80b292cacf818428b26e34edc36554f5c80fb/packages/utils/src/pkgs/semver.ts#L101)

参考：https://www.npmjs.com/package/semver

## 类型声明

### clean()

> **clean**: (`version`, `optionsOrLoose?`) => `null` \| `string`

Returns cleaned (removed leading/trailing whitespace, remove '=v' prefix) and parsed version, or null if version is invalid.

#### 参数

##### version

`string`

##### optionsOrLoose?

`boolean` | `Options`

#### 返回

`null` \| `string`

### compare()

> **compare**: (`v1`, `v2`, `optionsOrLoose?`) => `-1` \| `0` \| `1`

Compares two versions excluding build identifiers (the bit after `+` in the semantic version string).

Sorts in ascending order when passed to `Array.sort()`.

#### 参数

##### v1

`string` | `SemVer`

##### v2

`string` | `SemVer`

##### optionsOrLoose?

`boolean` | `Options`

#### 返回

`-1` \| `0` \| `1`

- `0` if `v1` == `v2`
- `1` if `v1` is greater
- `-1` if `v2` is greater.

### createSemver()

> **createSemver**: (`version`, `optionsOrLoose?`) => `SemVer`

支持原生创建Semver实例

#### 参数

##### version

`string` | `SemVer`

##### optionsOrLoose?

`boolean` | `RangeOptions`

#### 返回

`SemVer`

### eq()

> **eq**: (`v1`, `v2`, `optionsOrLoose?`) => `boolean`

v1 == v2 This is true if they're logically equivalent, even if they're not the exact same string. You already know how to compare strings.

#### 参数

##### v1

`string` | `SemVer`

##### v2

`string` | `SemVer`

##### optionsOrLoose?

`boolean` | `Options`

#### 返回

`boolean`

### getNextVersions()

> **getNextVersions**: (`currentVersion`, `preid?`) => `null` \| [`NextVersion`](../interfaces/NextVersion.md)

获取下一个版本

#### 参数

##### currentVersion

`string`

##### preid?

`string`

#### 返回

`null` \| [`NextVersion`](../interfaces/NextVersion.md)

### gt()

> **gt**: (`v1`, `v2`, `optionsOrLoose?`) => `boolean`

v1 > v2

#### 参数

##### v1

`string` | `SemVer`

##### v2

`string` | `SemVer`

##### optionsOrLoose?

`boolean` | `Options`

#### 返回

`boolean`

### inc()

> **inc**: \{(`version`, `release`, `optionsOrLoose?`, `identifier?`): `null` \| `string`; (`version`, `release`, `identifier?`, `identifierBase?`): `null` \| `string`; \}

#### 调用签名

> (`version`, `release`, `optionsOrLoose?`, `identifier?`): `null` \| `string`

Return the version incremented by the release type (major, premajor, minor, preminor, patch, prepatch, or prerelease), or null if it's not valid.

##### 参数

###### version

`string` | `SemVer`

###### release

`ReleaseType`

###### optionsOrLoose?

`boolean` | `Options`

###### identifier?

`string`

##### 返回

`null` \| `string`

#### 调用签名

> (`version`, `release`, `identifier?`, `identifierBase?`): `null` \| `string`

Return the version incremented by the release type (major, premajor, minor, preminor, patch, prepatch, or prerelease), or null if it's not valid.

##### 参数

###### version

`string` | `SemVer`

###### release

`ReleaseType`

###### identifier?

`string`

###### identifierBase?

`false` | `IdentifierBase`

##### 返回

`null` \| `string`

### isPrereleaseType()

> **isPrereleaseType**: (`value`) => `boolean`

Determines whether the specified value is a pre-release.

#### 参数

##### value

`ReleaseType`

#### 返回

`boolean`

### isReleaseType()

> **isReleaseType**: (`value`) => `boolean`

Determines whether the specified value is a valid ReleaseType string.

#### 参数

##### value

`ReleaseType`

#### 返回

`boolean`

### lt()

> **lt**: (`v1`, `v2`, `optionsOrLoose?`) => `boolean`

v1 < v2

#### 参数

##### v1

`string` | `SemVer`

##### v2

`string` | `SemVer`

##### optionsOrLoose?

`boolean` | `Options`

#### 返回

`boolean`

### originImportSemVer

> **originImportSemVer**: `__module`

### parse()

> **parse**: (`version`, `optionsOrLoose?`) => `null` \| `SemVer`

Return the parsed version as a SemVer object, or null if it's not valid.

#### 参数

##### version

`undefined` | `null` | `string` | `SemVer`

##### optionsOrLoose?

`boolean` | `Options`

#### 返回

`null` \| `SemVer`

### prerelease()

> **prerelease**: (`version`, `optionsOrLoose?`) => `null` \| readonly (`string` \| `number`)[]

Returns an array of prerelease components, or null if none exist.

#### 参数

##### version

`string` | `SemVer`

##### optionsOrLoose?

`boolean` | `Options`

#### 返回

`null` \| readonly (`string` \| `number`)[]

### satisfies()

> **satisfies**: (`version`, `range`, `optionsOrLoose?`) => `boolean`

Return true if the version satisfies the range.

#### 参数

##### version

`string` | `SemVer`

##### range

`string` | `Range`

##### optionsOrLoose?

`boolean` | `RangeOptions`

#### 返回

`boolean`

### valid()

> **valid**: (`version`, `optionsOrLoose?`) => `null` \| `string`

Return the parsed version as a string, or null if it's not valid.

#### 参数

##### version

`undefined` | `null` | `string` | `SemVer`

##### optionsOrLoose?

`boolean` | `Options`

#### 返回

`null` \| `string`
