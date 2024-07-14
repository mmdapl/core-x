#!/usr/bin/env node

/* eslint-disable no-console */
import process from 'node:process'
import { blue, bold, cyan, dim, red, yellow } from 'kolorist'
import cac from 'cac'
import { version } from '../package.json'
import { generate, isRepoShallow, sendRelease, updateChangelog } from './index'

const cli = cac('changelog')

// 参数
cli
  .version(version)
  .option('-t, --tokens <path>', 'GitHub Token')
  .option('--from <ref>', 'From tag')
  .option('--to <ref>', 'To tag')
  .option('--github <path>', 'GitHub Repository, e.g. @142vip/core-x')
  .option('--name <name>', 'Name of the release')
  .option('--prerelease', 'Mark release as prerelease')
  .option('--output <path>', 'Output to file instead of sending to GitHub')
  .option('--dry', 'Dry run')
  .help()

// 命令
cli
  .command('')
  .action(async (args) => {
    args.token = args.token || process.env.GITHUB_TOKEN

    let webUrl = ''

    try {
      console.log()
      console.log(dim(`${bold('@142vip/changelog')} `) + dim(`v${version}`))

      const { config, markdown, commits } = await generate(args)
      webUrl = `https://${config.baseUrl}/${config.repo}/releases/new?title=${encodeURIComponent(String(config.name || config.to))}&body=${encodeURIComponent(String(markdown))}&tag=${encodeURIComponent(String(config.to))}&prerelease=${config.prerelease}`

      console.log(cyan(config.from) + dim(' -> ') + blue(config.to) + dim(` (${commits.length} commits)`))
      console.log(dim('--------------'))
      console.log()
      console.log(markdown.replace(/&nbsp;/g, ''))
      console.log()
      console.log(dim('--------------'))

      function printWebUrl() {
        console.log()
        console.error(yellow('使用以下链接手动发布新的版本：'))
        console.error(yellow(webUrl))
        console.log()
      }

      if (config.dry) {
        console.log(yellow('试运行。已跳过版本发布。'))
        printWebUrl()
        return
      }

      // 更新changelog文档
      if (typeof config.output === 'string') {
        await updateChangelog(config.output, markdown, config.to)
        return
      }

      // 带token上传
      if (!config.tokens) {
        console.error(red('未找到 GitHub 令牌，请通过 GITHUB_TOKEN 环境变量指定。已跳过版本发布。'))
        printWebUrl()
        return
      }

      if (!commits.length && await isRepoShallow()) {
        console.error(yellow('存储库似乎克隆得很浅，这使得更改日志无法生成。您可能希望在 CI 配置中指定 \'fetch-depth： 0\'。'))
        printWebUrl()
        return
      }

      // 调用api 直接发布
      await sendRelease(config, markdown)
    }
    catch (e: any) {
      console.error(red(String(e)))
      if (e?.stack)
        console.error(dim(e.stack?.split('\n').slice(1).join('\n')))

      // 手动执行，创建release
      if (webUrl) {
        console.log()
        console.error(red('无法创建发布。使用以下链接手动创建它：'))
        console.error(yellow(webUrl))
        console.log()
      }
    }
    finally {
      process.exitCode = 1
    }
  })

cli.parse()
