const { VipEggPluginLogger } = require('@142vip/egg')
const Joi = require('joi')

/**
 * 参数校验
 */
function createEggValidateInstance(pluginConfig, app) {
  const pluginLogger = VipEggPluginLogger.getInstance(pluginConfig, app)

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
