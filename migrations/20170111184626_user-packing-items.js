
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user_packing_items', function(table) {
    table.increments('id').primary()
    table.integer('user_walk_id').references('user_walks.id')
    table.string('item')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user-packing-items')
};
