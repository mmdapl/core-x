# @142vip/changelog

[![NPM version](https://img.shields.io/npm/v/@142vip/changelog?labelColor=0b3d52&color=1da469&label=version)](https://www.npmjs.com/package/@142vip/changelog)

根据`git`提交记录，自动生成`CHANGELOG`文档

从 `GitHub` 提交信息[Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)中生成更改日志。 这个模块实现参考了`changelogen`和`changelogithub`两个模块的实现。

非常感谢两位作者的实现思路

- [changelogen](https://github.com/unjs/changelogen)
- [changelogithub](https://github.com/antfu/changelogithub)

## 新功能

- 支持在`CHANGELOG`文档中标记破坏性改动
- `CHANGELOG`文档中支持按照`scope`进行分组展示
- 配合`CI`流水线，生成的`CHANGELOG`记录支持展示代码贡献者
- 支持`Monorepo`模式，通过`scopeName`配置，匹配`git`提交信息中的`scope`，过滤出组件包的提交记录

[👉 使用示例](https://github.com/142vip/core-x/releases)

## 使用

### 生成CHANGELOG.md文档

```bash
# output参数可以配置，支持做本地文档更新
npx changelog --output CHANGELOG.md
```

### 本地预览

```bash
# 只本地生成创建版本的URL
npx changelog --dry
```

### 配合Github Actions使用

```yml
# .github/workflows/release.yml
name: Release

permissions:
  contents: write

on:
  push:
    tags:
      - 'v*'

jobs:
  release:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0

      # 安装node版本，大于16
      - uses: actions/setup-node@v4
        with:
          node-version: 16.x

      # Github发布版本，并更新Release信息
      - name: Release New Version
        run: |
          npx changelog
        env:
          GITHUB_TOKEN: ${{secrets.TOKEN}}
```

向 GitHub 推送以“v”开头的标签时，`github actions`会被触发。

在142vip所有的开源仓库中，都可以通过`@142vip/changelog`模块来实现发布，例如：

```yaml
#
# CD持续交付
#

name: CD
on:
  push:
    branches:
      - next
  workflow_dispatch:
jobs:
  # 版本发布
  release:
    name: 创建Github发布
    runs-on: ubuntu-latest
    # 主库next且执行release更新时执行
    if: github.repository == '142vip/core-x' && startsWith(github.event.head_commit.message, 'chore(release):')

    steps:
      - name: Checkout Code
        uses: actions/checkout@v4
        with:
          persist-credentials: false
          # “最近更新时间” 等 git 日志相关信息，需要拉取全部提交记录
          fetch-depth: 0

      # 安装PNPM
      - name: PNPM Install
        uses: pnpm/action-setup@v4
        with:
          version: 7.33.2

      # 安装Node环境
      - name: Install Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20.12.2
          # 淘宝镜像加速
          registry-url: 'https://registry.npmmirror.com'
          # 缓存
          cache: pnpm

      # 下载依赖，并执行初始化脚本：钩子函数、思维导图构建
      - name: Install Dependencies
        run: |
          ./scripts/ci

      - name: Build All Packages
        run: |
          pnpm build

      # Github发布版本，并更新Release信息
      - name: Release New Version
        run: |
          npx changelog
        env:
          GITHUB_TOKEN: ${{secrets.TOKEN}}
```

### 更多功能

```shell

# cli 参数帮助
npx changelog -h

@142vip/changelog/0.0.1-alpha.1

Usage: @142vip/changelog [options]

Options:
  -v --version             Package Version
  -t, --tokens <path>      GitHub Token
  --from <ref>             From tag
  --to <ref>               To tag
  --github <path>          GitHub Repository, e.g. @142vip/core-x
  --name <name>            Name of the release
  --prerelease             Mark release as prerelease
  --output <path>          Output to file instead of sending to GitHub
  --scopeName <scopeName>  Package name in Monorepo，Match the scope in the git commit information
  --dry                    Dry run (default: false)
  -h, --help               display help for command
```

## 配置

您可以将配置文件放在项目根目录中，名为 `changelog.config.{json，ts，js，mjs，cjs}`或使用 `@142vip/changelog` 字段在`package.json`中。

## 证书

[MIT](https://opensource.org/license/MIT)

Copyright (c) 2019-present, 142vip 储凡
