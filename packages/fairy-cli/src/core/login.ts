export enum CliLoginOption {
  DOCKER = 'docker',
  NPM = 'npm',
}

export interface LoginOptions {
  docker?: boolean
  npm?: boolean
}

// docker 登录
function loginDocker(): void {
  //   docker login --username=142vip --password="$password"  registry.cn-hangzhou.aliyuncs.com
  console.log('login docker')
}

// npm 登录
function loginNpm(): void {
  // npm login --registry  https://registry.npmjs.org
}

loginNpm()
loginDocker()
