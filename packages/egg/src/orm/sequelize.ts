import type { Options } from 'sequelize'
import { DataTypes, Sequelize } from 'sequelize'

export const BaseSequelizeOptions = {
  // 全局默认配置
  freezeTableName: false,
  timestamps: true,
  /**
   * 重写时间戳
   */
  createdAt: 'createTime',
  updatedAt: 'updateTime',
  deletedAt: false,

  hooks: {
    // beforeCreate: (record, _options) => {
    //     record.dataValues.createTime = new Date().getTime()
    // },
    // beforeUpdate: (record, _options) => {
    //     record.dataValues.modifyTime = new Date().getTime()
    // },
    // 强制为每一行都更新
    beforeBulkUpdate: () => ({
      options: { individualHooks: true },
    }),
  },
}

/**
 * 基础实体
 */
export const BaseSequelizeEntity = {
  /**
   * 主键
   */
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  /**
   * 是否删除
   */
  deleted: {
    type: DataTypes.BIGINT,
    defaultValue: false,
  },
}

/**
 * 创建实体
 */
export function createSequelizeEntity(userSequelizeEntity: object) {
  return Object.assign({}, BaseSequelizeEntity, userSequelizeEntity)
}

export const VipSequelize = {
  BaseOptions: BaseSequelizeOptions,
  BaseEntity: BaseSequelizeEntity,
  createEntity: createSequelizeEntity,
}

export interface SequelizeOptions extends Options {
  connectUri?: string
  Sequelize: typeof Sequelize
}

/**
 * Sequelize基础类
 */
export class SequelizeORM {
  private readonly options: SequelizeOptions
  private sequelize: Sequelize
  constructor(options: SequelizeOptions) {
    this.options = options
    this.sequelize = this.getConnect()
  }

  /**
   * 连接
   */
  getConnect() {
    if (this.sequelize == null) {
      const _Sequelize = this.options.Sequelize || Sequelize
      this.sequelize = this.options.connectUri != null
        ? new _Sequelize(this.options.connectUri, this.options)
        : new _Sequelize(this.options)
    }
    return this.sequelize
  }

  /**
   * 连接重试
   */
  public async retry() {
    await this.sequelize.authenticate()
  }

  /**
   * 关闭连接
   */
  public async disconnect() {
    await this.sequelize.close()
  }
}
