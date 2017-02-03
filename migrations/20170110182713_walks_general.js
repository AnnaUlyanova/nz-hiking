
exports.up = function(knex, Promise) {
  return knex.schema.createTable('walks_general', function(table) {
    table.integer('id').primary()
    table.string('walk_name')
    table.string('description')
    table.boolean('full_walk')
    table.integer('lat')
    table.integer('lng')
    table.string('alerts')
    table.string('pdf_url')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('walks_general')
};
