import { buildImage, isInstallDocker, isInstallDockerCompose } from '@142vip/utils'

(async () => {
  await isInstallDocker({ logger: true })
  const exist = await isInstallDockerCompose({ logger: true })
  console.log(111, exist)
  await buildImage({
    imageName: 'aaa',
    buildArgs: [
      ['aaa', 123],
      ['bb', 'go'],
    ],
  })
})()
