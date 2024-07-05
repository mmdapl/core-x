import {Column, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm'


/**
 * 基础实体
 */
export class BaseEntity {
  /**
   * 自增主键
   */
  @PrimaryGeneratedColumn({
    type: 'bigint',
  })
  id!: number

  @CreateDateColumn({
    type: 'timestamp',
  })
  createTime!: Date

  /**
   * 更新时间
   */
  @UpdateDateColumn({
    type: 'timestamp',
  })
  updateTime!: Date
}


/**
 * 带删除状态的实体
 */
export class BaseEntityWithDeleted extends BaseEntity {
  @Column({
    type: 'boolean',
    default: false,
  })
  deleted!: boolean
}
