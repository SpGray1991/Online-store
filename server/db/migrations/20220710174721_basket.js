exports.up = function (knex, Promise) {
  return knex.schema.createTable("basket", (table) => {
    table.increments("id").primary();
    table.integer("user_id").unsigned();
    table.foreign("user_id").references("id").inTable("user");
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable("basket");
};
