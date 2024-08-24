# Changelog

All notable changes to this project will be documented in this file. See [commit-and-tag-version](https://github.com/absolute-version/commit-and-tag-version) for commit guidelines.

## v0.0.1-alpha.9 (2024-08-24)

### ✨ Features

- 移除`@esm2cjs/execa`模块，提升`inquirer`依赖 &nbsp;-&nbsp; by **chufan** [<samp>(bdcc0)</samp>](https://github.com/142vip/core-x/commit/bdcc021)
- 移除`commit-and-tag-version`、`enquirer`模块 &nbsp;-&nbsp; by **chufan** [<samp>(48b1e)</samp>](https://github.com/142vip/core-x/commit/48b1e57)
- 统一README文档中的证书说明，支持`142vip`的MIT证书 &nbsp;-&nbsp; by **chufan** [<samp>(3cf41)</samp>](https://github.com/142vip/core-x/commit/3cf4113)
- 引入`simple-git-hooks`模块，支持`git commit`时触发钩子进行代码校验 &nbsp;-&nbsp; by **chufan** [<samp>(fcdf3)</samp>](https://github.com/142vip/core-x/commit/fcdf3c8)
- **@142vip/axios**:
  - 模块初始化，支持`method`等枚举导出 &nbsp;-&nbsp; by **chufan** [<samp>(462d6)</samp>](https://github.com/142vip/core-x/commit/462d60e)
- **@142vip/changelog**:
  - 移除`@antfu/utils`模块，采用原生ts实现函数功能 &nbsp;-&nbsp; by **chufan** [<samp>(3dcb1)</samp>](https://github.com/142vip/core-x/commit/3dcb175)
  - 移除`dayjs`模块，原生实现时间格式化 &nbsp;-&nbsp; by **chufan** [<samp>(60187)</samp>](https://github.com/142vip/core-x/commit/6018782)
- **@142vip/egg-sequelize**:
  - 搭建基本模块结构、调整代码编译、打包策略 &nbsp;-&nbsp; by **chufan** [<samp>(fed4d)</samp>](https://github.com/142vip/core-x/commit/fed4d65)
- **@142vip/fairy-cli**:
  - 移除`cnpm`模块，基于api实现，支持npm包同步到cnpm平台上 &nbsp;-&nbsp; by **chufan** [<samp>(92eaa)</samp>](https://github.com/142vip/core-x/commit/92eaa4c)
  - `release`命令增加`--vip`等参数，支持`cli`交互式选择发布的模块和版本 &nbsp;-&nbsp; by **chufan** [<samp>(d2694)</samp>](https://github.com/142vip/core-x/commit/d26941d)
  - 优化`versionBump`参数，支持提交`commit`信息和`push`远程仓库 &nbsp;-&nbsp; by **微信公众号：储凡** and **chufan** in https://github.com/142vip/core-x/issues/64 [<samp>(a5bf5)</samp>](https://github.com/142vip/core-x/commit/a5bf5fa)
  - 修正`CHANGELOG`文档，优化`release`命令支持版本名称`markdown`显示 &nbsp;-&nbsp; by **chufan** [<samp>(77678)</samp>](https://github.com/142vip/core-x/commit/7767850)
  - 移除`inquirer`模块，`release`命令有限`check-release`逻辑，日志格式调整 &nbsp;-&nbsp; by **chufan** [<samp>(5e56c)</samp>](https://github.com/142vip/core-x/commit/5e56c42)
  - 丰富`TS`类型，增加`branch`参数，默认从`next`分支获取`commit`信息，增加`release`交互全局错误捕获 &nbsp;-&nbsp; by **chufan** [<samp>(c2793)</samp>](https://github.com/142vip/core-x/commit/c2793ad)
  - 修复`release`根模块时`tag`功能触发异常 &nbsp;-&nbsp; by **微信公众号：储凡** [<samp>(468c4)</samp>](https://github.com/142vip/core-x/commit/468c4bd)
- **@142vip/release-version**:
  - 优化`CHANGELOG`文档存储目录，基于`cwd`参数生成目录绝对路径 &nbsp;-&nbsp; by **微信公众号：储凡** and **chufan** in https://github.com/142vip/core-x/issues/63 [<samp>(dede7)</samp>](https://github.com/142vip/core-x/commit/dede731)
- **Eslint**:
  - 优化`ignores`配置，开启`json`和`markdown`校验 &nbsp;-&nbsp; by **chufan** [<samp>(61e9c)</samp>](https://github.com/142vip/core-x/commit/61e9c07)
- **Github Actions**:
  - 优化`npm release`流水线，只正对更新的`package`进行发布更新 &nbsp;-&nbsp; by **chufan** [<samp>(608ec)</samp>](https://github.com/142vip/core-x/commit/608eca2)

### 🔥 Performance

- 移除`scripts`目录下`release`脚本，`package.json`文件的`scripts`配置新增`release:check`和`release`命令 &nbsp;-&nbsp; by **chufan** [<samp>(de840)</samp>](https://github.com/142vip/core-x/commit/de84004)
- **Github Actions**:
  - 移除`lint`脚本，统一在用`package.json`中配置`link`、`lint:fix`命令 &nbsp;-&nbsp; by **微信公众号：储凡** in https://github.com/142vip/core-x/issues/62 [<samp>(05439)</samp>](https://github.com/142vip/core-x/commit/05439f0)

### 🐛 Bug Fixes

- **@142vip/changelog**:
  - 修复子模块`CHANGELOG`文档变更记录冲突的问题 &nbsp;-&nbsp; by **chufan** [<samp>(19873)</samp>](https://github.com/142vip/core-x/commit/1987368)
- **@142vip/fairy-cli**:
  - 修复`lint`命令，支持`--fix`参数配置自动修复代码 &nbsp;-&nbsp; by **chufan** [<samp>(76472)</samp>](https://github.com/142vip/core-x/commit/7647248)

### 💅 Refactors

- **@142vip/changelog**:
  - 模块结构调整，优化工具函数的实现和调用链路 &nbsp;-&nbsp; by **chufan** [<samp>(64f1b)</samp>](https://github.com/142vip/core-x/commit/64f1bff)
- **@142vip/fairy-cli**:
  - 模块结构调整，简化导出代码和cli处理流程 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/52 [<samp>(dfac2)</samp>](https://github.com/142vip/core-x/commit/dfac2c5)

### 😏 Release Packages

- **@142vip/axios**:
  - Publish `v0.0.1-alpha.1` &nbsp;-&nbsp; by **chufan** [<samp>(f8129)</samp>](https://github.com/142vip/core-x/commit/f812918)
- **@142vip/changelog**:
  - Publish `v0.0.1-alpha.5` &nbsp;-&nbsp; by **chufan** [<samp>(99211)</samp>](https://github.com/142vip/core-x/commit/9921170)
  - Publish `v0.0.1-alpha.6` &nbsp;-&nbsp; by **chufan** [<samp>(14967)</samp>](https://github.com/142vip/core-x/commit/1496719)
- **@142vip/egg-sequelize**:
  - Publish `v0.0.1-alpha.1` &nbsp;-&nbsp; by **chufan** [<samp>(e3c83)</samp>](https://github.com/142vip/core-x/commit/e3c8393)
- **@142vip/fairy-cli**:
  - Publish `v0.0.3-alpha.2` &nbsp;-&nbsp; by **chufan** [<samp>(b5b20)</samp>](https://github.com/142vip/core-x/commit/b5b20e1)
  - Publish `v0.0.3-alpha.3` &nbsp;-&nbsp; by **chufan** [<samp>(d8d59)</samp>](https://github.com/142vip/core-x/commit/d8d59fb)
  - Publish `v0.0.3-alpha.4` &nbsp;-&nbsp; by **chufan** [<samp>(81436)</samp>](https://github.com/142vip/core-x/commit/81436f5)
  - Publish `v0.0.3-alpha.5` &nbsp;-&nbsp; by **chufan** [<samp>(233b7)</samp>](https://github.com/142vip/core-x/commit/233b72f)
  - Publish `v0.0.3-alpha.6` &nbsp;-&nbsp; by **chufan** [<samp>(c51c7)</samp>](https://github.com/142vip/core-x/commit/c51c7b6)
- **@142vip/release-version**:
  - Publish `v0.0.1-alpha.7` &nbsp;-&nbsp; by **chufan** [<samp>(269a8)</samp>](https://github.com/142vip/core-x/commit/269a8f7)

**Release New Version v0.0.1-alpha.9 [👉 View Changes On GitHub](https://github.com/142vip/core-x/compare/v0.0.1-alpha.8...v0.0.1-alpha.9)**

## v0.0.1-alpha.8 (2024-08-07)

### ✨ Features

- `Packages`中的各模块增加`homepage`等信息 &nbsp;-&nbsp; by **chufan** [<samp>(b0df1)</samp>](https://github.com/142vip/core-x/commit/b0df105)
- **@142vip/changelog**:
  - 修改默认配置，`CHANGELOG`文档支持`release`类型提交 &nbsp;-&nbsp; by **chufan** [<samp>(29f00)</samp>](https://github.com/142vip/core-x/commit/29f00d1)
- **Github Actions**:
  - 新增`release`流水线，自动发布到`npm`平台 &nbsp;-&nbsp; by **chufan** [<samp>(7a75c)</samp>](https://github.com/142vip/core-x/commit/7a75cf9)

### 🔥 Performance

- **@142vip/release-version**:
  - 修复一些语法问题，使用更好的代码风格 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/44 [<samp>(fc7de)</samp>](https://github.com/142vip/core-x/commit/fc7defc)

### 🐛 Bug Fixes

- **Github Actions**:
  - 修复`release`发布异常，支持自动发布`npm`包 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/45 [<samp>(d4263)</samp>](https://github.com/142vip/core-x/commit/d426349)

### 💅 Refactors

- **@142vip/changelog**:
  - 结构调整，移除`cac`等模块，替换为`commander`模块 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/47 [<samp>(a828b)</samp>](https://github.com/142vip/core-x/commit/a828b4c)

### 📖 Documentation

- 优化目录结构，搜索功能接入`algolia`平台 &nbsp;-&nbsp; by **chufan** [<samp>(234a2)</samp>](https://github.com/142vip/core-x/commit/234a2da)

### 😏 Release Packages

- **@142vip/changelog**:
  - Publish `v0.0.1-alpha.4` &nbsp;-&nbsp; by **chufan** [<samp>(4fc81)</samp>](https://github.com/142vip/core-x/commit/4fc81e2)
- **@142vip/release-version**:
  - Publish `v0.0.1-alpha.6` &nbsp;-&nbsp; by **chufan** [<samp>(70953)</samp>](https://github.com/142vip/core-x/commit/7095387)

**Release New Version v0.0.1-alpha.8 [👉 View Changes On GitHub](https://github.com/142vip/core-x/compare/v0.0.1-alpha.7...v0.0.1-alpha.8)**

## v0.0.1-alpha.7 (2024-08-03)

### ✨ Features

- 优化`release`脚本，支持子模块版本发布 &nbsp;-&nbsp; by **chufan** [<samp>(3d721)</samp>](https://github.com/142vip/core-x/commit/3d721c5)
- 移除`lerna-lite`模块，修改对应的`version`和`publish`配置 &nbsp;-&nbsp; by **chufan** [<samp>(5db2a)</samp>](https://github.com/142vip/core-x/commit/5db2a78)
- 删除`lerna`配置和依赖，使用`pnpm exec`替代模块命令执行 &nbsp;-&nbsp; by **chufan** [<samp>(47329)</samp>](https://github.com/142vip/core-x/commit/473294a)
- **@142vip/changelog**:
  - 支持`monorepo`模式下，基于`scopeName`参数生成子模块的`CHANGELOG`文档 &nbsp;-&nbsp; by **chufan** [<samp>(cd7af)</samp>](https://github.com/142vip/core-x/commit/cd7afb1)
- **@142vip/release-version**:
  - 新增`scopeName`可选参数，支持在`Monorepo`模式下发布子模块版本、更新`CHANGELOG`文档 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/39 [<samp>(9f183)</samp>](https://github.com/142vip/core-x/commit/9f18339)

**Release New Version v0.0.1-alpha.7 [👉 View Changes On GitHub](https://github.com/142vip/core-x/compare/v0.0.1-alpha.6...v0.0.1-alpha.7)**

## v0.0.1-alpha.6 (2024-08-02)

### ✨ Features

- `Packages`下的模块统一新增publishConfig配置 &nbsp;-&nbsp; by **chufan** [<samp>(47217)</samp>](https://github.com/142vip/core-x/commit/47217d2)
- 移除`changelogPreset`配置，支持`bumpx`的发布流程 &nbsp;-&nbsp; by **chufan** [<samp>(01a66)</samp>](https://github.com/142vip/core-x/commit/01a66d9)
- 各模块增加`files`配置，限定`npm`包发布文件 &nbsp;-&nbsp; by **chufan** [<samp>(4edbe)</samp>](https://github.com/142vip/core-x/commit/4edbe15)
- 修改`npmrc`配置，支持`pnpm publish`发布多模块时预检 &nbsp;-&nbsp; by **chufan** [<samp>(0ca59)</samp>](https://github.com/142vip/core-x/commit/0ca5911)
- **@142vip/fairy-cli**:
  - 新增`sync`命令，支持`npm`包同步到`cnpm`仓库 &nbsp;-&nbsp; by **微信公众号：储凡** in https://github.com/142vip/core-x/issues/37 [<samp>(9509e)</samp>](https://github.com/142vip/core-x/commit/9509eac)
- **@142vip/release-version**:
  - 移除`@jsdevtools/ez-spawn`模块，使用`execShell`函数执行命令 &nbsp;-&nbsp; by **chufan** [<samp>(6c572)</samp>](https://github.com/142vip/core-x/commit/6c57236)

### 🔥 Performance

- 升级`pnpm`版本到`9.6.0`，支持`Node.js`版本`18.x` &nbsp;-&nbsp; by **chufan** [<samp>(e48a8)</samp>](https://github.com/142vip/core-x/commit/e48a80a)
- **@142vip/fairy-cli**:
  - 升级代码模块的引入 &nbsp;-&nbsp; by **chufan** [<samp>(fe950)</samp>](https://github.com/142vip/core-x/commit/fe950b6)

### 🐛 Bug Fixes

- **@142vip/release-version**:
  - 修复`commit`和`tag`操作异常 &nbsp;-&nbsp; by **chufan** [<samp>(69f3b)</samp>](https://github.com/142vip/core-x/commit/69f3b1e)

**Release New Version v0.0.1-alpha.6 [👉 View Changes On GitHub](https://github.com/142vip/core-x/compare/v0.0.1-alpha.5...v0.0.1-alpha.6)**

## v0.0.1-alpha.5 (2024-07-26)

### ✨ Features

- 在`monorepo`配置中移除`docs`项目，静态文档作为根目录处理 &nbsp;-&nbsp; by **chufan** [<samp>(31060)</samp>](https://github.com/142vip/core-x/commit/3106033)
- 新增`issues`和`pr`配置，更新文档 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/30 [<samp>(87efa)</samp>](https://github.com/142vip/core-x/commit/87efadc)
- **@142vip/fairy-cli**:
  - 拓展`cli`工具，支持`install`、`login`等命令 &nbsp;-&nbsp; by **chufan** [<samp>(798ff)</samp>](https://github.com/142vip/core-x/commit/798ff87)
  - 移除`unbuild`等重复依赖，复用根目录依赖 &nbsp;-&nbsp; by **chufan** [<samp>(92eb3)</samp>](https://github.com/142vip/core-x/commit/92eb3ea)

### 🔥 Performance

- 删除`script`冗余脚本，优化`sync`脚本逻辑 &nbsp;-&nbsp; by **chufan** [<samp>(3c18c)</samp>](https://github.com/142vip/core-x/commit/3c18ced)
- 移除`docker`构建相关配置和忽略文件 &nbsp;-&nbsp; by **chufan** [<samp>(0257d)</samp>](https://github.com/142vip/core-x/commit/0257d4c)
- **@142vip/changelog**:
  - 移除未使用到的开发依赖，统一依赖版本 &nbsp;-&nbsp; by **chufan** [<samp>(95cfc)</samp>](https://github.com/142vip/core-x/commit/95cfc50)

### 🐛 Bug Fixes

- **@142vip/changelog**:
  - 修复流水线执行成功，程序非0异常退出 &nbsp;-&nbsp; by **chufan** [<samp>(f99ea)</samp>](https://github.com/142vip/core-x/commit/f99ea7a)

### 📖 Documentation

- 修改文档，删除冗余内容 &nbsp;-&nbsp; by **chufan** [<samp>(edfb8)</samp>](https://github.com/142vip/core-x/commit/edfb8ea)

**Release New Version v0.0.1-alpha.5 [👉 View Changes On GitHub](https://github.com/142vip/core-x/compare/v0.0.1-alpha.4...v0.0.1-alpha.5)**

## v0.0.1-alpha.4 (2024-07-25)

### ✨ Features

- 关闭`markdown`格式校验，忽略`antfu/no-import-dist`校验 &nbsp;-&nbsp; by **chufan** [<samp>(43552)</samp>](https://github.com/142vip/core-x/commit/43552da)
- 移除`markdown-cli`模块，使用`eslint`校验文档格式 &nbsp;-&nbsp; by **chufan** [<samp>(938ab)</samp>](https://github.com/142vip/core-x/commit/938ab79)

### 🐛 Bug Fixes

- **@142vip/changelog**:
  - 修复预发布标签验证异常导致`CI`执行失败 &nbsp;-&nbsp; by **chufan** [<samp>(cbe8d)</samp>](https://github.com/142vip/core-x/commit/cbe8df1)

### 💅 Refactors

- **@142vip/fairy-cli**:
  - 调整模块代码结构，易于维护、补充文档 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/18 [<samp>(1d61d)</samp>](https://github.com/142vip/core-x/commit/1d61d30)

### 📖 Documentation

- 更新静态网站，新增团队成员和一些功能说明 &nbsp;-&nbsp; by **chufan** [<samp>(5baf4)</samp>](https://github.com/142vip/core-x/commit/5baf4a4)

**Release New Version v0.0.1-alpha.4 [👉 View Changes On GitHub](https://github.com/142vip/core-x/compare/v0.0.1-alpha.3...v0.0.1-alpha.4)**

## v0.0.1-alpha.3 (2024-07-24)

### ✨ Features

- `Markdown`文件校验忽略C`HANGELOG` &nbsp;-&nbsp; by **chufan** [<samp>(3cbce)</samp>](https://github.com/142vip/core-x/commit/3cbce8b)

### 🐛 Bug Fixes

- **@142vip/changelog**:
  - 修复`scope`信息存在时，单条`commit`信息分类打印异常 &nbsp;-&nbsp; by **chufan** [<samp>(1c8c5)</samp>](https://github.com/142vip/core-x/commit/1c8c544)
  - 新增`defineChangelogDefaultConfig`函数，支持`changelog`关键字配置文件 &nbsp;-&nbsp; by **chufan** [<samp>(1f25d)</samp>](https://github.com/142vip/core-x/commit/1f25da0)
  - 新增`scopeName`参数，支持`monorepo`的模块生成`CHANGELOG`文档 &nbsp;-&nbsp; by **chufan** [<samp>(14ca6)</samp>](https://github.com/142vip/core-x/commit/14ca631)

**Release New Version v0.0.1-alpha.3 [👉 View Changes On GitHub](https://github.com/142vip/core-x/compare/v0.0.1-alpha.2...v0.0.1-alpha.3)**

## v0.0.1-alpha.2 (2024-07-24)

### ✨ Features

- 支持自动化`Release`流程，发布新版本 &nbsp;-&nbsp; by **chufan** [<samp>(79bb9)</samp>](https://github.com/142vip/core-x/commit/79bb926)
- **@142vip/release-version**:
  - 使用`execShell`函数 &nbsp;-&nbsp; by **chufan** [<samp>(8f8d7)</samp>](https://github.com/142vip/core-x/commit/8f8d793)

**Release New Version v0.0.1-alpha.2 [👉 View Changes On GitHub](https://github.com/142vip/core-x/compare/v0.0.1-alpha.1...v0.0.1-alpha.2)**

## v0.0.1-alpha.1 (2024-07-24)

### ✨ Features

- 删除`clean`脚本，支持脚手架实现删除 &nbsp;-&nbsp; by **chufan** [<samp>(6b76d)</samp>](https://github.com/142vip/core-x/commit/6b76dae)
- 增加各模块配置，支持`build`命令 &nbsp;-&nbsp; by **chufan** [<samp>(2f6d3)</samp>](https://github.com/142vip/core-x/commit/2f6d3b5)
- 新增`docs`文档，静态页面搭建 &nbsp;-&nbsp; by **chufan** [<samp>(6e84f)</samp>](https://github.com/142vip/core-x/commit/6e84fd1)
- 插件相关文档更新，丰富配置 &nbsp;-&nbsp; by **chufan** [<samp>(48bdf)</samp>](https://github.com/142vip/core-x/commit/48bdfe2)
- 依赖更新，支持`docs`项目管理，配置.vite忽略 &nbsp;-&nbsp; by **chufan** [<samp>(49851)</samp>](https://github.com/142vip/core-x/commit/49851de)
- 官方文档支持`CI`自动化部署 &nbsp;-&nbsp; by **142vip.cn** in <https://github.com/142vip/core-x/issues/11> [<samp>(5a786)</samp>](https://github.com/142vip/core-x/commit/5a786d3)
- 文档网站内容更新，优化模块包 &nbsp;-&nbsp; by **chufan** [<samp>(80903)</samp>](https://github.com/142vip/core-x/commit/80903ea)
- **@142vip/changelog**:
  - 支持自定义版本名称 &nbsp;-&nbsp; by **chufan** [<samp>(e062c)</samp>](https://github.com/142vip/core-x/commit/e062c06)
- **@142vip/fairy-cli**:
  - 搭建基本结构，增加部分逻辑 &nbsp;-&nbsp; by **chufan** [<samp>(44f43)</samp>](https://github.com/142vip/core-x/commit/44f43f8)
  - 增加`clean`命令，支持在当前目录下指定删除 &nbsp;-&nbsp; by **chufan** [<samp>(be939)</samp>](https://github.com/142vip/core-x/commit/be939b2)
  - 支持`turbo`可选参数，删除`turbo`构建目录 &nbsp;-&nbsp; by **chufan** [<samp>(7ba7b)</samp>](https://github.com/142vip/core-x/commit/7ba7be9)
  - 支持`vite`缓存目录删除，增加`--vite`参数 &nbsp;-&nbsp; by **chufan** [<samp>(0fb42)</samp>](https://github.com/142vip/core-x/commit/0fb42bb)
  - 支持原生`exec`命令 &nbsp;-&nbsp; by **142vip.cn** in <https://github.com/142vip/core-x/issues/8> [<samp>(2e296)</samp>](https://github.com/142vip/core-x/commit/2e29629)
  - 支持`turbo`命令，简化`dev`、`build`的使用 &nbsp;-&nbsp; by **chufan** [<samp>(bad23)</samp>](https://github.com/142vip/core-x/commit/bad23ce)
  - 模块包内增加`turbo`依赖，删除全局turbo依赖 &nbsp;-&nbsp; by **chufan** [<samp>(a36b4)</samp>](https://github.com/142vip/core-x/commit/a36b40b)
- **@142vip/release-version**:
  - 搭建基础框架，新增部分功能 &nbsp;-&nbsp; by **chufan** [<samp>(29346)</samp>](https://github.com/142vip/core-x/commit/2934667)
  - 支持`bumpx`多种配置文件格式 &nbsp;-&nbsp; by **chufan** [<samp>(16a55)</samp>](https://github.com/142vip/core-x/commit/16a5540)
- **@142vip/vitepress**:
  - 新增组件，支持`i18n`和基础配置 &nbsp;-&nbsp; by **chufan** [<samp>(770fd)</samp>](https://github.com/142vip/core-x/commit/770fddf)
- **changelog**:
  - 修改`md`文案 &nbsp;-&nbsp; by **chufan** [<samp>(a2793)</samp>](https://github.com/142vip/core-x/commit/a2793cf)
  - 测`scope` &nbsp;-&nbsp; by **chufan** [<samp>(81283)</samp>](https://github.com/142vip/core-x/commit/8128340)
  - 支持多模块生成日志文档 &nbsp;-&nbsp; by **chufan** [<samp>(f4e42)</samp>](https://github.com/142vip/core-x/commit/f4e420e)

### 🔥 Performance

- 升级依赖和脚本 &nbsp;-&nbsp; by **chufan** [<samp>(eba2b)</samp>](https://github.com/142vip/core-x/commit/eba2b91)

### 🐛 Bug Fixes

- 修复官方文档部署异常，新增部分链接 &nbsp;-&nbsp; by **chufan** [<samp>(46ab1)</samp>](https://github.com/142vip/core-x/commit/46ab19a)

### 💅 Refactors

- **@142vip/release-version**:
  - 结构与编码风格优化，配置`bumpx`命令 &nbsp;-&nbsp; by **chufan** [<samp>(3680d)</samp>](https://github.com/142vip/core-x/commit/3680d42)
  - 结构调整，简化代码，优化逻辑流程 &nbsp;-&nbsp; by **chufan** [<samp>(d61f4)</samp>](https://github.com/142vip/core-x/commit/d61f4c7)

### 📖 Documentation

- 修改文档模块，支持项目包启动 &nbsp;-&nbsp; by **chufan** [<samp>(e439a)</samp>](https://github.com/142vip/core-x/commit/e439a04)
- **@142vip/fairy-cli**: 
  - 更新基础文档 &nbsp;-&nbsp; by **chufan** [<samp>(96155)</samp>](https://github.com/142vip/core-x/commit/96155dc)

**Release New Version v0.0.1-alpha.1 [👉 View Changes On GitHub](https://github.com/142vip/core-x/compare/v0.0.1-alpha.0...v0.0.1-alpha.1)**
