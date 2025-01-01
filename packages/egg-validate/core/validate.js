const { VipEggPluginLogger } = require('@142vip/egg')
const Joi = require('joi')
const { name: pkgName } = require('../package.json')

function createEggValidateInstance(config, app) {
  const pluginLogger = VipEggPluginLogger.getInstance(pkgName, app)

  const validateSchema = Joi.object({ })

  try {
    const result = validateSchema.validateAsync()
    return result
  }
  catch (e) {
    pluginLogger.error(e.message)
  }

  pluginLogger.info('plugin init')
}

module.exports = {
  createEggValidateInstance,
}
