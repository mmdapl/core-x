# Changelog

All notable changes to this project will be documented in this file. See [commit-and-tag-version](https://github.com/absolute-version/commit-and-tag-version) for commit guidelines.

## v0.0.1-alpha.2 (2024-07-24)

### ✨ Features

- 支持自动化Release流程，发布新版本 &nbsp;-&nbsp; by **chufan** [<samp>(79bb9)</samp>](https://github.com/142vip/core-x/commit/79bb926)
- **@142vip/release-version**: 使用execShell函数 &nbsp;-&nbsp; by **chufan** [<samp>(8f8d7)</samp>](https://github.com/142vip/core-x/commit/8f8d793)

**Release New Version v0.0.1-alpha.2 [👉 View Changes On GitHub](https://github.com/142vip/core-x/compare/v0.0.1-alpha.1...v0.0.1-alpha.2)**

## v0.0.1-alpha.1 (2024-07-24)

### ✨ Features

- 删除clean脚本，支持脚手架实现删除 &nbsp;-&nbsp; by **chufan** [<samp>(6b76d)</samp>](https://github.com/142vip/core-x/commit/6b76dae)
- 增加各模块配置，支持build命令 &nbsp;-&nbsp; by **chufan** [<samp>(2f6d3)</samp>](https://github.com/142vip/core-x/commit/2f6d3b5)
- 新增docs文档，静态页面搭建 &nbsp;-&nbsp; by **chufan** [<samp>(6e84f)</samp>](https://github.com/142vip/core-x/commit/6e84fd1)
- 插件相关文档更新，丰富配置 &nbsp;-&nbsp; by **chufan** [<samp>(48bdf)</samp>](https://github.com/142vip/core-x/commit/48bdfe2)
- 依赖更新，支持docs项目管理，配置.vite忽略 &nbsp;-&nbsp; by **chufan** [<samp>(49851)</samp>](https://github.com/142vip/core-x/commit/49851de)
- 官方文档支持CI 自动化部署 &nbsp;-&nbsp; by **142vip.cn** in <https://github.com/142vip/core-x/issues/11> [<samp>(5a786)</samp>](https://github.com/142vip/core-x/commit/5a786d3)
- 文档网站内容更新，优化模块包 &nbsp;-&nbsp; by **chufan** [<samp>(80903)</samp>](https://github.com/142vip/core-x/commit/80903ea)
- **@142vip/changelog**:
  - 支持自定义版本名称 &nbsp;-&nbsp; by **chufan** [<samp>(e062c)</samp>](https://github.com/142vip/core-x/commit/e062c06)
- **@142vip/fairy-cli**:
  - 搭建基本结构，增加部分逻辑 &nbsp;-&nbsp; by **chufan** [<samp>(44f43)</samp>](https://github.com/142vip/core-x/commit/44f43f8)
  - 增加clean命令，支持在当前目录下指定删除 &nbsp;-&nbsp; by **chufan** [<samp>(be939)</samp>](https://github.com/142vip/core-x/commit/be939b2)
  - 支持turbo可选参数，删除turbo构建目录 &nbsp;-&nbsp; by **chufan** [<samp>(7ba7b)</samp>](https://github.com/142vip/core-x/commit/7ba7be9)
  - 支持vite缓存目录删除，增加--vite参数 &nbsp;-&nbsp; by **chufan** [<samp>(0fb42)</samp>](https://github.com/142vip/core-x/commit/0fb42bb)
  - 支持原生exec命令 &nbsp;-&nbsp; by **142vip.cn** in <https://github.com/142vip/core-x/issues/8> [<samp>(2e296)</samp>](https://github.com/142vip/core-x/commit/2e29629)
  - 支持turbo命令，简化dev、build的使用 &nbsp;-&nbsp; by **chufan** [<samp>(bad23)</samp>](https://github.com/142vip/core-x/commit/bad23ce)
  - 模块包内增加turbo依赖，删除全局turbo依赖 &nbsp;-&nbsp; by **chufan** [<samp>(a36b4)</samp>](https://github.com/142vip/core-x/commit/a36b40b)
- **@142vip/release-version**:
  - 搭建基础框架，新增部分功能 &nbsp;-&nbsp; by **chufan** [<samp>(29346)</samp>](https://github.com/142vip/core-x/commit/2934667)
  - 支持bumpx多种配置文件格式 &nbsp;-&nbsp; by **chufan** [<samp>(16a55)</samp>](https://github.com/142vip/core-x/commit/16a5540)
- **@142vip/vitepress**:
  - 新增组件，支持i18n和基础配置 &nbsp;-&nbsp; by **chufan** [<samp>(770fd)</samp>](https://github.com/142vip/core-x/commit/770fddf)
- **changelog**:
  - 修改md文案 &nbsp;-&nbsp; by **chufan** [<samp>(a2793)</samp>](https://github.com/142vip/core-x/commit/a2793cf)
  - 测试scope &nbsp;-&nbsp; by **chufan** [<samp>(81283)</samp>](https://github.com/142vip/core-x/commit/8128340)
  - 支持多模块生成日志文档 &nbsp;-&nbsp; by **chufan** [<samp>(f4e42)</samp>](https://github.com/142vip/core-x/commit/f4e420e)

### 🔥 Performance

- 升级依赖和脚本 &nbsp;-&nbsp; by **chufan** [<samp>(eba2b)</samp>](https://github.com/142vip/core-x/commit/eba2b91)

### 🐛 Bug Fixes

- 修复官方文档部署异常，新增部分链接 &nbsp;-&nbsp; by **chufan** [<samp>(46ab1)</samp>](https://github.com/142vip/core-x/commit/46ab19a)

### 💅 Refactors

- **@142vip/release-version**:
  - 结构与编码风格优化，配置bumpx命令 &nbsp;-&nbsp; by **chufan** [<samp>(3680d)</samp>](https://github.com/142vip/core-x/commit/3680d42)
  - 结构调整，简化代码，优化逻辑流程 &nbsp;-&nbsp; by **chufan** [<samp>(d61f4)</samp>](https://github.com/142vip/core-x/commit/d61f4c7)

### 📖 Documentation

- 修改文档模块，支持项目包启动 &nbsp;-&nbsp; by **chufan** [<samp>(e439a)</samp>](https://github.com/142vip/core-x/commit/e439a04)
- **@142vip/fairy-cli**: Update &nbsp;-&nbsp; by **chufan** [<samp>(96155)</samp>](https://github.com/142vip/core-x/commit/96155dc)

**Release New Version v0.0.1-alpha.1 [👉 View Changes On GitHub](https://github.com/142vip/core-x/compare/v0.0.1-alpha.0...v0.0.1-alpha.1)**
