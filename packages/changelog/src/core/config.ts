import process from 'node:process'
import { name as packageName } from '../../package.json'
import {
  getCurrentGitBranch,
  getFirstGitCommit,
  getGitHubRepo,
  getLastMatchingTag,
  isPrerelease,
} from './git'
import type { ChangelogOptions, ResolvedChangelogOptions } from './types'

const defaultConfig: ChangelogOptions = {
  scopeMap: {},
  types: {
    feat: { title: '✨ Features', semver: 'minor' },
    perf: { title: '🔥 Performance', semver: 'patch' },
    fix: { title: '🐛 Bug Fixes', semver: 'patch' },
    refactor: { title: '💅 Refactors', semver: 'patch' },
    docs: { title: '📖 Documentation', semver: 'patch' },
    build: { title: '📦 Build', semver: 'patch' },
    types: { title: '🌊 Types', semver: 'patch' },
  },
  titles: {
    breakingChanges: '🚨 Breaking Changes',
  },
  tokens: {
    github: process.env.GITHUB_TOKEN || process.env.TOKEN,
  },
  contributors: true,
  capitalize: true,
  group: true,
  emoji: true,
}

/**
 * 定义@142vip/changelog模块的默认配置文件
 * @param config
 */
export function defineChangelogDefaultConfig(config: ChangelogOptions) {
  return config
}

export async function resolveConfig(options: ChangelogOptions) {
  const { loadConfig } = await import('c12')
  const config = await loadConfig<ChangelogOptions>({
    // 配置文件名，eg: changelog.config.ts
    name: 'changelog',
    defaults: defaultConfig,
    overrides: options,
    // 在package.json中的配置关键字
    packageJson: packageName,
  }).then(r => r.config || defaultConfig)

  config.baseUrl = config.baseUrl ?? 'github.com'
  config.baseUrlApi = config.baseUrlApi ?? 'api.github.com'
  // 发布的版本
  config.to = config.to || await getCurrentGitBranch()
  // release name
  config.name = config.name ?? config.to
  config.from = config.from || await getLastMatchingTag(config.to) || await getFirstGitCommit()
  // @ts-expect-error backward compatibility
  config.repo = config.repo || config.github || await getGitHubRepo(config.baseUrl)

  // 是否是预览版本
  config.prerelease = config.prerelease ?? isPrerelease(config.to)

  // todo 支持多个scope生成
  config.scopeName = options.scopeName

  if (typeof config.repo !== 'string')
    throw new Error(`无效的 GitHub 存储库，需要一个字符串，但实际repo参数是： ${JSON.stringify(config.repo)}`)

  return config as ResolvedChangelogOptions
}
