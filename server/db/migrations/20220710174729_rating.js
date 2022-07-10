exports.up = function (knex, Promise) {
  return knex.schema.createTable("rating", (table) => {
    table.increments("id").primary();
    table.integer("rate").notNullable();
    table.integer("user_id").unsigned();
    table.foreign("user_id").references("id").inTable("user");
    table.integer("device_id").unsigned();
    table.foreign("device_id").references("id").inTable("device");
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable("rating");
};
