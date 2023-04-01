const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db.config");

class Admin extends Model {}

Admin.init(
  {
    nim: {
      type: DataTypes.INTEGER,
      unique: true,
    },
    nama: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: "Admins",
  }
);

module.exports = Admin;
