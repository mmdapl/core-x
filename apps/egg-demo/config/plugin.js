const { join } = require('node:path')

module.exports = {

  mysql: {
    enable: true,
    package: '@142vip/egg-mysql',
    path: join(__dirname, '../../../packages/egg-mysql'),
  },
}
