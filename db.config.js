const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("absenoi", "root", "", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
