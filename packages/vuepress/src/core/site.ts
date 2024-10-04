import process from 'node:process'

/**
 * 用于区分base路径，是否nginx代理
 * - 路径名称
 * - 环境变量 NEED_PROXY
 * @param baseName
 */
export function getSiteBase(baseName?: string): '/' | `/${string}/` {
  const needProxy = baseName != null
    ? true
    : (process.env.NEED_PROXY ?? false)

  return needProxy ? `/${baseName}/` : '/'
}
