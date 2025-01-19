import { VipInquirer } from '@142vip/utils'

(async () => {
  const app = await VipInquirer.promptCheckBox([1, 2, 3, 4, 5, 6, 7, 8, 9])
  console.log('VipInquirer.promptCheckBox', app)

  const isClean = await VipInquirer.promptConfirm('是否删除?')
  const isCleanByDefault = await VipInquirer.promptConfirm('是否删除?', true)
  console.log('VipInquirer.promptConfirm:', isClean, isCleanByDefault)
})()
