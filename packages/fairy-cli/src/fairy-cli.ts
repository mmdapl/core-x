import * as process from 'node:process'
import { Command } from 'commander'
import { version } from '../package.json'
import type { LoginOptions } from './core/login'
import type { ReleaseOptions } from './core/release'
import type { ChangelogOptions } from './core/changelog'
import type { DeployOptions } from './core/deploy'
import { execDeploy } from './core/deploy'
import type { LintOptions } from './core/lint'
import { execLink } from './core/lint'
import type { CleanUpOptions } from './core/clean'
import { execCleanUp } from './core/clean'

enum CliCommandEnum {
  RELEASE = 'release',
  CHANGELOG = 'changelog',
  PUBLISH = 'publish',
  CLEAN = 'clean',
  LINT = 'lint',
  DEPLOY = 'deploy',
}

const program = new Command('fairy-cli')

// 查看版本
program.version(version, '-v --version')

// fairy-cli exec 命令执行器
program
  .command('exec <command>')
  .description('create a new template project')
  .option('-r, --react', 'react template')
  .action((projectName, options) => {
    console.log(projectName, options)
  })

// fairy-cli create 创建
program
  .command('create <projectName>')
  .description('create a new template project')
  .alias('c')
  .option('-r, --react', 'react template')
  .option('-v, --vue', 'vue template')
  .option('-v2, --vue2', 'vue2 template')
  .option('-v3, --vue3', 'vue3 template')
  .action((projectName, options) => {
    console.log(projectName, options)
  })

// 登录 docker  npm
program
  .command('login <platform>')
  .description('login remote platform')
  .option('--docker', 'login docker')
  .option('--npm', 'npm login')
  .option('--registry-url', 'registry address')
  .action((args: LoginOptions) => {
    if (args.docker) {
      console.log('登录docker')
    }

    if (args.npm) {
      console.log('登录npm')
    }
  })

// pnpm ci
program
  .command('pnpm <platform>')
  .description('pnpm ci dependencies')
  .option('--registry', 'registry address')
  .action((projectName, options: LoginOptions) => {
    // pnpm i --frozen-lockfile --registry https://registry.npmmirror.com
    console.log('pnpm', projectName, options)
  })

// fairy-cli release
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
  .action(async (args: ReleaseOptions) => {
    console.log(CliCommandEnum.RELEASE, args)
    // await execRelease(args)
  })

// fairy-cli changelog
program
  .command(CliCommandEnum.CHANGELOG)
  .description('pnpm ci dependencies')
  .option('--package', 'registry address')
  .option('--package-dir', 'registry address', 'packages')
  .option('--output', 'registry address', 'CHANGELOG.md')
  // .option('--execute', 'registry address')
  .action((args: ChangelogOptions) => {
    // 参考 @142vip/changelog模块
    console.log(CliCommandEnum.CHANGELOG, args)
  })

// fairy-cli publish  推送
program
  .command(CliCommandEnum.PUBLISH)
  .description('pnpm ci dependencies')
  .option('-d,--docker', 'registry address')
  .option('-n,--npm', 'registry address', 'packages')
  .option('-c --clean', 'registry address', 'CHANGELOG.md')
  .action((args: ChangelogOptions) => {
    console.log(CliCommandEnum.PUBLISH, args)
  })

// fairy-cli deploy 部署
program
  .command(CliCommandEnum.DEPLOY)
  .description('lint code')
  .option('-gh,--github-page', 'registry address', false)
  .action((args: DeployOptions) => {
    // 参考 @142vip/changelog模块
    console.log(CliCommandEnum.DEPLOY, args)
    execDeploy(args)
  })

// fairy-cli lint
program
  .command(CliCommandEnum.LINT)
  .description('lint code')
  .option('-m,--markdown', 'lint markdown')
  .option('-c,--config', 'registry address', 'packages')
  .option('-f --fix', 'registry address', false)
  // .option('--execute', 'registry address')
  .action((args: LintOptions) => {
    // 参考 @142vip/changelog模块
    console.log(CliCommandEnum.LINT, args)
    execLink(args)
  })

// fairy-cli clean 项目清理
program
  .command(CliCommandEnum.CLEAN)
  .description('pnpm ci dependencies')
  .option('-n,--nuxt', '删除nuxt构建目录', false)
  .option('-d,--dist', '删除dist目录', false)
  .option('-m,--midway', '删除midway构建目录', false)
  .option('-c --clean', 'registry address', 'CHANGELOG.md')
  .option('--deep', '深度删除', false)
  .option('--ignore-tips', '忽略提示，直接删除', false)
  .action((args: CleanUpOptions) => {
    console.log(CliCommandEnum.CLEAN, args)
    execCleanUp(args)
  })

program.parse(process.argv)
