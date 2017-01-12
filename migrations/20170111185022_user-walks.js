
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user_walks', function(table) {
    table.increments('id').primary()
    table.integer('walk_id').references('walks_general.id')
    table.string('date')
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('user_walks')
};
