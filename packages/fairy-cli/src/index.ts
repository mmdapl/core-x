import * as process from 'node:process'
import { Command } from 'commander'
import { LoginOptions } from './login'

const program = new Command()

// 查看版本
program.version(`${require('../package.json').version}`, '-v --version')

// 创建
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

// 登录
program
  .command('login <platform>')
  .description('login remote platform')
  .option('--docker', 'login docker')
  .option('--npm', 'npm login')
  .option('--registry-url', 'registry address')
  .action((projectName, options: LoginOptions) => {
    if (options.docker) {
      console.log('登录docker')
    }

    if (options.npm) {
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
  })

program.parse(process.argv)
