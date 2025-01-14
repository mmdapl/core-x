import type RedisClient from 'ioredis'

export class Redis {
  private redisClient: RedisClient

  constructor(redisClient: RedisClient) {
    this.redisClient = redisClient
  }

  /**
   * 延迟双删
   */
  public async delete(key: string) {
    await this.redisClient.del(key)
    setTimeout(async () => {
      await this.redisClient.del(key)
    }, 1000)
  }
}
