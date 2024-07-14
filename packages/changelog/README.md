# @142vip/changelog

根据git提交记录，自动生成changelog文档

[![NPM version](https://img.shields.io/npm/v/@142vip/changelog?color=a1b858&label=version)](https://www.npmjs.com/package/@142vip/changelog)

Generate changelog for GitHub releases from [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/),
powered by [changelogen](https://github.com/unjs/changelogen).

[👉 使用示例](https://github.com/unocss/unocss/releases/tag/v0.39.0)

## 新功能

- Support exclamation mark as breaking change, e.g. `chore!: drop node v10`
- Grouped scope in changelog
- Create the release note, or update the existing one
- List contributors

## 使用

### 生成CHANGELOG.md文档

```bash
# output参数可以配置，支持做本地文档更新
npx changelog --output CHANGELOG.md
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
      - uses: actions/checkout@v3
        with:
          fetch-depth: 0

      # 安装node版本，大于16
      - uses: actions/setup-node@v3
        with:
          node-version: 16.x

      # Github发布版本，并更新Release信息
      - run: npx changelog
        env:
          GITHUB_TOKEN: ${{secrets.GITHUB_TOKEN}}
```

向 GitHub 推送以“v”开头的标签时，`github actions`会被触发。

在142vip所有的开源仓库中，都可以通过`@142vip/changelog`模块来实现发布，例如：

```yaml
# CD持续交付
#  - 部署到Github Pages
#  - 部署到Vercel托管平台
#  - 发布新的Github Release
# 参考：https://v2.vuepress.vuejs.org/zh/guide/deployment.html#github-pages
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
          token: ${{ secrets.TOKEN }}
          persist-credentials: false
          # “最近更新时间” 等 git 日志相关信息，需要拉取全部提交记录
          fetch-depth: 0

      # 安装node版本，大于16
      - uses: actions/setup-node@v3
        with:
          node-version: 16.x

      # Github发布版本，并更新Release信息
      - run: npx changelog
        env:
          GITHUB_TOKEN: ${{secrets.TOKEN}}

      # 提取版本号
      - name: Get New Version Number
        id: releaseVersion
        run: |
          echo "version=$(node -p "require('./package.json').version")" >> $GITHUB_OUTPUT

      # 更新资源 区分压缩包上传
      - name: Upload Resource Assets
        uses: actions/upload-release-asset@latest
        env:
          GITHUB_TOKEN: ${{ secrets.TOKEN }}
        with:
          upload_url: ${{ steps.createRelease.outputs.upload_url }}
          asset_path: ./142vip-oauth.zip
          asset_name: 142vip-oauth.zip
          asset_content_type: application/zip
```

## 配置

You can put a configuration file in the project root, named
as `changelogithub.config.{json,ts,js,mjs,cjs}`, `.changelogithubrc` or use the `changelogithub` field
in `package.json`.

## 本地预览y

```bash
# 只本地生成创建版本的URL
npx changelogithub --dry
```

## 感谢

- changelogen: <https://github.com/unjs/changelogen>
- changelogithub: <https://github.com/antfu/changelogithub>

## 证书
