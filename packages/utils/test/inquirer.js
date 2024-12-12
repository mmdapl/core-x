import { promptCheckBox } from '@142vip/utils';

(async () => {
  const app = await promptCheckBox([1, 2, 3, 4, 5, 6, 7, 8, 9])
  console.log(111, app)
})()
