import type { VipCommander } from '@142vip/utils'
import { CliCommandEnum } from '../shared'

interface DeployOptions {

}

function execDeploy(args: DeployOptions) {
  console.log(args)
}

/**
 * github page 静态页面部署
 * @constructor
 */
function DeployGithubPage() {}

/**
 *
 * @param program
 */
export async function deployMain(program: VipCommander) {
  program
    .command(CliCommandEnum.DEPLOY)
    .description('项目部署')
    .option('-gh,--github-page', '部署到Github Pages', false)
    .action((args: DeployOptions) => {
      execDeploy(args)
      DeployGithubPage()
    })
}
