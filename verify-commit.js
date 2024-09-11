import process from 'node:process'
import { vipColor } from '@142vip/utils'
import {
  getReleasePkgJSON,
  verifyCommit,
} from '@142vip/fairy-cli'

const verifyRes = verifyCommit()

const { isSuccess, message, type, scope } = verifyRes

if (!isSuccess) {
  console.error(
    `\n${vipColor.white(vipColor.bgRed(' Git Commit Message ERROR '))} ${vipColor.red(
      `invalid commit message format.`,
    )}\n\n${
      vipColor.red(
        `  Proper commit message format is required for automated changelog generation. Examples:\n\n`,
      )
    }    ${vipColor.green(`feat(Github Actions): add CI/CD option`)}\n`
    + `    ${vipColor.green(
      `docs: update wbe site (close #28)`,
    )}\n\n${
      vipColor.red(`  See .github/commit-convention.md for more details.\n`)}`,
  )
  process.exit(1)
}

const typeList = [
  'feat',
  'fix',
  'docs',
  'style',
  'refactor',
  'perf',
  'test',
  'build',
  'ci',
  'chore',
  'revert',
  'release',
]
// 校验类型
if (type == null || !typeList.includes(type)) {
  console.error(
    `${vipColor.white(vipColor.bgRed('Git Commit Message ERROR '))} ${vipColor.red(
      `invalid commit type , support ${typeList.join('|')}`,
    )}`,
  )
  process.exit(1)
}

// 获取packages目录下所有的模块名
const pkgJSON = getReleasePkgJSON('./packages/*')

const scopeList = [
  ...pkgJSON.map(pkg => pkg.name),
  'Github Actions',
  'release', // 支持主仓库发布版本，临时解决，可以考虑忽略hooks
]

// scope范围不支持
if (scope != null && !scopeList.includes(scope)) {
  console.error(
    `${vipColor.white(vipColor.bgRed('Git Commit Message ERROR '))} ${vipColor.red(
      `invalid commit scope name , Examples:\n${scopeList.join('\n')}`,
    )}`,
  )
  process.exit(1)
}

// 判断message长度
if (message == null || message.length > 80) {
  console.error(
    `  ${vipColor.white(vipColor.bgRed('Git Commit Message ERROR '))} ${vipColor.red(
      `invalid commit message length , max length is 80`,
    )}`,
  )
  process.exit(1)
}

// 提交符合规范，打印相关信息
console.log(verifyRes)
