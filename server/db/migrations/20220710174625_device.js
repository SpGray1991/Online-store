exports.up = function (knex, Promise) {
  return knex.schema.createTable("device", (table) => {
    table.increments("id").primary();
    table.string("name").unique().notNullable();
    table.integer("price").notNullable();
    table.integer("rating").defaultTo(0);
    table.string("img").notNullable();
    table.integer("type_id").unsigned();
    table.foreign("type_id").references("id").inTable("type");
    table.integer("brand_id").unsigned();
    table.foreign("brand_id").references("id").inTable("brand");
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable("device");
};
