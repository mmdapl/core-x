# @142vip/egg

[![NPM version](https://img.shields.io/npm/v/@142vip/egg?labelColor=0b3d52&color=1da469&label=version)](https://www.npmjs.com/package/@142vip/egg)

`Egg.js`框架二次封装，提供常用工具，约定开发规范

## 安装

```shell
# npm
npm i @142vip/egg
# pnpm
pnpm i @142vip/egg
```

## 使用

### 插件

以注册`@142vip/egg-axios`插件为例：
```js
class EggAxiosAgentBoot extends EggPluginBoot {
  constructor(app) {
    super({
      pluginName: RegisterEggPluginName.EGG_AXIOS,
      appOrAgent: app,
      createEggPluginInstance: createEggAxiosInstance,
    })
  }
}

module.exports = EggAxiosAgentBoot
```

### 配置

以合并插件配置为例：
```js
const { mergeConfig } = require('@142vip/egg')

const defaultConfig = {
  axios: {
    baseURL: 'https://api.142vip.com',
  },
}

const pluginConfig = {
  axios: {
    baseURL: 'https://api.142vip.com/v2',
  },
}

const config = mergeConfig(defaultConfig, pluginConfig)
```

## 证书

[MIT](https://opensource.org/license/MIT)

Copyright (c) 2019-present, @142vip 储凡
