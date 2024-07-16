import type RedisClient from 'ioredis'

export class Redis {
  private redisClient: RedisClient

  constructor(redisClient: RedisClient) {
    this.redisClient = redisClient
  }

  /**
   * 延迟双删
   * @param key
   */
  public async delete(key: string) {
    await this.redisClient.del(key)
  }
}
