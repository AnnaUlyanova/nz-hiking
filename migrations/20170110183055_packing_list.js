
exports.up = function(knex, Promise) {
  return knex.schema.createTable('packing_list', function(table) {
    table.increments('id').primary()
    table.string('item')
    table.integer('walk_id').references('walks_general.id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('packing_list')
};
