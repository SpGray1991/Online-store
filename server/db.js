const { Model } = require("objection");
const Knex = require("knex");

const knex = Knex({
  client: "mysql2",
  connection:
     /*  {
    host: "localhost",
    user: "root", //replace with your username
    password: "z1x2c3v4", //replace with your password
    database: "online_store", // replace with your db name
  }, */,
  /*  "mysql://root:z1x2c3v4@127.0.0.1:3306/online_store?charset=utf8mb4" */ /* {
    host: process.env.DB_HOST,
    user: process.env.DB_USER, // replace with your mysql username
    password: process.env.DB_PASSWORD, // replace with your mysql password
    database: process.env.DB_NAME,
  }, */
  migrations: {
    tableName: "migrations",
  },
  seeds: {
    directory: "/db/seeds/test",
  },
});

/* staging: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },

  production: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  }, */

Model.knex(knex);

module.exports = knex;
