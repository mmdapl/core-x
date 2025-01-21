import semver from 'semver'

// todo 优化执行命令
async function execCommand(cmd: string, args: string[]): Promise<string> {
  const { execa } = await import('execa')
  const res = await execa(cmd, args)
  return res.stdout.trim()
}
/**
 * Git提交信息
 */
export interface GitInfo {
  hash: string
  message: string
}
/**
 * 获取最近一次Git提交信息【包含merge信息】
 * - 短哈希值
 * - 提交信息
 */
async function getRecentCommit(): Promise<GitInfo> {
  // 执行 git log 命令获取最新一次提交的哈希值和消息
  const gitLog = await execCommand('git log --no-merges -1 --pretty=format:"%h %s"', [])

  // 分割输出字符串以获取哈希值和消息
  const [commitHash, ...commitMessage] = gitLog.split(' ')

  // 输出最近一次提交的信息
  return {
    hash: commitHash,
    message: commitMessage.join(' '),
  }
}

/**
 * 获取最近一次提交的哈希值
 */
async function getFirstCommitHash(): Promise<string> {
  return await execCommand('git', ['rev-list', '--max-parents=0', 'HEAD'])
}

/**
 * 获取github仓库
 */
async function getGitHubRepo(baseUrl: string): Promise<string> {
  const url = await execCommand('git', ['config', '--get', 'remote.origin.url'])
  const escapedBaseUrl = baseUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const regex = new RegExp(`${escapedBaseUrl}[\/:]([\\w\\d._-]+?)\\/([\\w\\d._-]+?)(\\.git)?$`, 'i')
  const match = regex.exec(url)
  if (!match)
    throw new Error(`Can not parse GitHub repo from url ${url}`)
  return `${match[1]}/${match[2]}`
}

/**
 * 获取当前分支
 */
async function getCurrentBranch(): Promise<string> {
  return await execCommand('git', ['tag', '--points-at', 'HEAD'])
    || await execCommand('git', ['rev-parse', '--abbrev-ref', 'HEAD'])
}

/**
 * 判断仓库是否克隆太浅
 */
async function isRepoShallow(): Promise<boolean> {
  return (await execCommand('git', ['rev-parse', '--is-shallow-repository'])).trim() === 'true'
}

/**
 * 获取所有tag标签
 */
async function getTags(): Promise<string[]> {
  const tagInfo = await execCommand('git', ['--no-pager', 'tag', '-l', '--sort=creatordate'])
  return tagInfo.split('\n').reverse()
}

/**
 * 获取最近一次tag标签
 */
export async function getLastMatchingTag(inputTag: string): Promise<string | undefined> {
  const inputTagWithoutPrefix = inputTag.replace(/^v/, '')
  const isVersion = semver.valid(inputTagWithoutPrefix) !== null
  const isPrerelease = semver.prerelease(inputTag) !== null
  const tags = await getTags()

  let tag: string | undefined
  // Doing a stable release, find the last stable release to compare with
  if (!isPrerelease && isVersion) {
    tag = tags.find((tag) => {
      const tagWithoutPrefix = tag.replace(/^v/, '')

      return tagWithoutPrefix !== inputTagWithoutPrefix
        && semver.valid(tagWithoutPrefix) !== null
        && semver.prerelease(tagWithoutPrefix) === null
    })
  }

  // Fallback to the last tag, that are not the input tag
  tag ||= tags.find(tag => tag !== inputTag)

  return tag
}

function isPrerelease(version: string): boolean {
  return !/^[^.]*(?:\.[\d.]*|\d)$/.test(version)
}

export interface IVipGit {
  getRecentCommit: typeof getRecentCommit
  getFirstCommitHash: typeof getFirstCommitHash
  getGitHubRepo: typeof getGitHubRepo
  getCurrentBranch: typeof getCurrentBranch
  isRepoShallow: typeof isRepoShallow
  getTags: typeof getTags
  getLastMatchingTag: typeof getLastMatchingTag
  isPrerelease: typeof isPrerelease
}

export const VipGit: IVipGit = {
  getRecentCommit,
  getFirstCommitHash,
  getGitHubRepo,
  getCurrentBranch,
  isRepoShallow,
  getTags,
  getLastMatchingTag,
  isPrerelease,
}
