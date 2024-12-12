import process from 'node:process'
import type { VersionBumpOptions } from '@142vip/release-version'
import { versionBump } from '@142vip/release-version'
import type { Command } from 'commander'
import { promptConfirm, promptList, vipColor } from '@142vip/utils'
import {
  CliCommandEnum,
  getBranchName,
  getPackageListInMonorepo,
  getReleasePkgJSON,
  printPreCheckRelease,
  releaseMonorepoPackage,
  releaseRoot,
} from '../shared'

interface ReleaseOptions extends Pick<VersionBumpOptions, 'preid' | 'tag' | 'commit' | 'push' | 'all' | 'execute'> {
  package?: string
}

interface VipReleaseExtraOptions {
  branch?: string
  checkRelease?: boolean
  filter?: string[]
  vip?: boolean
}

const defaultRepoName = 'main'

/**
 * - 注意：
 * VersionBumpOptions中的files用来指定package.json文件路径
 * @param options
 */
// export async function releaseVersion(options: VersionBumpOptions) {
//   // const defaultOptions = {}
//   await versionBump(options)
// }

/**
 * 版本发布
 */
async function execNormalRelease(args: ReleaseOptions) {
  // 指定包
  if (args.package != null) {
    const packageJSONList = await getPackageListInMonorepo()
    // const packageJSONList: string[] = []
    if (!packageJSONList.includes(`${args.package}/package.json`)) {
      // 抛错，提醒用户包在monorepo下找不到
      console.log('正确')
    }
  }
  else {
    // 对话框，用户自行选择
    console.log('错误')
  }

  // 指定文件更新版本
  await versionBump({
    files: [],
    ...args.preid ? { preid: args.preid } : { perid: 'alpha' },
    // 是否需要标记
    ...args.tag ? { tag: args.tag } : {},
    // 需要提交信息
    ...args.commit ? { commit: args.commit } : {},
    // 推送到远程
    ...args.push ? { push: args.push } : {},
    // 执行远程
    ...args.execute ? { execute: args.execute } : {},
  })
}

/**
 * 执行142vip开源仓库迭代
 */
function execVipRelease(args: VipReleaseExtraOptions) {
  // 获取pkg信息
  const pkgJSON = getReleasePkgJSON(args.filter)
  const packageNames = pkgJSON.map(pkg => pkg.name)

  // 预先检查子模块
  if (args.checkRelease) {
    printPreCheckRelease(packageNames)
    process.exit(0)
  }

  const choices = [
    defaultRepoName,
    ...packageNames,
  ]
  promptList(choices, `选择需要使用${vipColor.red('Release')}命令发布的模块名称：`)
    .then(async (packageName) => {
      // 确认框
      const isRelease = await promptConfirm(`将对模块${vipColor.green(packageName)}进行版本迭代，是否继续操作？`)

      if (!isRelease) {
        console.log(vipColor.yellow('用户取消发布操作！！'))
        process.exit(0)
      }

      // 发布子模块
      if (packageName !== defaultRepoName) {
        await releaseMonorepoPackage(pkgJSON.find(pkg => pkg.name === packageName)!)
        process.exit(0)
      }

      // 发布根模块
      await releaseRoot()
    })
    .catch(() => {
      // 避免错误过分暴露
    })
}

/**
 * 功能迭代主功能
 */
export async function releaseMain(program: Command) {
  program
    .command(CliCommandEnum.RELEASE)
    .description('release npm version')
    .option('--push', 'registry address', true)
    .option('--preid <preid>', 'ID for prerelease')
    .option('--commit <msg>', 'Commit message', false)
    .option('--tag <tag>', 'Tag name', false)
    .option('--skip-confirm', `Skip confirmation (default: false)`, false)
    .option('-r, --recursive', `Bump package.json files recursively (default: false)`, false)
    .option('--execute <command>', '版本更新后需要执行的命令')
    .option('--package <package>', '指定需要发布的包')
    .option('--branch <branch>', '指定分支进行发布')
    .option('--check-release', '发布仓库主版本时，校验monorepo中子模块版本', false)
    .option('-F, --filter <filter>', '模块的路径，例如："./package/*"', (value: string, previous: string[]) => {
      if (!value)
        return [value]
      return previous.concat(value)
    }, [])
    .option('--vip', '是否为@142vip组织专用功能', false)
    .action(async (args: ReleaseOptions & VipReleaseExtraOptions) => {
      // 发布时校验分支
      if (args.branch != null) {
        const branchName = getBranchName()
        if (branchName !== args.branch) {
          console.log(`当前分支是：${branchName} ，版本迭代允许在next分支操作，并推送到远程！！！`)
          process.exit(0)
        }
      }

      // @142vip 组织专用Release
      if (args.vip) {
        execVipRelease({
          checkRelease: args.checkRelease,
          filter: args.filter,
        })
      }
      else {
        // 普通release
        await execNormalRelease(args)
      }
    })
}
