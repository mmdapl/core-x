import { DataTypes } from 'sequelize'

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
