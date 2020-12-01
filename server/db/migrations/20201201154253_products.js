
exports.up = function(knex) {
  return knex.schema.createTable('products', table => {
      table.increments('id')
      table.string('item')
      table.integer('price')
  })
};

exports.down = function(knex) {
    return knex.schema.dropTable('products')
};
