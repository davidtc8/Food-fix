const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class User_plan extends Model { }

User_plan.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    weight: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    height: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    activity: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    goal: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    protein: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    fat: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    carbs: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    calories: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      }
    }

  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user_plan',
  }
);

module.exports = User_plan;