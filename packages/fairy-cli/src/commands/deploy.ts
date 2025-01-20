import type { VipCommander } from '@142vip/utils'
import { VipConsole } from '@142vip/utils'
import { CliCommandEnum } from '../shared'

interface DeployOptions {

}

function execDeploy(args: DeployOptions): void {
  VipConsole.log(args)
}

/**
 * github page 静态页面部署
 * @constructor
 */
function DeployGithubPage() {}

/**
 * deploy命令
 */
export async function deployMain(program: VipCommander): Promise<void> {
  program
    .command(CliCommandEnum.DEPLOY)
    .description('项目部署')
    .option('-gh,--github-page', '部署到Github Pages', false)
    .action((args: DeployOptions) => {
      execDeploy(args)
      DeployGithubPage()
    })
}
