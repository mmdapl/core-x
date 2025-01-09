/**
 * 单例模式
 */
export abstract class Singleton<T> {
  private static instances: Map<new (...args: any[]) => any, any> = new Map()

  protected constructor(..._args: any[]) {
    if (Singleton.instances.has(this.constructor as new (...args: any[]) => T)) {
      throw new Error('Singleton failed: use getInstance() instead of new.')
    }
  }

  public static getInstance<T>(this: new (...args: any[]) => T, ...args: any[]): T {
    if (!Singleton.instances.has(this)) {
      Singleton.instances.set(this, new this(...args))
    }
    return Singleton.instances.get(this) as T
  }
}
