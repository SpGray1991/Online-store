exports.up = function (knex, Promise) {
  return knex.schema.createTable("type_brand", (table) => {
    table.integer("type_id").unsigned().references("type.id");
    table.integer("brand_id").unsigned().references("brand.id");
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable("type_brand");
};
