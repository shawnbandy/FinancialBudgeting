const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Household extends Model {  }

  Household.init(
    {
        id: {
            type: DataTypes.INTEGER, 
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        //*db params go here
    },

    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'household'
    }
  );

module.exports = Household;