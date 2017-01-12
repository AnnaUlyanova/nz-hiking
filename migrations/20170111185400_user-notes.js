
exports.up = function(knex, Promise) {
  return knex.schema.createTable('notes', function(table) {
    table.increments('id').primary()
    table.integer('user_walk_id').references('user_walks.id')
    table.string('note')
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('notes')
};
