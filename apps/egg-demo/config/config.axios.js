/**
 * 加载@142vip/egg-axios 单实例
 */
module.exports = {
  axios: {
    client: {
      headers: {
        common: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
      },
      timeout: 6000,
    },
  },
}
