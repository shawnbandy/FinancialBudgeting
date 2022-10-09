const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class BudgetExpenses extends Model { }

BudgetExpenses.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    budget_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'budget',
        key: 'id',
      },
    },
    expenses_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'expenses',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'budget_expenses',
  }
);

module.exports = BudgetExpenses;