import { execSync } from 'node:child_process'

/**
 * 获取当前分支名
 */
export function getBranchName(): string {
  const command = 'git rev-parse --abbrev-ref HEAD'
  return execSync(command).toString().trim()
}

/**
 * 获取仓库的最新tag
 * - 优先从package.json中获取version
 * - version对应的tag不存在时，再从git记录中获取最新tag
 */
export function getLatestTagName(): string | null {
  try {
    // 读取 package.json 文件中的 version 值
    const packageJSON = execSync('cat package.json').toString()
    const version = JSON.parse(packageJSON).version

    // 检查对应的 tag 是否存在
    const existTag = execSync(`git tag -l "v${version}"`).toString().trim()

    // 如果对应的 tag 存在，则返回该 tag
    if (existTag) {
      return `v${version}`
    }
    // 如果对应的 tag 不存在，则获取最新的 tag
    return execSync('git describe --tags --abbrev=0').toString().trim()
  }
  catch (error) {
    console.error('Failed to get the latest tag name:', error)
    return null
  }
}
