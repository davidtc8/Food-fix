const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Beverages extends Model {}

Beverages.init (
 
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
          quantity: {
            type: DataTypes.DECIMAL,
            allowNull: false,
          },
          Unit: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          cal: {
            type: DataTypes.DECIMAL,
            allowNull: false,
          },
          proteins: {
            type: DataTypes.DECIMAL,
            allowNull: false,
          },
          lipids: {
            type: DataTypes.DECIMAL,
            allowNull: false,
          },
          carbohydrates: {
            type: DataTypes.DECIMAL,
            allowNull: false,
          },
          equivalent_composition: {
            type: DataTypes.STRING,
          },
        },
        {
          sequelize,
          timestamps: false,
          freezeTableName: true,
          underscored: true,
          modelName: 'beverages',
        }
      );

module.exports = Beverages;
