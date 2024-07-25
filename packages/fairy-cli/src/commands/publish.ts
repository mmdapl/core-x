import { execCommand } from '../utils'

export type PublishOptions = NpmOptions & DockerOptions

interface NpmOptions {
  registry: string
  public: boolean
  npm: boolean
}

interface DockerOptions {
  // docker push xx
  image: string
  docker: boolean
  clean: boolean
}

export async function execPublish(args: PublishOptions) {
  // npm发包
  if (args.npm) {
    await publishNpm(args)
  }

  // docker 推送镜像
  if (args.docker) {
    await publishDocker(args)
  }
}

/**
 * 发布到docker
 * - 清理本地
 */
async function publishDocker(args: DockerOptions) {
  // docker push xxx
  await execCommand(`docker push ${args.image}`)

  // 清理本地镜像，默认不清理
  if (args.clean) {
    await execCommand(`docker rmi ${args.image}`)
  }
}

/**
 * 发布到npm
 */
async function publishNpm(args: NpmOptions) {
  // npm publish --access public --registry  https://registry.npmjs.org

  if (args.registry == null) {
    args.registry = 'https://registry.npmjs.org'
  }

  await execCommand(`npm publish --access public --registry=${args.registry}`)
}
