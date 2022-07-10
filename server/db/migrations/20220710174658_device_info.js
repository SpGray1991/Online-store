exports.up = function (knex, Promise) {
  return knex.schema.createTable("device_info", (table) => {
    table.increments("id").primary();
    table.string("title").notNullable();
    table.string("description").notNullable();
    table.integer("device_id").unsigned();
    table.foreign("device_id").references("id").inTable("device");
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable("device_info");
};
