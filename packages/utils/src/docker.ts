import { commandStandardExecutor, execCommand } from './exec'
import { VipLogger } from './logger'
import { vipSymbols } from './color'

const vipLog = new VipLogger()

/**
 * 142vip 仓库地址
 * - 格式：`${VipDockerAddress}/项目代号:${pkg.name}-${pkg.version}`
 * - 例如：registry.cn-hangzhou.aliyuncs.com/142vip/docs:JavaScriptCollection-0.0.1
 */
export const VipDockerAddress: string = 'registry.cn-hangzhou.aliyuncs.com/142vip'

interface DockerOptions {
  logger?: boolean
}

interface BuildImageDockerOptions extends DockerOptions {
  imageName: string
  buildArgs?: [string, number | boolean | string][]
  delete?: boolean
  push?: boolean
  target?: string
}

/**
 * 判断是否存在镜像
 */
export async function isExistImage(imageName: string) {
  const command = `docker images -q ${imageName}`
  const { code, stdout } = await execCommand(command)
  return code === 0 && stdout.trim() !== ''
}

/**
 * 删除Docker镜像
 */
export async function deleteImage(imageName: string) {
  const command = `docker rmi -f ${imageName}`
  return await execCommand(command)
}

/**
 * 删除虚悬镜像
 */
export async function deletePruneImages() {
  const command = 'docker image prune -f'
  return await execCommand(command)
}

/**
 * 判断容器是否存在
 */
export async function isExistContainer(containerName: string) {
  const command = `docker ps -aq -f name=${containerName}`
  const { code, stdout } = await execCommand(command)

  return code === 0 && stdout.trim() !== ''
}

/**
 * 删除容器
 */
export async function deleteContainer(containerName: string) {
  const command = `docker rm -f ${containerName}`
  return await execCommand(command)
}

/**
 * 是否安装docker
 */
export async function isInstallDocker(args?: DockerOptions) {
  const command = 'docker -v'
  const { code, stdout, stderr } = await execCommand(command)

  // 打印日志
  if (args?.logger) {
    const vipLog = new VipLogger()
    if (code === 0) {
      vipLog.log(`检测到docker，版本信息：\n`, { startLabel: vipSymbols.success })
      vipLog.log(stdout)
    }
    else {
      vipLog.log(`未检测到docker，请先安装!!\n`, { startLabel: vipSymbols.error })
      vipLog.error(stderr)
    }
  }
  return code === 0 && stdout.includes('Docker')
}

/**
 * 是否安装docker-compose
 */
export async function isInstallDockerCompose(args?: DockerOptions) {
  const command = 'docker-compose -v'
  const { code, stdout, stderr } = await execCommand(command)

  // 打印日志
  if (args?.logger) {
    if (code === 0) {
      vipLog.log(`检测到docker-compose，版本信息：\n`, { startLabel: vipSymbols.success })
      vipLog.log(stdout)
    }
    else {
      vipLog.log(`未检测到docker-compose，请先安装!!\n`, { startLabel: vipSymbols.error })
      vipLog.error(stderr)
    }
  }
  return code === 0 && stdout.includes('Docker Compose')
}

/**
 * 推送Docker镜像到指定仓库
 * @param imageName
 */
export async function pushImage(imageName: string) {
  const command = `docker push ${imageName}`
  await commandStandardExecutor(command)
}

/**
 * 构建Docker镜像
 * - 根据tag标记，推送到远程仓库
 * - 推送完成后，删除本地镜像
 */
export async function buildImage(args: BuildImageDockerOptions) {
  // 构建参数
  let buildArg = ''
  if (args.buildArgs != null) {
    buildArg = args.buildArgs.map(([key, value]) => {
      // 对于字符串，额外加''
      const newValue = typeof value === 'string'
        ? `'${value}'`
        : value

      return `--build-arg ${key}=${newValue}`
    }).join(' \ ')
  }

  // 支持--target参数
  const targetParams = args.target != null ? `--target ${args.target}` : ''

  const command = `docker build ${buildArg} ${targetParams} -t '${args.imageName}' .`

  if (args.logger) {
    vipLog.log(`执行的命令：\n`, { startLabel: vipSymbols.success })
    vipLog.log(command, { startLabel: vipSymbols.success })
  }
  vipLog.log(args.imageName, { startLabel: '构建镜像' })
  await commandStandardExecutor(command)

  if (args.push) {
    const exist = await isExistImage(args.imageName)

    if (exist) {
      vipLog.log(args.imageName, { startLabel: '推送镜像' })
      await pushImage(args.imageName)
    }
  }

  // 推送完删除
  if (args.push && args.delete) {
    vipLog.log(args.imageName, { startLabel: '删除镜像' })
    await deleteImage(args.imageName)
  }
}
