
exports.up = function(knex, Promise) {
  return knex.schema.createTable('walks_general', function(table) {
    table.increments('id').primary()
    table.string('walk_name')
    table.string('description')
    table.boolean('full_walk')
    table.string('coordinates')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('walks_general')
};
