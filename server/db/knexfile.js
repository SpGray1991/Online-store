require("dotenv").config();

module.exports = {
  client: "mysql2",
  connection: process.env.DB_CONNECTION,
  migrations: {
    tableName: "migrations",
  },
  seeds: {
    directory: __dirname + "/db/seeds/test",
  },
};
