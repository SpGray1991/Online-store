exports.up = function (knex, Promise) {
  return knex.schema.createTable("user", (table) => {
    table.increments("id").primary();
    table.string("email").unique();
    table.string("password");
    table.string("role").defaultTo("USER");
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable("user");
};
