[API 参考](../../../index.md) / [@142vip/utils](../index.md) / VipInquirer

# 变量: VipInquirer

> `const` **VipInquirer**: `object`

定义于: [packages/utils/src/pkgs/inquirer.ts:179](https://github.com/142vip/core-x/blob/1eb80b292cacf818428b26e34edc36554f5c80fb/packages/utils/src/pkgs/inquirer.ts#L179)

终端交互

## 类型声明

### handleSimpleSearchSource()

> **handleSimpleSearchSource**: (`sources`) => `SimpleSearchSource`\<`string`\>

搜索源简单处理

#### 参数

##### sources

`string`[]

#### 返回

`SimpleSearchSource`\<`string`\>

### promptCheckBox()

> **promptCheckBox**: \<`T`\>(`message`, `choices`, `options?`) => `Promise`\<`T`[]\>

终端交互选择，多选
- https://github.com/SBoudrias/Inquirer.js/tree/main/packages/checkbox

#### 类型参数

##### T

`T` *extends* `string`

#### 参数

##### message

`string`

##### choices

`string`[] | `VipInquirerChoiceList`\<`T`\>

##### options?

`VipInquirerOptions`

#### 返回

`Promise`\<`T`[]\>

### promptConfirm()

> **promptConfirm**: (`message`, `defaultValue?`) => `Promise`\<`boolean`\>

终端交互确认，确认框，可配置默认值

#### 参数

##### message

`string`

##### defaultValue?

`boolean`

#### 返回

`Promise`\<`boolean`\>

### promptConfirmWithSuccessExit()

> **promptConfirmWithSuccessExit**: (`message`, `__namedParameters`) => `Promise`\<`void`\>

终端交互确认，支持安全退出、自定义信息

#### 参数

##### message

`string`

##### \_\_namedParameters

###### defaultValue?

`boolean`

###### exitMsg?

`string`

#### 返回

`Promise`\<`void`\>

### promptInput()

> **promptInput**: (`message`, `defaultValue?`) => `Promise`\<`string`\>

终端交互输入，输入框，可选
- https://github.com/SBoudrias/Inquirer.js/tree/main/packages/input

#### 参数

##### message

`string`

##### defaultValue?

`string`

#### 返回

`Promise`\<`string`\>

### promptInputRequired()

> **promptInputRequired**: (`message`) => `Promise`\<`string`\>

终端交互输入，输入框，必填
- https://github.com/SBoudrias/Inquirer.js/tree/main/packages/input

#### 参数

##### message

`string`

#### 返回

`Promise`\<`string`\>

### promptList()

> **promptList**: \<`T`\>(`message`, `choices`) => `Promise`\<`T`\>

终端交互选择，单选

#### 类型参数

##### T

`T` *extends* `string`

#### 参数

##### message

`string`

##### choices

`VipInquirerChoiceList`\<`T`\>

#### 返回

`Promise`\<`T`\>

### promptNumber()

> **promptNumber**: (`message`, `defaultValue?`) => `Promise`\<`undefined` \| `number`\>

输入框，只输入数字
- https://github.com/SBoudrias/Inquirer.js/tree/main/packages/number

#### 参数

##### message

`string`

##### defaultValue?

`number`

#### 返回

`Promise`\<`undefined` \| `number`\>

### promptPassword()

> **promptPassword**: (`message`) => `Promise`\<`string`\>

输入框，隐藏输入
- https://github.com/SBoudrias/Inquirer.js/tree/main/packages/password

#### 参数

##### message

`string`

#### 返回

`Promise`\<`string`\>

### promptSearch()

> **promptSearch**: \<`T`\>(`message`, `source`, `pageSize?`) => `Promise`\<`T`\>

搜索框
- https://github.com/SBoudrias/Inquirer.js/tree/main/packages/search

#### 类型参数

##### T

`T` *extends* `string`

#### 参数

##### message

`string`

##### source

`SearchSource`\<`T`\>

##### pageSize?

`number`

#### 返回

`Promise`\<`T`\>

### promptSelect()

> **promptSelect**: \<`T`\>(`message`, `choices`, `options?`) => `Promise`\<`T`\>

选择框，必选选择框
- https://github.com/SBoudrias/Inquirer.js/tree/main/packages/select

#### 类型参数

##### T

`T` *extends* `string`

#### 参数

##### message

`string`

##### choices

`string`[] | `VipInquirerChoiceList`\<`T`\>

##### options?

`VipInquirerOptions`

#### 返回

`Promise`\<`T`\>
