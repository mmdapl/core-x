import { VipInquirer, VipInquirerSeparator } from '../dist/index.mjs'

(async () => {
  // 检索
  const searchRes = await VipInquirer.promptSearch('搜索：', async (input, { signal }) => {
    // await setTimeout(300)
    if (!input) {
      return []
    }

    const response = await fetch(
      `https://registry.npmjs.org/-/v1/search?text=${encodeURIComponent(input)}&size=20`,
      { signal },
    )
    const data = await response.json()

    return data.objects.map(pkg => ({
      name: pkg.package.name,
      value: pkg.package.name,
      description: pkg.package.description,
    }))
  })

  console.log(222, searchRes)

  const app = await VipInquirer.promptCheckBox('12212', [
    { name: 'npm', value: 'npm' },
    { name: 'yarn', value: 'yarn' },
    new VipInquirerSeparator(),
    { name: 'pnpm', value: 'pnpm', disabled: true },
    {
      name: 'pnpm',
      value: 'pnpm',
      disabled: '(pnpm is not available)',
    },
  ])
  console.log('VipInquirer.promptCheckBox', app)

  const isClean = await VipInquirer.promptConfirm('是否删除?')
  const isCleanByDefault = await VipInquirer.promptConfirm('是否删除?', true)
  console.log('VipInquirer.promptConfirm:', isClean, isCleanByDefault)

  const inputRes = await VipInquirer.promptInput('输入：')
  console.log('promptInput:', inputRes)

  const numberRes = await VipInquirer.promptNumber('输入数字：')
  console.log('promptNumber:', numberRes)

  const passwordRes = await VipInquirer.promptPassword('输入密码：')
  console.log('promptPassword:', passwordRes)

  await VipInquirer.promptSelect('选择：', ['npm', 'pnpm'])

  await VipInquirer.promptCheckBox('选择：', ['npm', 'pnpm'])

  const selectRes = await VipInquirer.promptSelect('选择：', [
    { name: 'npm', value: 'npm' },
    { name: 'yarn', value: 'yarn' },
    new VipInquirerSeparator(),
    { name: 'pnpm', value: 'pnpm', disabled: false },
  ])
  console.log('promptSelect:', selectRes)

  const confirmRes = await VipInquirer.promptConfirm('是否删除?')
  console.log('promptConfirm:', confirmRes)
})()
