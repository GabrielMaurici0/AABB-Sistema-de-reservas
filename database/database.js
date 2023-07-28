const sequelize = require("sequelize");
require("dotenv").config();

const connection = new sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    dialect: "mysql",
    host: process.env.DB_HOST,
    define: {
      timestamp: false,
    },
  }
);

module.exports = { connection };
