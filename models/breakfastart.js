const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class breakfastart extends Model {}

breakfastart.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    filename: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    breakfast_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "breakfastart",
        key: "id",
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "breakfastart",
  }
);

module.exports = breakfastart;
