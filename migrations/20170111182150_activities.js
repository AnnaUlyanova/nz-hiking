
exports.up = function(knex, Promise) {
  return knex.schema.createTable('activities', function(table) {
    table.increments('id').primary()
    table.integer('walk_id').references('walks_general.id')
    table.string('description')
    table.string('url')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('activities')
};
