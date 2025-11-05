import { Model } from "sequelize-typescript";
import { Table, Column, DataType, HasMany, BelongsTo, ForeignKey } from 'sequelize-typescript';

@Table({
    tableName: 'budgets',
})
 class Budget extends Model{
    @Column({
        type: DataType.STRING(100)
    })
    name: string | undefined
}

export default Budget;