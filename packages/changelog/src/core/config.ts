import process from 'node:process'
import {
  getCurrentGitBranch,
  getFirstGitCommit,
  getGitHubRepo,
  getLastMatchingTag,
  isPrerelease,
} from './git'
import type { ChangelogOptions, ResolvedChangelogOptions } from './types'

// const defaultOutput = 'CHANGELOG.md'
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
  // output: defaultOutput,
}

export async function resolveConfig(options: ChangelogOptions) {
  const { loadConfig } = await import('c12')
  const config = await loadConfig<ChangelogOptions>({
    name: '@142vip/changelog',
    defaults: defaultConfig,
    overrides: options,
    packageJson: '@142vip/changelog',
  }).then(r => r.config || defaultConfig)

  config.baseUrl = config.baseUrl ?? 'github.com'
  config.baseUrlApi = config.baseUrlApi ?? 'api.github.com'
  config.to = config.to || await getCurrentGitBranch()
  config.from = config.from || await getLastMatchingTag(config.to) || await getFirstGitCommit()
  // @ts-expect-error backward compatibility
  config.repo = config.repo || config.github || await getGitHubRepo(config.baseUrl)
  config.prerelease = config.prerelease ?? isPrerelease(config.to)

  if (typeof config.repo !== 'string')
    throw new Error(`Invalid GitHub repository, expected a string but got ${JSON.stringify(config.repo)}`)

  return config as ResolvedChangelogOptions
}
