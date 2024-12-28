/**
 * 请求拦截器
 */
function requestInterceptorsHandler(config) {
  return config
}

/**
 * 响应拦截器
 */
function responseInterceptorsHandler(response) {
  if (response.config
    && (response.config.method.toUpperCase() === 'HEAD'
      || response.config.method.toUpperCase() === 'options')
  ) {
    return response
  }
  return response.data
}

module.exports = {
  requestInterceptorsHandler,
  responseInterceptorsHandler,
}
