import { clean, compare, eq, gt, lt, prerelease, satisfies, valid } from 'semver'

/**
 * 参考：https://www.npmjs.com/package/semver
 */
export const VipSemver = {
  valid,
  clean,
  satisfies,
  gt,
  lt,
  eq,
  compare,
  prerelease,
}
