const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Income extends Model {  }

  Income.init(
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
          type: DataTypes.DECIMAL(10,2), 
          allowNull: false,
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
        modelName: 'income'
    }
  );

module.exports = Income;