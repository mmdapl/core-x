/**
 * 加载@142vip/egg-axios 多实例
 */
module.exports = {
  axios: {
    clients: {
      example1: {
        headers: {
          common: {
            'Content-Type': 'application/json; charset=UTF-8',
          },
        },
        timeout: 7000,
      },
      example2: {
        headers: {
          common: {
            'Content-Type': 'application/json; charset=UTF-8',
          },
        },
        timeout: 8000,
      },
    },
  },
}
