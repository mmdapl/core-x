import { execCommand } from './exec'

/**
 * Git提交信息
 */
export interface GitInfo {
  hash: string
  message: string
}
/**
 * 获取最近一次Git提交信息
 * - 短哈希值
 * - 提交信息
 */
export async function getLogInfo(): Promise<GitInfo> {
  // 执行 git log 命令获取最新一次提交的哈希值和消息
  const gitLog = (await execCommand('git log --no-merges -1 --pretty=format:"%h %s"')).stdout

  // 分割输出字符串以获取哈希值和消息
  const [commitHash, ...commitMessage] = gitLog.split(' ')

  // 输出最近一次提交的信息
  return {
    hash: commitHash,
    message: commitMessage.join(' '),
  }
}
