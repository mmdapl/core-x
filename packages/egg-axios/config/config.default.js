const { requestInterceptorsHandler, responseInterceptorsHandler } = require('../core/interceptors')

module.exports = {
  axios: {
    default: {
      requestInterceptorsHandler,
      responseInterceptorsHandler,
      timeout: 5 * 1000,
    },
    app: true,
    agent: false,
  },
}
