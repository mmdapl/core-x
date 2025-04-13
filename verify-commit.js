import { commitLiner } from '@142vip/commit-linter'
import { getReleasePkgJSON } from '@142vip/fairy-cli'
import { VipColor, VipConsole } from '@142vip/utils'

// 获取packages目录下所有的模块名
const pkgJSON = getReleasePkgJSON(['./apps/*', './packages/*'])

const { type, scope, subject, commit } = commitLiner({
  scopes: pkgJSON.map(pkg => pkg.name),
})

// 提交符合规范，打印相关信息
VipConsole.log(`type: ${type}, scope: ${scope}, subject: ${subject}`)
VipConsole.log(`${VipColor.greenBright('Git Commit: ')} ${VipColor.green(commit)}`)
