exports.up = function (knex, Promise) {
  return knex.schema.createTable("basket_device", (table) => {
    table.increments("id").primary();
    table.integer("device_id").unsigned();
    table.foreign("device_id").references("id").inTable("device");
    table.integer("basket_id").unsigned();
    table.foreign("basket_id").references("id").inTable("basket");
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable("basket_device");
};
