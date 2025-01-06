const { defaultPluginConfig } = require('@142vip/egg')
const { name: pkgName } = require('../package.json')

module.exports = {
  sequelize: defaultPluginConfig(pkgName, {
    default: {
      database: null,
      connectionLimit: 5,
    },
    client: {

    },

    // Single Database
    // client: {
    //   host: 'host',
    //   port: 'port',
    //   user: 'user',
    //   password: 'password',
    //   database: 'database',
    // },

    // Multi Databases
    // clients: {
    //   db1: {
    //     host: 'host',
    //     port: 'port',
    //     user: 'user',
    //     password: 'password',
    //     database: 'database',
    //   },
    //   db2: {
    //     host: 'host',
    //     port: 'port',
    //     user: 'user',
    //     password: 'password',
    //     database: 'database',
    //   },
    // },
  }),
}
