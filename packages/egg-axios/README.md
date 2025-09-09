# @142vip/egg-axios

[![NPM version](https://img.shields.io/npm/v/@142vip/egg-axios?labelColor=0b3d52&color=1da469&label=version)](https://www.npmjs.com/package/@142vip/egg-axios)

`Egg.js`框架下使用`@142vip/axios`的插件，简化`Http`请求配置

## 安装

```bash
# npm
npm i @142vip/axios
# pnpm
pnpm i @142vip/egg-axios
```

## 配置

### 单实例
```js
// config/config.xxx.js
module.exports = {
  axios: {
    client: {
      headers: {
        common: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
      },
      timeout: 6000,
    },
  }
}
```

### 多个实例

```js
// config/config.xxx.js
module.exports = {
  axios: {
    clients: {
      axios1: {
        headers: {
          common: {
            'Content-Type': 'application/json; charset=UTF-8',
          },
        },
        timeout: 7000,
        instanceName: 'axios1',
      },
      axios2: {
        headers: {
          common: {
            'Content-Type': 'application/json; charset=UTF-8',
          },
        },
        timeout: 8000,
        instanceName: 'axios2',
      },
    },
    // 所有实例的默认配置，可选
    default: {
      timeout: 5000,
    },
  }
}
```

## 使用

在`plugin.js`文件中，加载`@142vip/egg-axios`插件：

```js
// config/plugin.js
module.exports = {
  axios: {
    enable: true,
    package: '@142vip/egg-axios',
  },
}
```

使用`egg-axios`插件时，会在`app`上挂载`axios`对象，该对象除了提供自带的构造函数、方法外，还另外挂载了三个方法：

- `getInstance: (name?: string) => T | undefined`
- `getInstances: () => Record<string, T>`
- `getInstanceNames: () => string[]`

```ts
export interface EggPluginInstance<T> {
  /**
   * 获取实例对象
   * @param name 实例名称
   * - 多实例，默认获取第一个实例
   * @returns 实例
   */
  getInstance: (name?: string) => T | undefined
  /**
   * 获取所有实例
   * - 默认实例和单实例，对象中对应Key为`default`
   * - 多实例，对象中对应Key为实例名称
   * @returns 所有实例配置key与实例对象组成的键值对
   */
  getInstances: () => Record<string, T>
  /**
   * 获取所有实例名称
   * - 默认实例和单实例，返回: ['default']
   * - 多实例，返回: 实例名称数组，例如: ['axios1','axios2']
   * @returns 所有实例名称
   */
  getInstanceNames: () => string[]
}
```
### 默认实例

在`egg`项目中，如果只加载了`@142vip/egg-axios`插件，没有在`config.xx.js`配置文件中增加`axios`关键字配置，会加载插件默认配置：

```js
const { defaultRequestInterceptor, defaultResponseInterceptor } = require('@142vip/axios')
const { defaultPluginConfig } = require('@142vip/egg')
const { name: pkgName } = require('../package.json')

module.exports = {
  axios: defaultPluginConfig(pkgName, {
    default: {
      requestInterceptorsHandler: defaultRequestInterceptor,
      responseInterceptorsHandler: defaultResponseInterceptor,
      timeout: 5 * 1000,
    },
    client: {},
  }),
}
```
此时，在`app`上挂载的`axios`对象，就是默认实例。获取默认实例：

```js
// 直接获取
this.app.axios
// 通过方法获取
this.app.axios.getInstance()
```

### 单实例

单实例配置：

```js
// config/config.xxx.js
module.exports = {
  axios: {
    client: {
      headers: {
        common: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
      },
      timeout: 6000,
    },
  }
}
```

因为只挂载一个实例，可以像默认配置那样，基于`axios`对象或者`getInstance`方法获取实例：

```js
class EggAxiosController extends Controller {
  /**
   * 获取挂载的单实例
   */
  async getSimpleInstance() {
    const { app } = this

    // 直接获取
    this.app.axios
    // 通过方法获取
    this.app.axios.getInstance()
    await app.axios.getInstance()
  }
}
```

### 多实例

多实例配置：

```js
module.exports = {
  axios: {
    clients: {
      axios1: {
        headers: {
          common: {
            'Content-Type': 'application/json; charset=UTF-8',
          },
        },
        timeout: 7000,
        instanceName: 'axios1',
      },
      axios2: {
        headers: {
          common: {
            'Content-Type': 'application/json; charset=UTF-8',
          },
        },
        timeout: 8000,
        instanceName: 'axios2',
      },
    },
  }
}
```

由于插件挂载了多个`axios`实例，在获取实例时，只能通过实例名称获取。

```js
class EggAxiosController extends Controller {
  /**
   * 获取挂载的多个实例
   */
  async getMultipleInstance() {
    const { app } = this
    const axios1Instance = await app.axios.getInstance('axios1')
    const axios2Instance = await app.axios.getInstance('axios2')
    // xxx...
  }
}
```

## 单元测试

- [默认配置测试](../../apps/egg-demo/test/egg-axios/config.spec.ts)
- [单实例配置测试](../../apps/egg-demo/test/egg-axios/simple-instance.spec.ts)
- [多实例配置测试](../../apps/egg-demo/test/egg-axios/multiple-instance.spec.ts)
- [测试单实例](../../apps/egg-demo/test/egg-axios/simple-instance.spec.ts)
- [测试多实例](../../apps/egg-demo/test/egg-axios/multiple-instance.spec.ts)

## 参考

- [@142vip/axios 仓库](https://github.com/142vip/axios)
- [axios Github仓库](https://github.com/axios/axios)
- [axios NPM仓库](https://www.npmjs.com/package/axios)
- [axios 中文文档](https://www.axios-http.cn/docs/intro)

## 证书

[MIT](https://opensource.org/license/MIT)

Copyright (c) 2019-present, @142vip 储凡
