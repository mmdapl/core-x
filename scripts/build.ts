import {
  VipExecutor,
  VipInquirer,
  VipInquirerSeparator,
  VipMonorepo,
  VipNodeJS,
} from '@142vip/utils'

(async () => {
  const pkgNames = VipMonorepo.getPkgNames(['@142vip/*', '*-demo'])
  const pkg = await VipInquirer.promptSearch('输入需要build的应用：', (input) => {
    const res = pkgNames.filter(pkg => input && pkg.includes(input))
    return [
      'docs',
      'docs-proxy',
      new VipInquirerSeparator(),
      ...res,
    ]
  }, 40)

  if (pkg === 'docs') {
    await VipExecutor.commandStandardExecutor('npx vitepress build --minify')
    VipNodeJS.exitProcess(0)
  }
  if (pkg === 'docs-proxy') {
    await VipExecutor.commandStandardExecutor('NEED_PROXY=true npx vitepress build')
    VipNodeJS.exitProcess(0)
  }
  await VipExecutor.commandStandardExecutor(`npx turbo run build --filter '${pkg}' --color --only`)
})()
