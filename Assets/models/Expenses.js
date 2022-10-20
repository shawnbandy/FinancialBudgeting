const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Expenses extends Model {}

Expenses.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    amount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    budget_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'budget',
        key: 'id',
      },
    },
    household_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'household',
        key: 'id',
      },
    },
  },

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'expenses',
  }
);

module.exports = Expenses;
