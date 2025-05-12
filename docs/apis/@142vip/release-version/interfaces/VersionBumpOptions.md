[API 参考](../../../index.md) / [@142vip/release-version](../index.md) / VersionBumpOptions

# 接口: VersionBumpOptions

定义于: [enums/version-bump.interface.ts:5](https://github.com/142vip/core-x/blob/1eb80b292cacf818428b26e34edc36554f5c80fb/packages/release-version/src/enums/version-bump.interface.ts#L5)

## 属性

### all?

> `optional` **all**: `boolean`

定义于: [enums/version-bump.interface.ts:47](https://github.com/142vip/core-x/blob/1eb80b292cacf818428b26e34edc36554f5c80fb/packages/release-version/src/enums/version-bump.interface.ts#L47)

Indicates whether the git commit should include ALL files (`git commit --all`)
rather than just the files that were modified by `versionBump()`.

Defaults to `false`.

***

### changelog?

> `optional` **changelog**: `boolean`

定义于: [enums/version-bump.interface.ts:14](https://github.com/142vip/core-x/blob/1eb80b292cacf818428b26e34edc36554f5c80fb/packages/release-version/src/enums/version-bump.interface.ts#L14)

是否生成CHANGELOG.md文档

***

### commit?

> `optional` **commit**: `string` \| `boolean`

定义于: [enums/version-bump.interface.ts:26](https://github.com/142vip/core-x/blob/1eb80b292cacf818428b26e34edc36554f5c80fb/packages/release-version/src/enums/version-bump.interface.ts#L26)

指示是否创建 git 提交。可以设置为自定义提交消息字符串，默认是“true”
- 消息字符串中的任何 '%s' 占位符都将被替换为新版本号。
- 如果消息字符串不包含任何 '%s' 占位符，则新版本号将附加到消息中。

***

### confirm?

> `optional` **confirm**: `boolean`

定义于: [enums/version-bump.interface.ts:52](https://github.com/142vip/core-x/blob/1eb80b292cacf818428b26e34edc36554f5c80fb/packages/release-version/src/enums/version-bump.interface.ts#L52)

支持用户确认提示，默认：true

***

### currentVersion?

> `optional` **currentVersion**: `string`

定义于: [enums/version-bump.interface.ts:19](https://github.com/142vip/core-x/blob/1eb80b292cacf818428b26e34edc36554f5c80fb/packages/release-version/src/enums/version-bump.interface.ts#L19)

当前版本号

***

### cwd?

> `optional` **cwd**: `string`

定义于: [enums/version-bump.interface.ts:62](https://github.com/142vip/core-x/blob/1eb80b292cacf818428b26e34edc36554f5c80fb/packages/release-version/src/enums/version-bump.interface.ts#L62)

工作目录，用作查找所有文件的基础。默认：process.cwd()

***

### execute?

> `optional` **execute**: `string`

定义于: [enums/version-bump.interface.ts:73](https://github.com/142vip/core-x/blob/1eb80b292cacf818428b26e34edc36554f5c80fb/packages/release-version/src/enums/version-bump.interface.ts#L73)

在 bumping 之后和 commit 之前执行其他命令

***

### ignoreScripts?

> `optional` **ignoreScripts**: `boolean`

定义于: [enums/version-bump.interface.ts:68](https://github.com/142vip/core-x/blob/1eb80b292cacf818428b26e34edc36554f5c80fb/packages/release-version/src/enums/version-bump.interface.ts#L68)

指示是否忽略version版本脚本。默认：false

***

### preid?

> `optional` **preid**: `string`

定义于: [enums/version-bump.interface.ts:9](https://github.com/142vip/core-x/blob/1eb80b292cacf818428b26e34edc36554f5c80fb/packages/release-version/src/enums/version-bump.interface.ts#L9)

预发行类型（例如 “alpha”、“beta”、“next”），默认：“alpha”

***

### push?

> `optional` **push**: `boolean`

定义于: [enums/version-bump.interface.ts:39](https://github.com/142vip/core-x/blob/1eb80b292cacf818428b26e34edc36554f5c80fb/packages/release-version/src/enums/version-bump.interface.ts#L39)

是否推送 git commit 和 tag。默认：true

***

### recursive?

> `optional` **recursive**: `boolean`

定义于: [enums/version-bump.interface.ts:83](https://github.com/142vip/core-x/blob/1eb80b292cacf818428b26e34edc36554f5c80fb/packages/release-version/src/enums/version-bump.interface.ts#L83)

递归地为 monorepo 加载文件。仅在发布monorepo主模块时有效，默认false

***

### scopeName?

> `optional` **scopeName**: `string`

定义于: [enums/version-bump.interface.ts:78](https://github.com/142vip/core-x/blob/1eb80b292cacf818428b26e34edc36554f5c80fb/packages/release-version/src/enums/version-bump.interface.ts#L78)

monorepo模式下，指定模块名包名

***

### skipGitVerify?

> `optional` **skipGitVerify**: `boolean`

定义于: [enums/version-bump.interface.ts:57](https://github.com/142vip/core-x/blob/1eb80b292cacf818428b26e34edc36554f5c80fb/packages/release-version/src/enums/version-bump.interface.ts#L57)

指示是否绕过 git 提交钩子 （'git commit --no-verify'）。默认：false

***

### tag?

> `optional` **tag**: `string` \| `boolean`

定义于: [enums/version-bump.interface.ts:34](https://github.com/142vip/core-x/blob/1eb80b292cacf818428b26e34edc36554f5c80fb/packages/release-version/src/enums/version-bump.interface.ts#L34)

指示是否标记 git 提交。可以设置为自定义标签字符串，默认是“true”
- 标签字符串可以是自定义字符串，例如 'v%s'
- 标签字符串中的任何 '%s' 占位符都将被替换为新版本号
- 如果标签字符串不包含任何 '%s' 占位符，则新版本号将附加到标签中
