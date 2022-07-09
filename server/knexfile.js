module.exports = {
  test: {
    client: "mysql2",
    connection: process.env.DB_CONNECTION,

    migrations: {
      directory: __dirname + "/db/migrations",
    },
    seeds: {
      directory: __dirname + "/db/seeds/test",
    },
  },
  development: {
    client: "mysql2",
    connection:
      "mysql://root:z1x2c3v4@localhost:3306/online_store?charset=utf8mb4&multipleStatements=true",
    migrations: {
      directory: __dirname + "/db/migrations",
    },
    seeds: {
      directory: __dirname + "/db/seeds/development",
    },
  },
  production: {
    client: "mysql2",
    connection: process.env.DB_CONNECTION,
    migrations: {
      directory: __dirname + "/db/migrations",
    },
    seeds: {
      directory: __dirname + "/db/seeds/production",
    },
  },
};
