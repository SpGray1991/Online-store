exports.up = function (knex, Promise) {
  return knex.schema.createTable("type", (table) => {
    table.increments("id").primary();
    table.string("name").unique().notNullable();
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable("type");
};
